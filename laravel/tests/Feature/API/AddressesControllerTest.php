<?php

namespace Tests\Feature\API;

use App\Models\Address;
use App\Models\Client;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class AddressesControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_addresses_get_endpoint()
    {
        $client = [
            "cnpj" => "10000000000102",
            "razao_social" => "Empresa Exemplo 2",
            "nome_contato" => "João Silva",
            "telefone" => "1234567890",
        ];

        $client = Client::create($client);

        $addresses = [
            [
                'client_id' => $client->id,
                'logradouro' => 'Rua da Fraternidade 2',
                'numero' => '5',
                'complemento' => 'Casa',
                'bairro' => 'Bengui',
                'cidade' => 'Belém',
                'estado' => 'PA',
                'cep' => '66630055',
            ],
        ];

        Address::insert($addresses);

        $response = $this->get('/api/addresses');

        $response->assertStatus(200);

        $response->assertJson($addresses);
    }

    public function test_addresses_post_endpoint(): void
    {
        $client = Client::factory()->create();
        $addressData = [
            "cnpj" => $client->cnpj,
            "enderecos" => [
                [
                    "logradouro" => "Rua da Bl1231231",
                    "complemento" => "casa fundos",
                    "cidade" => "Belém",
                    "estado" => "PA",
                    "cep" => "66000000",
                    "bairro" => "Bengui",
                    "numero" => "101"
                ]
            ]
        ];

        $response = $this->post('/api/addresses', $addressData);

        $response->assertStatus(201);
        $response->assertJson([
            'message' => 'Requisição realizada com sucesso',
            'data' => [
                [
                    'id' => $client->id,
                    'cnpj' => $addressData['cnpj'],
                    'enderecos' => [
                        [
                            'client_id' => $client->id,
                            'logradouro' => $addressData['enderecos'][0]['logradouro'],
                            'numero' => $addressData['enderecos'][0]['numero'],
                            'complemento' => $addressData['enderecos'][0]['complemento'],
                            'bairro' => $addressData['enderecos'][0]['bairro'],
                            'cidade' => $addressData['enderecos'][0]['cidade'],
                            'estado' => $addressData['enderecos'][0]['estado'],
                            'cep' => $addressData['enderecos'][0]['cep'],
                            'latitude' => null,
                            'longitude' => null,
                        ]
                    ],
                ],
            ],
        ]);
    }

    public function test_update_address_endpoint()
    {
        $client = Client::factory()->create();
        $addressData = [
            "logradouro" => "Rua da Bl1231231",
            "complemento" => "casa fundos",
            "cidade" => "Belém",
            "estado" => "PA",
            "cep" => "66000000",
            "bairro" => "Bengui",
            "numero" => "101"
        ];

        $address = Address::factory()->create(['client_id' => $client->id]);

        $response = $this->patch('/api/addresses/' . $address->id, $addressData);

        $response->assertStatus(201);
        $response->assertJson([
            'message' => 'Requisição realizada com sucesso',
            'data' => [
                'id' => $address->id,
                'client_id' => $client->id,
                'logradouro' => $addressData['logradouro'],
                'numero' => $addressData['numero'],
                'complemento' => $addressData['complemento'],
                'bairro' => $addressData['bairro'],
                'cidade' => $addressData['cidade'],
                'estado' => $addressData['estado'],
                'cep' => $addressData['cep'],
                'latitude' => null,
                'longitude' => null
            ]
        ]);
    }

    public function test_delete_address_endpoint()
    {
        $client = Client::factory()->create();
        $address = Address::factory()->create(['client_id' => $client->id]);

        $response = $this->delete('/api/addresses/' . $address->id);

        $response->assertStatus(204);

        $this->assertSoftDeleted('addresses', ['id' => $address->id]);

        $this->delete('/api/addresses/' . $address->id);

    }

}
