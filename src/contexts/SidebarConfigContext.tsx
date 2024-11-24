import React, { createContext, useState } from 'react';

interface SidebarConfigContextProps {
    isSidebarConfigOpen: boolean;
    toggleSidebarConfig: () => void;
}

export const SidebarConfigContext = createContext<SidebarConfigContextProps | undefined>(undefined);

export const SidebarConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarConfigOpen, setIsSidebarConfigOpen] = useState(false);

    const toggleSidebarConfig = () => {
        setIsSidebarConfigOpen(!isSidebarConfigOpen);
    };

    return (
        <SidebarConfigContext.Provider value={{ isSidebarConfigOpen, toggleSidebarConfig }}>
            {children}
        </SidebarConfigContext.Provider>
    );
};
