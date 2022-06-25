import React, { FC } from 'react';
import Navbar from '../NavBar/navbar';

import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Container from './Container';
import { client } from '../../prismic/client';
import { AiFillFacebook, AiFillTwitterSquare, AiFillMail, AiFillPhone } from 'react-icons/ai';
import Head from 'next/head';

const Layout: FC<{ children: React.ReactNode; navBarColor?: string; footer: any; title: string }> = ({
  children,
  navBarColor,
  footer,
  title,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar navBarColor={navBarColor} details={footer} />
      {children}
      <footer className="bg-[#14323a] text-white opacity-90 py-[40px]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex w-full md:w-2/3 justify-between">

            <div className="">
              <a href="/" className="flex">
                <img src={footer.logo.url} height="50px" width="50px" />
                <span className="mt-auto ml-[10px]">{footer.organization_name[0].text}</span>
              </a>
              <p className="mt-[8px] w-full md:w-1/3">{footer.organization_slogan[0].text}</p>
            </div>

            <div className="flex w-1/3 flex-col justify-between">
              <a href="/" className="hover:opacity-50">
                Home
              </a>
              <a href="/video" className="mt-[10px] hover:opacity-50">
                Video
              </a>
              <a href="/blogs" className="mt-[10px] hover:opacity-50">
                Blogs
              </a>
              <a href="/about-us" className="mt-[10px] hover:opacity-50">
                About Us
              </a>
            </div>
            </div>

            <div className="">
              <p>Lets connect</p>
              <div className="mt-[8px] flex ml-[2px]">
                <div className="my-auto ml-[2px]">
                  <AiFillMail />
                </div>
                <a className=" block ml-[8px]"> {footer.email[0].text}</a>
              </div>

              <div className="mt-[8px] flex ml-[2px]">
                <div className="my-auto ml-[2px]">
                  <AiFillPhone />
                </div>
                <a className=" block ml-[8px]"> {footer.phone_number[0].text}</a>
              </div>
              <div className="flex mt-[8px] ">
                <a href={footer.facebook_page[0].text} target="_blank">
                  <AiFillFacebook size={25} />
                </a>
                <a href={footer.twitter_page[0].text} target="_blank" className="ml-[5px]">
                  <AiFillTwitterSquare size={25} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
