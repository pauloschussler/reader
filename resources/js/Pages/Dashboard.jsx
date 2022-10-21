import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { records } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("records.destroy", e.currentTarget.id));
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Registros</h2>}
        >
            <Head title="Registros" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="p-6 bg-white border-b border-gray-200">

                            <Link
                                href={route('records.index')}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Manage Posts
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </AuthenticatedLayout >
    );
}