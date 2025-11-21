import React, {FC, memo, PropsWithChildren} from 'react';
import './layout.component.css';

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className="layout-bg">
            <div className="layout-bg flex min-h-screen flex-col items-center justify-center gap-16 px-6 md:px-20 lg:flex-row">
                {children}
            </div>
        </main>
    );
};

export default memo(Layout);