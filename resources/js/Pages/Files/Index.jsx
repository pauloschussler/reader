import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';

export default function Dashboard(props) {

    const { files } = usePage().props

    function destroy(e) {
        if (confirm("Confirmar a exclusão do registro de arquivo?")) {
            Inertia.delete(route("files.destroy", e.currentTarget.id));
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Arquivos</h2>}
        >
            <Head title="Arquivos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("files.create")}
                                >
                                    Importar arquivo
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">ID</th>
                                        <th className="px-4 py-2">Nome</th>
                                        <th className="px-4 py-2">Linhas</th>
                                        <th className="px-4 py-2">Tamanho</th>
                                        <th className="px-4 py-2">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.data.map(({ id, name, lines, size }) => (
                                        <tr>
                                            <td className="border px-4 py-2">{id}</td>
                                            <td className="border px-4 py-2">{name}</td>
                                            <td className="border px-4 py-2">{lines}</td>
                                            <td className="border px-4 py-2">{size}</td>
                                            <td className="border px-4 py-2">
                                                {/* <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("files.edit", id)}
                                                >
                                                    Edit
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

                                    {files.data.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                Nenhum arquivo encontrado.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <Pagination class="mt-6" links={files.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
