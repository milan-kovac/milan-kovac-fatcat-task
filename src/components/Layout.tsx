import React from 'react';
import clsx from 'clsx';

import { LayoutProps } from '@homework-task/interfaces/components.interfaces';

const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};

export default Layout;
