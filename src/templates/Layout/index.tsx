import React, { FC, PropsWithChildren } from 'react';

import { Footer } from '@/organisms/Footer';
import { Header } from '@/organisms/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main className="flex-1 bg-neutral-50 px-4 py-6 md:p-8">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
