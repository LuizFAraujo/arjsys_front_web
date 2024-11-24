import React from 'react';
import Navbar from './_partials/Navbar';
import Sidebar from './_partials/Sidebar';
import Content from './_partials/Content';
import Footer from './_partials/Footer';
import { SidebarProvider } from '../contexts/SidebarContext';
import { useSidebar } from '../hooks/useSidebarContext';

const BaseLayout: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 w-full z-10 h-14">
                <Navbar />
            </div>

            <div className="flex flex-1 pt-14 z-5 pb-12">
                <div className={`flex ${isSidebarOpen ? 'w-60' : 'w-0'} transition-width duration-300`}>
                    <Sidebar />
                </div>
                <div className="flex flex-1">
                    <Content />
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-10 h-12">
                <Footer />
            </div>
        </div>
    );
};

const BaseLayoutWithProvider: React.FC = () => (
    <SidebarProvider>
        <BaseLayout />
    </SidebarProvider>
);

export default BaseLayoutWithProvider;
