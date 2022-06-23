import React, { FC } from 'react';
import Navbar from '../NavBar/navbar';

import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Container from './Container';

const Layout: FC<{ children: React.ReactNode,navBarColor?:string }> = ({ children,navBarColor }) => {
  return (
    <div>
      <Navbar navBarColor={navBarColor} />
      {children}
      <footer className="bg-[#14323a] text-white opacity-90 py-[20px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-1/3">
              <a href="/">
                <img src={'https://c8.alamy.com/comp/2B4561A/demo-icon-2B4561A.jpg'} height="50px" width="50px" />
              </a>
              <p>
                Est in excepteur eiusmod cupidatat et <br /> qui aliqua aliquip ex laborum.
              </p>
            </div>

            <div className="flex w-1/3 flex-col">
              <a>Home</a>
              <a>Video</a>
              <a>Blogs</a>
              <a>About Us</a>
            </div>

            <div className="">
              <p>Lets connect</p>

              <p>connect@hamroNepal.com</p>

              <p>988123123123</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
