import React from 'react';
import Select from 'react-select'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { files } = usePage().props

    const { data, setData, errors, post, progress } = useForm({
        file: null,
    });

    const privateOptions = [
        { value: true, label: 'Sim' },
        { value: false, label: 'Não' },
    ]

    function handleSubmit(e) {

        e.preventDefault();
        post(route("records.store"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adicionar registros</h2>}
        >
            <Head title="Adicionar Registros" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">CPF</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="CPF"
                                            name="cpf"
                                            value={data.cpf}
                                            onChange={(e) =>
                                                setData("cpf", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.cpf}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Privado</label>
                                        <Select
                                            type="select"
                                            className="ml-2 text-sm font-medium0"
                                            label="private"
                                            name="private"
                                            options={privateOptions}
                                            errors={errors.private}
                                            value={data.private}
                                            onChange={(e) =>
                                                setData("private", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.private}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Privado</label>
                                        <Select
                                            type="select"
                                            className="ml-2 text-sm font-medium0"
                                            label="private"
                                            name="private"
                                            options={privateOptions}
                                            errors={errors.private}
                                            value={data.private}
                                            onChange={(e) =>
                                                setData("private", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.private}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Ticket Médio</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="w-full px-4 py-2"
                                            label="Ticket médio"
                                            name="ticket_medio"
                                            value={data.ticket_medio}
                                            onChange={(e) =>
                                                setData("ticket_medio", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.ticket_medio}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <Link
                                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                        href={route("records.index")}
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
