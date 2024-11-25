import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

const Cadastro_NovaOrdemProducao: React.FC = () => {
    return (
        <div className="flex flex-col p-4 h-full overflow-y-auto bg-gray-100">
            <div className="text-sm text-gray-600 mb-2">Home / Engenharia / Produção</div>
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex flex-col items-center flex-1">
                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <h2 className="text-2xl font-bold mb-4">Cadastro - Nova Ordem de Produção</h2>
                    
                    <div className="mb-4">
                        <label className="block text-gray-900 text-base font-bold mb-2">Código</label>
                        <input type="text" className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-900 text-base font-bold mb-2">Descrição</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-900 text-base font-bold mb-2">Observações</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                            <FontAwesomeIcon icon={faTimes} className="mr-2" />
                            Cancelar
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center" type="button">
                            <FontAwesomeIcon icon={faSave} className="mr-2" />
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro_NovaOrdemProducao;
