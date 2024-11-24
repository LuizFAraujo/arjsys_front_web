import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSidebarConfig } from '../../hooks/useSidebarConfigContext';
import { useFooter } from '../../hooks/useFooterContext';

const SidebarConfig: React.FC = () => {
    const { toggleSidebarConfig } = useSidebarConfig();
    const { isFooterFixed, toggleFooterFixed } = useFooter();

    return (
        <div className="h-full p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Configurações</h1>
                <button className="w-6 h-6 text-gray-600 hover:text-gray-800" onClick={toggleSidebarConfig}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>

            <hr className="my-2 border-t border-gray-300" />

            <div>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" checked={isFooterFixed} onChange={toggleFooterFixed} />
                    <span className="ml-2 text-gray-700">Rodapé Fixo</span>
                </label>
            </div>
        </div>
    );
};

export default SidebarConfig;
