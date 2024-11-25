import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import Home from '../pages/Home';
import EmConstrucao from '../pages/EmConstrucao/EmConstrucao';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="EmConstrucao" element={<EmConstrucao />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
