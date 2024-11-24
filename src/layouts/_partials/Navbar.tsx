import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between p-4 h-full bg-custom-blue-1">
            <IconButton icon={<FontAwesomeIcon icon={faBars} />} />
            <h1 className="text-white text-lg font-bold">ArjSys</h1>
            <IconButton icon={<FontAwesomeIcon icon={faCog} />} />
        </div>
    );
};

const IconButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
    return (
        <button className="w-9 h-9 flex items-center justify-center bg-custom-blue-1 rounded-lg hover:bg-custom-blue-2 text-white">
            {icon}
        </button>
    );
};

export default Navbar;
