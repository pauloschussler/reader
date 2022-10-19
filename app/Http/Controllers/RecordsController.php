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

            $records = Records::all();
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
        return Inertia::render('Records/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $newRecords = Records::create([
            'cpf' => $request->cpf,
            'private' => $request->private,
            'incompleto' => $request->incompleto,
            'ticket_medio' => $request->ticket_medio,
            'ticket_ultima_compra' => $request->ticket_ultima_compra,
            'loja_mais_frequente' => $request->loja_mais_frequente,
            'loja_ultima_compra' => $request->loja_ultima_compra
        ]);

        if ($newRecords) {

            return response()->json(["status" => 200]);
        }
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
