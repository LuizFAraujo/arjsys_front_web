import React, { createContext, useState, useContext } from 'react';

interface FooterContextProps {
    isFooterFixed: boolean;
    toggleFooterFixed: () => void;
}

export const FooterContext = createContext<FooterContextProps | undefined>(undefined);

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isFooterFixed, setIsFooterFixed] = useState(true);

    const toggleFooterFixed = () => {
        setIsFooterFixed(!isFooterFixed);
    };

    return (
        <FooterContext.Provider value={{ isFooterFixed, toggleFooterFixed }}>
            {children}
        </FooterContext.Provider>
    );
};

export const useFooter = () => {
    const context = useContext(FooterContext);
    if (!context) {
        throw new Error('useFooter deve ser usado dentro de um FooterProvider');
    }
    return context;
};
