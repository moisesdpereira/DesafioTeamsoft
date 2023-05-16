<?php

namespace Tests\Feature\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use App\Models\Client;
use App\Models\Address;

class ClientsControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the clients get endpoint.
     */
    public function test_clients_get_endpoint()
    {
        $clients = Client::factory(10)->has(Address::factory()->count(2), 'enderecos')->create();

        $response = $this->getJson('/api/clients');

        $response->assertStatus(200);

        $response->assertJsonCount($clients->count())
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'cnpj',
                    'razao_social',
                    'nome_contato',
                    'telefone',
                    'enderecos' => [
                        '*' => [
                            'id',
                            'client_id',
                            'logradouro',
                            'numero',
                            'complemento',
                            'bairro',
                            'cidade',
                            'estado',
                            'cep',
                            'latitude',
                            'longitude',
                        ]
                    ]
                ]
            ]);
    }

    public function test_clients_post_endpoint()
    {
        $clientData = [
            'cnpj' => '10000000000102',
            'razao_social' => 'Empresa Exemplo 2',
            'nome_contato' => 'João Silva',
            'telefone' => '1234567890',
            'enderecos' => [
                [
                    'logradouro' => 'Rua da Fraternidade 2',
                    'numero' => '5',
                    'complemento' => 'Casa',
                    'bairro' => 'Bengui',
                    'cidade' => 'Belém',
                    'estado' => 'PA',
                    'cep' => '66630055',
                ],
            ],
        ];

        $response = $this->postJson('/api/clients', $clientData);

        $response->assertStatus(201);

        $responseData = $response->json();

        $this->assertEquals('Requisição realizada com sucesso', $responseData['message']);
        $this->assertNotEmpty($responseData['data']);
        $this->assertCount(1, $responseData['data']);
        $this->assertEquals($clientData['cnpj'], $responseData['data'][0]['cnpj']);
        $this->assertEquals($clientData['razao_social'], $responseData['data'][0]['razao_social']);
        $this->assertEquals($clientData['nome_contato'], $responseData['data'][0]['nome_contato']);
        $this->assertEquals($clientData['telefone'], $responseData['data'][0]['telefone']);
        $this->assertNotEmpty($responseData['data'][0]['enderecos']);
    }

    public function test_clients_update_endpoint()
    {
        $client = Client::factory()->create();

        $updatedData = [
            'razao_social' => 'Nova Razão Social',
            'nome_contato' => 'Novo Contato',
            'telefone' => '987654321',
        ];

        $response = $this->patchJson('/api/clients/' . $client->cnpj, $updatedData);

        $response->assertStatus(201);

        $response->assertJsonStructure([
            'message',
            'data' => [
                'id',
                'cnpj',
                'razao_social',
                'nome_contato',
                'telefone',
            ],
        ]);

        $response->assertJson([
            'data' => [
                'razao_social' => 'Nova Razão Social',
                'nome_contato' => 'Novo Contato',
                'telefone' => '987654321',
            ],
        ]);
    }

    public function test_clients_destroy_endpoint()
    {
        $client = Client::factory()->create();

        $response = $this->deleteJson('/api/clients/' . $client->cnpj);

        $response->assertStatus(204);

        $response->assertJson([
            'message' => 'Cliente excluido com sucesso',
        ]);

        $this->assertSoftDeleted('clients', ['id' => $client->id]);
    }

}
