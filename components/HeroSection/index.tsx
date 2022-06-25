import React, { FC } from 'react';
import Container from '../Layout/Container';
import Button from '../Common/button';
import ThemeContext from '../../ThemeContext';

export const HeroSection: FC<{ data: any }> = ({ data }) => {
  const { isNepali } = React.useContext(ThemeContext);

  return (
    <div className="relative ">
      <div className="bg-[#14323a] opacity-90  pb-[50px] ">
        <Container>
          <div className="h-[75vh] flex flex-col justify-center">
            <div className="flex justify-between ">
              <div
                className="w-full md:w-1/3  flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div>
                  <h1 className="text-[60px] leading-[60px]  text-center md:text-left text-white">
                    {isNepali ? data.title_nepali[0].text : data.title[0].text}
                  </h1>

                  <p className="text-gray-200 mt-[12px] text-center md:text-left mb-[25px]">
                    {isNepali ? data.description_nepali[0].text : data.descriptions[0].text}
                  </p>
                  <a href="/about-us " className="">
                    <Button
                      buttonName={isNepali ? 'हाम्रो बारेमा पढ्नुहोस्' : 'Read About Us'}
                      className={'flex mx-auto md:m-0'}
                    />
                  </a>
                </div>
              </div>
              <div
                className="hidden md:block w-1/2 absolute right-0 top-[5%]"
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
