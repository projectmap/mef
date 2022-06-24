import React, { FC } from 'react';
import Container from '../Layout/Container';
import Button from '../Common/button';

export const HeroSection: FC<{ data: any }> = ({ data }) => {
  return (
    <div className="relative ">
      <div className="bg-[#14323a] opacity-90  pb-[50px] ">
        <Container>
          <div className="h-[75vh] flex flex-col justify-center">
            <div className="flex justify-between ">
              <div
                className="w-1/3 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div>
                  <h1 className="text-[60px] leading-[60px] text-white">{data.title[0].text}</h1>

                  <p className="text-gray-200 mt-[12px] mb-[25px]">{data.descriptions[0].text}</p>
                  <a href="/about-us " className="">
                    <Button buttonName={'Read about us'} className={''} />
                  </a>
                </div>
              </div>
              <div
                className="w-1/2 absolute right-0 top-[5%]"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <img className="rounded-l-[80px]  left-0" src={data.cover_picture.url} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
