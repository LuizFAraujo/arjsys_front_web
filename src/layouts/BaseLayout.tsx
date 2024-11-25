import React from 'react';
import Navbar from './_partials/Navbar';
import Sidebar from './_partials/Sidebar';
import SidebarConfig from './_partials/SidebarConfig';
import Content from './_partials/Content';
import Footer from './_partials/Footer';
import { SidebarProvider } from '../contexts/SidebarContext';
import { SidebarConfigProvider } from '../contexts/SidebarConfigContext';
import { FooterProvider } from '../contexts/FooterContext';
import { useSidebar } from '../hooks/useSidebarContext';
import { useSidebarConfig } from '../hooks/useSidebarConfigContext';
import { useFooter } from '../hooks/useFooterContext';

const BaseLayout: React.FC = () => {
    const { isSidebarOpen } = useSidebar();
    const { isSidebarConfigOpen, toggleSidebarConfig } = useSidebarConfig();
    const { isFooterFixed } = useFooter();

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as HTMLElement).id === 'overlay') {
            toggleSidebarConfig();
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-10 h-14">
                <Navbar />
            </div>

            {/* Main content area */}
            <div className={`flex flex-1 pt-14 ${isFooterFixed ? 'pb-12' : ''} relative`}>
                {/* Container for sidebar and content with independent scrolling */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    {isSidebarOpen && (
                        <div className="flex flex-col w-60 overflow-y-auto h-screen border-r border-gray-300 transition-all duration-300">
                            <Sidebar />
                        </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col overflow-y-auto h-screen">
                        <Content />
                    </div>

                    {/* SidebarConfig */}
                    {isSidebarConfigOpen && (
                        <div id="overlay" className="fixed inset-0 bg-gray-700 bg-opacity-50 z-20" onClick={handleOutsideClick}>
                            <div className={`fixed top-14 bottom-12 right-0 ${isSidebarConfigOpen ? 'w-96' : 'w-0'} transition-all duration-300 bg-gray-100 border-l border-gray-300 z-30 overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
                                <SidebarConfig />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className={`${isFooterFixed ? 'fixed bottom-0' : 'relative'} left-0 w-full z-10 h-12 border-t border-gray-300`}>
                <Footer />
            </div>
        </div>
    );
};

const BaseLayoutWithProviders: React.FC = () => (
    <SidebarProvider>
        <SidebarConfigProvider>
            <FooterProvider>
                <BaseLayout />
            </FooterProvider>
        </SidebarConfigProvider>
    </SidebarProvider>
);

export default BaseLayoutWithProviders;
