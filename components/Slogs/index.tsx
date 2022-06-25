import React, { FC } from 'react';
import Container from '../Layout/Container';
import ThemeContext from '../../ThemeContext';

const Slogans: FC<{ slugsLists: any }> = ({ slugsLists }) => {
  const { isNepali } = React.useContext(ThemeContext);

  return (
    <Container>
      <div className="flex justify-between container absolute z-[1] bottom-[-25%]">
        {slugsLists.map((item: any) => {
          return (
            <div
              className="rounded-[10px] text-[20px] bg-white flex flex-col justify-center text-center shadow-lg w-1/4 py-[30px] h-[250px] px-[10px]"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <p>"{isNepali ? item.slogan_nepali[0].text : item.slogan[0].text}"</p>
              <p className="text-[18px] text-gray-600 mt-[10px]">
                {isNepali ? item.slogan_by_nepali[0].text : item.slogan_by[0].text}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Slogans;
