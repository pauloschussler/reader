<?php

namespace App\Http\Controllers\Validation;

use App\Http\Controllers\Controller;


class Validation extends Controller
{


    public function validateCpf($cpf)
    {

        if ($cpf == null) {

            return false;
        }

        //Convert to numbers only
        $cpf = preg_replace('/[^0-9]/is', '', $cpf);

        //Verify length of string
        if (strlen($cpf) != 11) {

            return false;
        }

        //Verify if numbers are a sequence
        if (preg_match('/(\d)\1{10}/', $cpf)) {

            return false;
        }

        // Calculation to validate CPF
        for ($t = 9; $t < 11; $t++) {

            for ($d = 0, $c = 0; $c < $t; $c++) {

                $d += $cpf[$c] * (($t + 1) - $c);
            }

            $d = ((10 * $d) % 11) % 10;

            if ($cpf[$c] != $d) {

                return false;
            }
        }

        return true;
    }

    public function validateCnpj($cnpj)
    {

        //Convert to numbers only
        $cnpj = preg_replace('/[^0-9]/', '', (string) $cnpj);

        //Verify length of string
        if (strlen($cnpj) != 14)
            return false;

        //Verify if numbers are a sequence
        if (preg_match('/(\d)\1{13}/', $cnpj))
            return false;

        // Verify first check digit
        for ($i = 0, $j = 5, $sun = 0; $i < 12; $i++) {

            $sun += $cnpj[$i] * $j;
            $j = ($j == 2) ? 9 : $j - 1;
        }

        $rest = $sun % 11;

        if ($cnpj[12] != ($rest < 2 ? 0 : 11 - $rest))
            return false;

        // Verify second check digit
        for ($i = 0, $j = 6, $sun = 0; $i < 13; $i++) {
            $sun += $cnpj[$i] * $j;
            $j = ($j == 2) ? 9 : $j - 1;
        }

        $rest = $sun % 11;

        return $cnpj[13] == ($rest < 2 ? 0 : 11 - $rest);
    }
}
