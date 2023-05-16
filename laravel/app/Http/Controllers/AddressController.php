<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use App\Models\Address;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function Illuminate\Events\queueable;

class AddressController extends Controller
{

    public function index()
    {
        try{
            $addresses = Address::query()
                                    ->get();
            if($addresses->isEmpty()){
                return $this->returnMenssageErro404('Não existe registros no banco');
            }

            return response()->json($addresses);
        }catch (\Exception $e){
            return $this->returnMenssageErro500($e);
        }
    }


    public function create()
    {
        //
    }


    public function store(AddressRequest $request)
    {
        if (strlen($request->cnpj) != 14) {
            $erros =  array('cnpj' => [
                'O CNPJ informado é inválido'
            ]);
            return $this->returnMenssageErro422($erros);
        }

        if(!$this->cnpjExist($request->cnpj)){
            return response()->json(['message'=>'Nenhum CNPJ cadastrado na base'], 404);        }

        try{
            DB::beginTransaction();

            $client = Client::query()
                                ->where('cnpj', $request->cnpj)
                                ->first();

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


    public function show($id)
    {
        try{
            $address = Address::query()
                ->where('id', $id)
                ->get();

            if($address->isEmpty()){
                return $this->returnMenssageErro404('Nenhum registro encontrato para este ID');
            }

            return response()->json($address);
        }catch (\Exception $e){
            return $this->returnMenssageErro500($e);
        }
    }


    public function edit(Address $address)
    {
        //
    }


    public function update(AddressRequest $request, $id)
    {
        $address = Address::query()
            ->where('id', $id)
            ->first();

        if($address !== null){
            try {
                $address->logradouro    = $request['logradouro'];
                $address->numero        = $request['numero'];
                $address->complemento   = $request['complemento'];
                $address->bairro        = $request['bairro'];
                $address->cidade        = $request['cidade'];
                $address->estado        = $request['estado'];
                $address->cep           = $request['cep'];
                $address->save();

                return $this->returnMenssageErro201($address);
            } catch (\Exception $e) {
                return $this->returnMenssageErro500($e);
            }
        }else{
            return $this->returnMenssageErro404('Nenhum registro encontrato para este ID');
        }
    }

    public function destroy($id)
    {
        $address = Address::where('id', $id)->first();

        if($address){
            try{
                $address->delete();
                return response()->json(['message'=>'Endereço excluido com sucesso'], 204);
            }catch (\Exception $e){
                return $this->returnMenssageErro500($e);
            }
        }else{
            return $this->returnMenssageErro404('Nenhum registro encontrato para este ID');
        }
    }

    private function returnMenssageErro500($e)
    {
        return response()
            ->json(['message'=>'Ocorreu um erro na requisição',
                'error' => $e], 500);

    }
    private function returnMenssageErro404($message){
        return response()->json(['message'=>$message], 404);
    }
    private function returnMenssageErro201($address){
        return response()->json([
            'message' => 'Requisição realizada com sucesso',
            'data' => $address,
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
