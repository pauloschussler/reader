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
                                        <label className="text-uppercase font-weight-bold">CPF</label>
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
                                    <label className="text-uppercase font-weight-bold">Privado</label>
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
                                    <label className="text-uppercase font-weight-bold">Incompleto</label>
                                        <Select
                                            type="select"
                                            className="ml-2 text-sm font-medium0"
                                            label="private"
                                            name="private"
                                            options={privateOptions}
                                            errors={errors.incompleto}
                                            value={data.incompleto}
                                            onChange={(e) =>
                                                setData("incompleto", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.incompleto}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-uppercase font-weight-bold">Ticket Médio</label>
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
                                    <div className="mb-4">
                                        <label className="text-uppercase font-weight-bold">Ticket última compra</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="w-full px-4 py-2"
                                            label="Ticket última compra"
                                            name="ticket_ultima_compra"
                                            value={data.ticket_ultima_compra}
                                            onChange={(e) =>
                                                setData("ticket_ultima_compra", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.ticket_ultima_compra}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-uppercase font-weight-bold">Loja mais frequente</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="w-full px-4 py-2"
                                            label="Loja mais frequente"
                                            name="loja_mais_frequente"
                                            value={data.loja_mais_frequente}
                                            onChange={(e) =>
                                                setData("loja_mais_frequente", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.loja_mais_frequente}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-uppercase font-weight-bold">Loja última compra</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="w-full px-4 py-2"
                                            label="Loja última compra"
                                            name="loja_ultima_compra"
                                            value={data.loja_ultima_compra}
                                            onChange={(e) =>
                                                setData("loja_ultima_compra", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.loja_ultima_compra}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white border border-success bg-green-500 rounded"
                                    >
                                        Adicionar
                                    </button>

                                    <Link className="px-6 py-2 ml-2 border border-dark font-bold text-dark bg-white-500 rounded-md"
                                        href={route("records.index")}>
                                        <button>
                                            Cancelar
                                        </button>
                                    </Link>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </AuthenticatedLayout >
    );
}
