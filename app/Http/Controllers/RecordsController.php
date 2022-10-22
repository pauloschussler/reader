<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Records;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class RecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (Auth::check()) {

            $records = Records::orderBy('id', 'DESC')->paginate(20);

            return Inertia::render('Records/Index', ['records' => $records]);
        } else {

            return redirect('/dashboard');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        if (Auth::check()) {

            return Inertia::render('Records/Create');
        } else {

            return redirect('/dashboard');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Validator::make($request->all(), [
            'file' => 'required|max:10240',
        ])->validate();

        $fileName = time() . '.' . $request->file->extension();

        $fileLines = file($request->file, FILE_IGNORE_NEW_LINES);

        unset($fileLines[0]);

        $data = [];

        foreach ($fileLines as $line) {

            $lineData = preg_replace('/ {2,}/', ',', $line);
            $lineData = explode(',', $lineData);

            Records::create([
                'cpf' => $lineData[0] == "NULL" ? NULL : $lineData[0],
                'private' => $lineData[1] == "NULL" ? NULL : $lineData[1],
                'incompleto' => $lineData[2] == "NULL" ? NULL : $lineData[2],
                'data_ultima_compra' => $lineData[3] == "NULL" ? NULL : $lineData[3],
                'ticket_medio' => $lineData[4] == "NULL" ? NULL : $lineData[3],
                'ticket_ultima_compra' => $lineData[5] == "NULL" ? NULL : $lineData[4],
                'loja_mais_frequente' => $lineData[6] == "NULL" ? NULL : $lineData[5],
                'loja_ultima_compra' => $lineData[7] == "NULL" ? NULL : $lineData[6],
            ]);
        }


        // $retorno = explode(",", $output);


        return response()->json(['content' => $data]);


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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $records = Records::find($id);
        return response()->json(['status' => 200, 'records' => $records]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $records = Records::find($id);

        $records->cpf = $request->cpf;
        $records->private = $request->private;
        $records->incompleto = $request->incompleto;
        $records->ticket_medio = $request->ticket_medio;
        $records->ticket_ultima_compra = $request->ticket_ultima_compra;
        $records->loja_mais_frequente = $request->loja_mais_frequente;
        $records->loja_ultima_compra = $request->loja_ultima_compra;

        if ($records->save()) {

            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        Records::find($id)->delete();
        return redirect()->route('records.index');
    }
}
