<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    protected $connection = 'pgsql_migrate';

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::connection('pgsql_migrate')->create('files', function (Blueprint $table) {
            $table->id();
            $table->string("name")->nullable($value = true);
            $table->integer("user")->nullable($value = true);
            $table->integer("size")->nullable($value = true);
            $table->integer("lines")->nullable($value = true);
            $table->index('user');
            $table->foreign('user')->references('id')->on('users')->onDelete('cascade');
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
        Schema::connection('pgsql_migrate')->dropIfExists('files');
    }
};
