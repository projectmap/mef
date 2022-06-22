import React, { FC } from 'react';
import Navbar from '../NavBar/navbar';

import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
