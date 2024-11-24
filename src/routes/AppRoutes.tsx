import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Outras rotas podem ser adicionadas aqui */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
