import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 p-4 h-full overflow-y-auto bg-gray-100">
            <h1 className="text-lg font-semibold">Navegação</h1>
            <hr className="mx-0 border-t border-gray-300" />
            <RepeatedMenu times={20} />
        </div>
    );
};

export default Sidebar;

const MenuModelo: React.FC = () => {
    return (
        <p className="my-2 text-gray-700">
            Menu Modelo
        </p>
    );
};

const RepeatedMenu: React.FC<{ times: number }> = ({ times }) => {
    const menuModelo = [];
    for (let i = 0; i < times; i++) {
        menuModelo.push(<MenuModelo key={i} />);
    }
    return <div className="flex flex-col">{menuModelo}</div>;
};
