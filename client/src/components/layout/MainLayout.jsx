import React from 'react';
import BubbleMenu from '@/components/navigation/BubbleMenu/BubbleMenu';
import { NAV_LINKS } from '@/constants/navigation';

const MainLayout = ({ children }) => {
    return (
        <div className="app">
            <BubbleMenu logo="Amish Verma" items={NAV_LINKS} />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
