<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $alphabet = range('A', 'Z');
        $randomLetters = $this->faker->randomElements($alphabet, 2);
        return [
            'logradouro'    => $this->faker->streetAddress,
            'numero'        => $this->faker->buildingNumber,
            'complemento'   => $this->faker->streetAddress,
            'bairro'        => $this->faker->firstName,
            'cidade'        => $this->faker->city,
            'estado'        => implode('', $randomLetters),
            'cep'           => $this->faker->postcode,
        ];
    }
}
