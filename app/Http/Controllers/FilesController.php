<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use App\Models\Files;
use App\Models\Records;
use Illuminate\Support\Facades\Auth;

class FilesController extends Controller
{

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

    public function index()
    {

        if (Auth::check()) {

            $files = Files::all();
            return Inertia::render('Files/Index', ['files' => $files]);
        } else {

            return redirect('/dashboard');
        }
    }

    public function create()
    {

        if (Auth::check()) {

            return Inertia::render('Files/Create');
        } else {

            return redirect('/dashboard');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

    public function store(Request $request)
    {

        Validator::make($request->all(), [
            'file' => 'required|max:10240',
        ])->validate();

        $fileName = time() . '.' . $request->file->extension();

        $fileLines = file($request->file, FILE_IGNORE_NEW_LINES);

        Files::create([
            'name' => $fileName,
            'lines' => sizeof($fileLines),
            'size' => $request->file->getSize()
        ]);

        unset($fileLines[0]);

        $data = [];

        foreach ($fileLines as $line) {

            $lineData = preg_replace('/ {2,}/', ',', $line);
            $lineData = explode(',', $lineData);

            $this->createRecord($lineData);
        }


        // $retorno = explode(",", $output);


        return response()->json(['content' =>  '']);


        // $newRecords = Records::create([
        //     'cpf' => $request->cpf,
        //     'private' => $request->private,
        //     'incompleto' => $request->incompleto,
        //     'ticket_medio' => $request->ticket_medio,
        //     'ticket_ultima_compra' => $request->ticket_ultima_compra,
        //     'loja_mais_frequente' => $request->loja_mais_frequente,
        //     'loja_ultima_compra' => $request->loja_ultima_compra
        // ]);

        // if ($newRecords) {

        //     return response()->json(["status" => 200]);
        // }
    }

    private function createRecord(array $record)
    {

        Records::create([
            'cpf' => isset($record[0]) && $record[0] != "NULL" ? $record[0] : null,
            'private' => isset($record[1]) && $record[1] != "NULL" ? $record[1] : null,
            'incompleto' => isset($record[2]) && $record[2] != "NULL" ? $record[2] : null,
            'data_ultima_compra' => isset($record[3]) && $record[3] != "NULL" ? $record[3] : null,
            'ticket_medio' => isset($record[4]) && $record[4] != "NULL" ? $record[4] : null,
            'ticket_ultima_compra' => isset($record[5]) && $record[5] != "NULL" ? $record[5] : null,
            'loja_mais_frequente' => isset($record[6]) && $record[6] != "NULL" ? $record[6] : null,
            'loja_ultima_compra' => isset($record[7]) && $record[7] != "NULL" ? $record[7] : null,
        ]);
    }
}
