import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';

export default function Dashboard(props) {

    const { records } = usePage().props

    console.log(records);

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

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.data.map(({ id, cpf }) => (
                                        <tr>
                                            <td className="border px-4 py-2">{id}</td>
                                            <td className="border px-4 py-2">{cpf}</td>
                                            <td className="border px-4 py-2"> teste</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination class="mt-6" links={records.links} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
