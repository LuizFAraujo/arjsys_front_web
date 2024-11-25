import React, { createContext, useState } from 'react';

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
