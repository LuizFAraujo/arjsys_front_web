import React from 'react';
import { Outlet } from 'react-router-dom';

const Content: React.FC = () => {
    return (
        <div className="flex flex-col p-4 h-full overflow-y-auto bg-gray-100">
            <Outlet />
        </div>
    );
};

export default Content;

