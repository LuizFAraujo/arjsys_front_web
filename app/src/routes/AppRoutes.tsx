import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import Home from '../pages/Home';
import EmConstrucao from '../pages/EmConstrucao/EmConstrucao';
import NotFound from '../pages/NotFound/NotFound';
import Cadastro_NovoCliente from '../pages/Comercial/Vendas/Cadastro_NovoCliente';
import Cadastro_NovaVenda from '../pages/Comercial/Vendas/Cadastro_NovaVenda';
import Consulta_Clientes from '../pages/Comercial/Vendas/Consulta_Clientes';
import Consulta_VendasEfetuadas from '../pages/Comercial/Vendas/Consulta_VendasEfetuadas';
import Cadastro_NovaOrdemProducao from '../pages/Engenharia/Producao/Cadastro_NovaOrdemProducao';
import Consulta_OrdensDeProducao from '../pages/Engenharia/Producao/Consulta_OrdensDeProducao';
import Cadastro_NovoItem from '../pages/Engenharia/Projetos/Cadastro_NovoItem';
import Cadastro_AlimentarEstrutura from '../pages/Engenharia/Projetos/Cadastro_AlimentarEstrutura';
import Consulta_Estrutura from '../pages/Engenharia/Projetos/Consulta_Estrutura';
import Dashboard from '../pages/Dashboard/Dashboard';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="EmConstrucao" element={<EmConstrucao />} />
                    <Route path="Cadastro_NovoCliente" element={<Cadastro_NovoCliente />} />
                    <Route path="Cadastro_NovaVenda" element={<Cadastro_NovaVenda />} />
                    <Route path="Consulta_Clientes" element={<Consulta_Clientes />} />
                    <Route path="Consulta_VendasEfetuadas" element={<Consulta_VendasEfetuadas />} />
                    <Route path="Cadastro_NovaOrdemProducao" element={<Cadastro_NovaOrdemProducao />} />
                    <Route path="Consulta_OrdensDeProducao" element={<Consulta_OrdensDeProducao />} />
                    <Route path="Cadastro_NovoItem" element={<Cadastro_NovoItem />} />
                    <Route path="Cadastro_AlimentarEstrutura" element={<Cadastro_AlimentarEstrutura />} />
                    <Route path="Consulta_Estrutura" element={<Consulta_Estrutura />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
