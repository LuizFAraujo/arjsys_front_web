import { useContext } from 'react';
import { FooterContext } from '../contexts/FooterContext';

export const useFooter = () => {
    const context = useContext(FooterContext);
    if (!context) {
        throw new Error('useFooter deve ser usado dentro de um FooterProvider');
    }
    return context;
};
