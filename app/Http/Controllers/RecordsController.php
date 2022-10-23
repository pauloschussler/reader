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

        $newRecords = Records::create([
            'cpf' => $request->cpf,
            'privado' => $request->privado,
            'incompleto' => $request->incompleto,
            'ticket_medio' => $request->ticket_medio,
            'ticket_ultima_compra' => $request->ticket_ultima_compra,
            'loja_mais_frequente' => $request->loja_mais_frequente,
            'loja_ultima_compra' => $request->loja_ultima_compra
        ]);

        if ($newRecords) {

            return redirect()->route('records.index');
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

        if (Auth::check()) {

            return Inertia::render('Records/Edit', [
                'record' => Records::whereId($id)->first()
            ]);
        } else {

            return redirect('/dashboard');
        }
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
        $records->privado = $request->privado;
        $records->incompleto = $request->incompleto;
        $records->ticket_medio = $request->ticket_medio;
        $records->ticket_ultima_compra = $request->ticket_ultima_compra;
        $records->loja_mais_frequente = $request->loja_mais_frequente;
        $records->loja_ultima_compra = $request->loja_ultima_compra;

        if ($records->save()) {

            return redirect()->route('records.index');
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
