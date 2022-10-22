import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Início</h2>}
        >
            <Head title="Início" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link
                            href={route('records.index')}
                            className="underline text-sm text-gray-900 hover:text-gray-900"
                        >
                            Registros
                        </Link>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link
                            href={route('files.index')}
                            className="underline text-sm text-gray-900 hover:text-gray-900"
                        >
                            Arquivos
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
