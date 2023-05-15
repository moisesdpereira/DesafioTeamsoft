<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class AddressRequest extends FormRequest
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
                'logradouro'    => 'required',
                'numero'        => 'required',
                'bairro'        => 'required',
                'cidade'        => 'required',
                'estado'        => 'required',
                'cep'           => 'required',
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
