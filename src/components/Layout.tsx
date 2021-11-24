import React from 'react';
import { Header } from './Header';
import { BaseLayoutProps } from 'types/props';
import { bem } from 'utils/helper';

interface Props extends BaseLayoutProps {}

const b = bem('layout');

const Layout: React.FC<Props> = ({ children }) => (
  <div className={b()}>
    <Header />
    <main className={`${b('content')} content`}>{children}</main>
  </div>
);

export default Layout;
