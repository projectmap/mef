import React from 'react';
import Container from '../Layout/Container';

export const HeroSection = () => {
  return (
    <div className="relative ">
      <div className="bg-[#14323a] opacity-90  pb-[50px] ">
        <Container>
          <div className="h-[75vh] flex flex-col justify-center">
            <div className="flex justify-between ">
              <div className="w-1/3 flex flex-col justify-center">
                <div>
                  <h1 className="text-[60px] leading-[60px] text-white">We are here to help children</h1>

                  <p className="text-gray-200 mt-[12px]">
                    Quis adipisicing do eiusmod elit aliqua. In sunt sunt proident dolore consectetur cillum. Nisi
                    cupidatat officia anim incididunt. Nulla culpa ut cupidatat nisi. Excepteur velit sit laborum
                    nostrud. Quis cupidatat ad do sunt duis minim in cupidatat ad cillum do exercitation reprehenderit.
                  </p>
                  <button className="bg-white mt-10 px-[16px] py-[10px] text-black rounded-[10px]">
                    Read about us
                  </button>
                </div>
              </div>
              <div className="w-1/2 absolute right-0 top-[5%]">
                <img
                  className="rounded-l-[80px]  left-0"
                  src={
                    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
