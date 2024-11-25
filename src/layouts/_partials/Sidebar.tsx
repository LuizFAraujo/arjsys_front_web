import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

    const toggleSubMenu = (title: string) => {
        setOpenSubMenus((prevOpenSubMenus) =>
            prevOpenSubMenus.includes(title)
                ? prevOpenSubMenus.filter((menu) => menu !== title)
                : [...prevOpenSubMenus, title]
        );
    };

    const closeAllSubMenus = () => {
        setOpenSubMenus([]);
    };

    return (
        <div className="flex flex-col flex-1 p-4 h-full overflow-y-auto bg-gray-100">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-semibold">Setores</h1>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={closeAllSubMenus}
                    title="Fechar todos os submenus"
                >
                    <FontAwesomeIcon icon={faCompressAlt} />
                </button>
            </div>
            <hr className="mx-0 border-t border-gray-300 mb-2" />

            {/* SubMenu Favoritos */}
            <SubMenu title="Favoritos" isOpen={openSubMenus.includes('Favoritos')} toggleSubMenu={toggleSubMenu}>
                <MenuItem title="Função Adicionada" />
                <MenuItem title="Função Adicionada" />
                <MenuItem title="Função Adicionada" />
            </SubMenu>

            <hr className="mx-0 border-t border-gray-300" />

            {/* Menu Items */}
            <MenuItem title="Home" />
            <MenuItem title="Dashboard" />

            {/* SubMenu Engenharia */}
            <SubMenu title="Engenharia" isOpen={openSubMenus.includes('Engenharia')} toggleSubMenu={toggleSubMenu}>
                <SubMenu title="Projetos" isOpen={openSubMenus.includes('Projetos')} toggleSubMenu={toggleSubMenu}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Novo Item" />
                        <MenuItem title="Alimentar Estrutura" />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Estrutura" />
                    </SubMenu>
                </SubMenu>
                <SubMenu title="Produção" isOpen={openSubMenus.includes('Produção')} toggleSubMenu={toggleSubMenu}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Nova Ordem de Produção" />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Ordens de Produção" />
                        <MenuItem title="Vendas Efetuadas" />
                    </SubMenu>
                </SubMenu>
            </SubMenu>

            {/* SubMenu Comercial */}
            <SubMenu title="Comercial" isOpen={openSubMenus.includes('Comercial')} toggleSubMenu={toggleSubMenu}>
                <SubMenu title="Vendas" isOpen={openSubMenus.includes('Vendas')} toggleSubMenu={toggleSubMenu}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Novo Cliente" />
                        <MenuItem title="Nova Venda" />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu}>
                        <MenuItem title="Clientes" />
                        <MenuItem title="Vendas Efetuadas" />
                    </SubMenu>
                </SubMenu>
            </SubMenu>
        </div>
    );
};

export default Sidebar;

const MenuItem: React.FC<{ title: string }> = ({ title }) => {
    return (
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            {title}
        </a>
    );
};

const SubMenu: React.FC<{ title: string; isOpen: boolean; toggleSubMenu: (title: string) => void; children: React.ReactNode }> = ({ title, isOpen, toggleSubMenu, children }) => {
    return (
        <div className="my-2">
            <button
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                onClick={() => toggleSubMenu(title)}
            >
                <span>{title}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
            </button>
            {isOpen && <div className="ml-4">{children}</div>}
        </div>
    );
};
