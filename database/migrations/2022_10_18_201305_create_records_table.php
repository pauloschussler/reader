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
            $table->char("cpf", 14)->nullable($value = true);
            $table->boolean("privado")->nullable($value = true);
            $table->boolean("incompleto")->nullable($value = true);
            $table->date("data_ultima_compra")->nullable($value = true);
            $table->decimal('ticket_medio')->nullable($value = true);
            $table->decimal('ticket_ultima_compra')->nullable($value = true);
            $table->char("loja_mais_frequente", 18)->nullable($value = true);
            $table->char("loja_ultima_compra", 18)->nullable($value = true);
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
