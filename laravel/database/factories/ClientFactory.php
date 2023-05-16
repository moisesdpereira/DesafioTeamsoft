<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cnpj'          => rand(10000000000100, 10999999000199),
            'razao_social'  => $this->faker->firstName.' LTDA',
            'nome_contato'  => $this->faker->name,
            'telefone'      => $this->faker->phoneNumber,
        ];
    }
}
