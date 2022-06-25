import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineDownload } from 'react-icons/ai';

const CertificateModal: FC<{ certificates: any; setCertificate: any }> = ({ certificates, setCertificate }) => {
  if (!certificates) {
    return null;
  }

  return (
    <>
      <div className="fixed flex flex-col justify-between bg-black w-screen h-screen z-[2] opacity-50 "></div>

      <div className="fixed left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]  z-[50000000000000] ">
        <div className="flex">
          <a className="cursor-pointer group flex ml-auto " onClick={() => setCertificate(undefined)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" className="fill-[#000000] group-hover:fill-[#2a464d]" fill="black" />
              <path d="M22 10L10 22" stroke="#F6F5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 10L22 22" stroke="#F6F5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          {/* <div className="relative overflow-hidden pt-[56%] w-[100vw]  mx-auto lg:w-[774px]  lg:mt-0"> */}
          <Carousel>
            {certificates.map((item: any) => {
              return (
                <div className="w-full flex-col md:p-5 pt-5  ">
                  <img src={item.docs.url} alt={`Hero image`} className="bg-white" />
                  {/* <a  href={item.docs.url} download className="animate-image flex rounded-[10px] bg-white px-[20px] py-[10px] text-black transform transition duration-500 hover:scale-105">
                      Download
                       
                       <div className="flex flex-col justify-center ml-[10px]">
                          
                                 <AiOutlineDownload />
                       </div>
          </a> */}
                </div>
              );
            })}
          </Carousel>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CertificateModal;
