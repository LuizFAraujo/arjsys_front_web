import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight, faChevronDown, faCompressAlt, faHome, faTachometerAlt, faProjectDiagram, faCogs,
    faUsers, faShoppingCart, faEdit, faPlus, faSearch, faIndustry, faUserPlus, faDollarSign, faHeart,
    faCaretRight, faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col flex-1 p-2 h-full overflow-y-auto bg-gray-100">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-base font-semibold">Setores</h1>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={closeAllSubMenus}
                    title="Fechar todos os submenus"
                >
                    <FontAwesomeIcon icon={faCompressAlt} className="text-sm" />
                </button>
            </div>
            <hr className="mx-0 border-t border-gray-300 mb-2" />

            {/* SubMenu Favoritos */}
            <SubMenu title="Favoritos" isOpen={openSubMenus.includes('Favoritos')} toggleSubMenu={toggleSubMenu} icon={faHeart}>
                <MenuItem title="Função Adicionada" to="/EmConstrucao" icon={faPlus} />
                <MenuItem title="Função Adicionada" to="/EmConstrucao" icon={faPlus} />
                <MenuItem title="Função Adicionada" to="/EmConstrucao" icon={faPlus} />
            </SubMenu>

            <hr className="mx-0 border-t border-gray-300" />

            {/* Menu Items */}
            <MenuItem title="Home" to="/" icon={faHome} />
            <MenuItem title="Dashboard" to="/Dashboard" icon={faTachometerAlt} />

            {/* SubMenu Engenharia */}
            <SubMenu title="Engenharia" isOpen={openSubMenus.includes('Engenharia')} toggleSubMenu={toggleSubMenu} icon={faCogs}>
                <SubMenu title="Projetos" isOpen={openSubMenus.includes('Projetos')} toggleSubMenu={toggleSubMenu} icon={faProjectDiagram}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu} icon={faEdit}>
                        <MenuItem title="Novo Item" to="/Cadastro_NovoItem" icon={faPlus} />
                        <MenuItem title="Alimentar Estrutura" to="/Cadastro_AlimentarEstrutura" icon={faPlus} />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu} icon={faSearch}>
                        <MenuItem title="Estrutura" to="/Consulta_Estrutura" icon={faSearch} />
                    </SubMenu>
                </SubMenu>
                <SubMenu title="Produção" isOpen={openSubMenus.includes('Produção')} toggleSubMenu={toggleSubMenu} icon={faIndustry}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu} icon={faEdit}>
                        <MenuItem title="Nova Ordem de Produção" to="/Cadastro_NovaOrdemProducao" icon={faPlus} />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu} icon={faSearch}>
                        <MenuItem title="Ordens de Produção" to="/Consulta_OrdensDeProducao" icon={faSearch} />
                        <MenuItem title="Vendas Efetuadas" to="/Consulta_VendasEfetuadas" icon={faSearch} />
                    </SubMenu>
                </SubMenu>
            </SubMenu>

            {/* SubMenu Comercial */}
            <SubMenu title="Comercial" isOpen={openSubMenus.includes('Comercial')} toggleSubMenu={toggleSubMenu} icon={faShoppingCart}>
                <SubMenu title="Vendas" isOpen={openSubMenus.includes('Vendas')} toggleSubMenu={toggleSubMenu} icon={faDollarSign}>
                    <SubMenu title="Cadastro" isOpen={openSubMenus.includes('Cadastro')} toggleSubMenu={toggleSubMenu} icon={faEdit}>
                        <MenuItem title="Novo Cliente" to="/Cadastro_NovoCliente" icon={faUserPlus} />
                        <MenuItem title="Nova Venda" to="/Cadastro_NovaVenda" icon={faPlus} />
                    </SubMenu>
                    <SubMenu title="Consulta" isOpen={openSubMenus.includes('Consulta')} toggleSubMenu={toggleSubMenu} icon={faSearch}>
                        <MenuItem title="Clientes" to="/Consulta_Clientes" icon={faUsers} />
                        <MenuItem title="Vendas Efetuadas" to="/Consulta_VendasEfetuadas" icon={faDollarSign} />
                    </SubMenu>
                </SubMenu>
            </SubMenu>
        </div>
    );
};

export default Sidebar;

const MenuItem: React.FC<{ title: string; to?: string; icon: any }> = ({ title, to, icon }) => {
    return (
        <Link to={to || "#"} className="flex items-center px-2 py-1 text-gray-700 text-sm hover:bg-gray-200">
            <FontAwesomeIcon icon={icon} className="text-sm mr-2" />
            {title}
        </Link>
    );
};

const SubMenu: React.FC<{ title: string; isOpen: boolean; toggleSubMenu: (title: string) => void; children: React.ReactNode; icon: any }> = ({ title, isOpen, toggleSubMenu, children, icon }) => {
    return (
        <div className="my-1">
            <button
                className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-700 text-sm hover:bg-gray-200"
                onClick={() => toggleSubMenu(title)}
            >
                <div className="flex items-center">
                    <FontAwesomeIcon icon={icon} className="text-sm mr-2" />
                    <span>{title}</span>
                </div>
                <FontAwesomeIcon icon={isOpen ? faCaretDown : faCaretRight} className="text-sm" />
            </button>
            {isOpen && <div className="ml-4">{children}</div>}
        </div>
    );
};
