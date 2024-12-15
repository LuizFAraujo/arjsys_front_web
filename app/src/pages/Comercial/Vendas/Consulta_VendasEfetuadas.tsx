import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const Consulta_VendasEfetuadas: React.FC = () => {
    return (
        <div className="flex flex-col p-4 h-full overflow-y-auto bg-gray-100">
            <div className="text-sm text-gray-600 mb-2">Home / Comercial / Vendas</div>
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex flex-col items-center flex-1">
                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <h2 className="text-2xl font-bold mb-4">Consulta - Vendas Efetuadas</h2>

                    <div className="mb-4">
                        <label className="block text-gray-900 text-base font-bold mb-2">Componentes</label>
                        <div className="border rounded-lg overflow-hidden">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-200 text-gray-600">
                                    <tr>
                                        <th className="py-2 px-4 border-b">Id.</th>
                                        <th className="py-2 px-4 border-b">Código Venda</th>
                                        <th className="py-2 px-4 border-b">Código Item</th>
                                        <th className="py-2 px-4 border-b">Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Adicionando 10 linhas de exemplo */}
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">VD-{index + 1}</td>
                                            <td className="py-2 px-4 border-b">ITM-{index + 1}</td>
                                            <td className="py-2 px-4 border-b">Descrição Exemplo</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 mb-4" />

                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                                <FontAwesomeIcon icon={faStepBackward} className="mr-2" />
                                Primeiro
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                                <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                                Anterior
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                                Próximo
                                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                                Último
                                <FontAwesomeIcon icon={faStepForward} className="ml-2" />
                            </button>
                        </div>

                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                            <FontAwesomeIcon icon={faTimes} className="mr-2" />
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulta_VendasEfetuadas;
