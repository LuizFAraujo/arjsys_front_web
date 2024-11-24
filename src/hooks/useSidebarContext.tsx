import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar deve ser usado dentro de um SidebarProvider');
    }
    return context;
};