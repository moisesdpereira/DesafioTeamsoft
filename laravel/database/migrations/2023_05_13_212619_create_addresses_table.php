<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Logradouro (Obrigatório)
     * Número (Obrigatório)
     * Complemento
     * Bairro (Obrigatório)
     * Cidade (Obrigatório)
     * Estado (Obrigatório)
     * CEP (Obrigatório)
     * Latitude (Somente leitura, bonus points)
     * Longitude (Somente leitura, bonus points)
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');
            $table->string('logradouro')->nullable();
            $table->string('numero')->nullable();
            $table->string('complemento');
            $table->string('bairro')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('cep')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->on('clients')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
