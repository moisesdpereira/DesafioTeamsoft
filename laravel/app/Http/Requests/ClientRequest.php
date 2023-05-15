<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ClientRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $method = $this->getMethod();

        if($method === 'POST') {
            return [
                'cnpj' => ['required', 'min:14', 'max:14'],
                'razao_social' => 'required',
                'nome_contato' => 'required',
                'telefone' => 'required',

                'enderecos' => 'required|array',
                'enderecos.*.logradouro' => 'required',
                'enderecos.*.numero' => 'required',
                'enderecos.*.bairro' => 'required',
                'enderecos.*.cidade' => 'required',
                'enderecos.*.estado' => 'required',
                'enderecos.*.cep' => 'required',
            ];
        }elseif ($method === 'PATCH' || $method === 'PUT') {
            return [
                'razao_social'  => 'required',
                'nome_contato'  => 'required',
                'telefone'      => 'required',
            ];
        }
        return[];
    }

    public function messages(): array
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'cnpj.min' => 'O campo CNPJ precisa ter 14 caracteres',
            'cnpj.max' => 'O campo CNPJ precisa ter 14 caracteres',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'message' => 'Problema na requisição',
            'errors' => $validator->errors(),
        ], 422));
    }
}
