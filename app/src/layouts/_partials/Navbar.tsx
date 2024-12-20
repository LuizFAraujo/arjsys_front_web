import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSidebar } from '../../hooks/useSidebarContext';
import { useSidebarConfig } from '../../hooks/useSidebarConfigContext';

const Navbar: React.FC = () => {
    const { toggleSidebar } = useSidebar();
    const { toggleSidebarConfig } = useSidebarConfig();

    return (
        <div className="flex items-center justify-between p-4 h-full bg-custom-blue-1">
            <IconButton icon={<FontAwesomeIcon icon={faBars} />} onClick={toggleSidebar} />
            <Link to="/" className="text-white text-lg font-bold">ArjSys</Link>
            <IconButton icon={<FontAwesomeIcon icon={faCog} />} onClick={toggleSidebarConfig} />
        </div>
    );
};

const IconButton: React.FC<{ icon: React.ReactNode, onClick?: () => void }> = ({ icon, onClick }) => {
    return (
        <button className="w-9 h-9 flex items-center justify-center bg-custom-blue-1 rounded-lg hover:bg-custom-blue-2 text-white" onClick={onClick}>
            {icon}
        </button>
    );
};

export default Navbar;
