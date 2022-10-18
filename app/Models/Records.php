<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
    use HasFactory;

    protected $fillable = [
        'cpf',
        'private',
        'incompleto',
        'data_ultima_compra',
        'ticket_medio',
        'ticket_ultima_compra',
        'loja_mais_frequente',
        'loja_ultima_compra',
    ];
}
