import { useContext } from 'react';
import { SidebarConfigContext } from '../contexts/SidebarConfigContext';

export const useSidebarConfig = () => {
    const context = useContext(SidebarConfigContext);
    if (!context) {
        throw new Error('useSidebarConfig deve ser usado dentro de um SidebarConfigProvider');
    }
    return context;
};
