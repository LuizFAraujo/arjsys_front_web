import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl font-bold">Erro 404</h1>
            <p className="text-xl text-gray-600 mt-2">Página Não Encontrada!</p>
        </div>
    );
};

export default NotFound;
