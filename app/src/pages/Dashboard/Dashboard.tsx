import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col p-4 h-full overflow-y-auto bg-gray-100">
            <div className="text-sm text-gray-600 mb-4">Home / Dashboard</div>
            <div className="flex flex-col items-center justify-center flex-1 text-center">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="text-xl text-gray-600 mt-2">Dashboard conforme o Setor Logado</p>
            </div>
        </div>
    );
};

export default Dashboard;
