import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className='w-screen h-screen flex flex-col'>
      <header className='h-20 bg-red-200 flex items-center'>
        <nav className='w-full p-4 flex justify-between'>
          <ul className='flex gap-2'>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <main className='flex-grow bg-blue-200'>{children}</main>
      <footer className='bg-yellow-200 text-center'>
        <p>© 2024 Podcast App</p>
      </footer>
    </div>
  );
};

export default Layout;
