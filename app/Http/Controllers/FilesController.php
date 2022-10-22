<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use App\Models\Files;
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

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

    public function store(Request $request)
    {

        Validator::make($request->all(), [
            'title' => 'required',
            'file' => 'required|mimes:text,csv|max:10240',
        ])->validate();

        $fileName = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);

        return response()->json(["status" => print_r($request->file)]);
    }
}
