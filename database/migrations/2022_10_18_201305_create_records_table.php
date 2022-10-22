<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->string("cpf")->nullable($value = true);
            $table->boolean("private")->nullable($value = true);
            $table->boolean("incompleto")->nullable($value = true);
            $table->date("data_ultima_compra")->nullable($value = true);
            $table->decimal('ticket_medio')->nullable($value = true);
            $table->decimal('ticket_ultima_compra')->nullable($value = true);
            $table->string("loja_mais_frequente")->nullable($value = true);
            $table->string("loja_ultima_compra")->nullable($value = true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
};
