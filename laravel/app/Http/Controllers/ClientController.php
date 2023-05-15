<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Http\Requests\ClientUpdateRequest;
use App\Models\Address;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    public function index()
    {
        try{
            $clients = Client::query()
                ->with(['enderecos'])
                ->get();
            if($clients->isEmpty()){
               return $this->returnMenssageErro404();
            }

            return response()->json($clients);
        }catch (\Exception $e){
            return $this->returnMenssageErro500($e);
        }
    }

    public function create()
    {
        //
    }

    public function store(ClientRequest $request)
    {
        if($this->cnpjExist($request->cnpj)){
            return response()
                ->json(['message'=>'CNPJ já cadastrado na base de dados'], 409);
        }

        try{
            DB::beginTransaction();

            $client = new Client();
            $client->cnpj           = $request->cnpj;
            $client->razao_social   = $request->razao_social;
            $client->nome_contato   = $request->nome_contato;
            $client->telefone       = $request->telefone;
            $client->save();

            foreach ($request->enderecos as $request_address):
                $address = new Address();
                $address->logradouro    = $request_address['logradouro'];
                $address->numero        = $request_address['numero'];
                $address->complemento   = $request_address['complemento'];
                $address->bairro        = $request_address['bairro'];
                $address->cidade        = $request_address['cidade'];
                $address->estado        = $request_address['estado'];
                $address->cep           = $request_address['cep'];
                $address->client_id     = $client->id;
                $address->save();
            endforeach;
            DB::commit();

            $client = Client::query()
                ->with(['enderecos'])
                ->where('id', $client->id)
                ->get();

            return $this->returnMenssageErro201($client);

        }catch (\Exception $e){
            DB::rollBack();
            return $this->returnMenssageErro500($e);
        }
    }

    public function show($cnpj)
    {
        if (strlen($cnpj) != 14) {
            $erros =  array('cnpj' => [
                'O CNPJ informado é inválido'
            ]);
            return $this->returnMenssageErro422($erros);
        }

        try{
            $clients = Client::query()
                ->where('cnpj', $cnpj)
                ->with(['enderecos'])
                ->get();

            if($clients->isEmpty()){
                return $this->returnMenssageErro404();
            }

            return response()->json($clients);
        }catch (\Exception $e){
            return $this->returnMenssageErro500($e);
        }
    }

    public function edit(Client $client)
    {
        //
    }

    public function update(ClientRequest $request, $cnpj)
    {
        if (strlen($cnpj) != 14) {
            $erros =  array('cnpj' => [
                'O CNPJ informado é inválido'
            ]);
            return $this->returnMenssageErro422($erros);
        }

        $client = Client::query()
                            ->where('cnpj', $cnpj)
                            ->first();

        if($client !== null){
            try {
                $client->razao_social   = $request->razao_social;
                $client->nome_contato   = $request->nome_contato;
                $client->telefone       = $request->telefone;
                $client->save();

                return $this->returnMenssageErro201($client);
            } catch (\Exception $e) {
                return $this->returnMenssageErro500($e);
            }
        }else{
            return $this->returnMenssageErro404();
        }


    }

    public function destroy($cnpj)
    {
        if (strlen($cnpj) != 14) {
            $erros = array('cnpj' => [
                'O CNPJ informado é inválido'
            ]);
            return $this->returnMenssageErro422($erros);
        }

        if(!$this->cnpjExist($cnpj)){
            $this->returnMenssageErro404();
        }

        $client = Client::where('cnpj', $cnpj)->first();

        if($client){
            try{
                $client->delete();
                return response()->json(['message'=>'Cliente excluido com sucesso'], 201);
            }catch (\Exception $e){
                return $this->returnMenssageErro500($e);
            }
        }else{
            return $this->returnMenssageErro404();
        }

    }

    private function returnMenssageErro500($e)
    {
        return response()
            ->json(['message'=>'Ocorreu um erro na requisição',
                'error' => $e], 500);

    }
    private function returnMenssageErro404(){
        return response()->json(['message'=>'Nenhum cliente cadastrado na base'], 404);
    }
    private function returnMenssageErro201($client){
        return response()->json([
            'message' => 'Requisição realizada com sucesso',
            'data' => $client,
        ], 201);
    }
    private function returnMenssageErro422($erros){
        return response()->json([
            'message' => 'Problema na requisição',
            'errors' => $erros,
        ], 422);
    }
    private function cnpjExist($cnpj)
    {
        try{
            $client = Client::query()
                ->where('cnpj', $cnpj)
                ->get();

            if($client->isEmpty()){
                return false;
            }

            return true;
        }catch (\Exception $e){
            return $this->returnMenssageErro500($e);
        }
    }
}
