import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';
import { Button } from 'bootstrap';

export default function Dashboard(props) {

    const { records } = usePage().props

    function destroy(e) {

        if (confirm("Confirmar a exlusão do registro?")) {

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
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">

                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("records.create")}
                            >
                                Adicionar
                            </Link>
                        </div>

                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">CPF</th>
                                    <th className="px-4 py-2">Ticket médio</th>
                                    <th className="px-4 py-2">Ticket última compra</th>
                                    <th className="px-4 py-2">Loja mais frequente</th>
                                    <th className="px-4 py-2">Loja última compra</th>
                                    <th className="px-4 py-2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.data.map(({ id, cpf, ticket_medio, ticket_ultima_compra, loja_mais_frequente, loja_ultima_compra }) => (
                                    <tr>
                                        <td className="border px-4 py-2">{id}</td>
                                        <td className="border px-4 py-2">{cpf}</td>
                                        <td className="border px-4 py-2">{ticket_medio}</td>
                                        <td className="border px-4 py-2">{ticket_ultima_compra}</td>
                                        <td className="border px-4 py-2">{loja_mais_frequente}</td>
                                        <td className="border px-4 py-2">{loja_ultima_compra}</td>
                                        <td className="border px-4 py-2">
                                            {/* <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                href={route("records.edit", id)}
                                            >
                                                Editar
                                            </Link> */}
                                            <button
                                                onClick={destroy}
                                                id={id}
                                                tabIndex="-1"
                                                type="button"
                                                className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>


                            {records.data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>
                            )}
                        </table>

                        <Pagination class="mt-6" links={records.links} />

                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
