import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
// import styled from 'styled-components';
import { Header } from './Header';
// import { FlexBox } from 'styles/theme';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        {children}
      </div>
    </div>
  );
};
