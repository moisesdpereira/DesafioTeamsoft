<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * CNPJ (Obrigatório)
     * Razão Social (Obrigatório)
     * Nome do Contato (Obrigatório)
     * Telefone (Obrigatório)
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('cnpj', 14)->nullable();
            $table->string('razao_social')->nullable();
            $table->string('nome_contato')->nullable();
            $table->string('telefone')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
