import React, { FC } from 'react';
import Container from '../Layout/Container';
import ThemeContext from '../../ThemeContext';

const options = [
  {
    label: 'Eng',

    value: 'eng',
  },

  {
    label: 'Nep',

    value: 'np',
  },
];
const Navbar: FC<{ navBarColor?: string; details: any }> = ({ navBarColor, details }) => {
  const { language, setLanguage } = React.useContext(ThemeContext);
  return (
    <nav className={'opacity-90  bg-[#14323a] top-0 z-[2] py-[20px] sticky ' + navBarColor ?? ' '}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between mx-auto">
          <div className="w-1/2 flex mx-auto md:m-0 mb-[10px] md:mb-0">
            <a href="/" className="flex">
              <img src={details.logo.url} height="40px" width="40px" />
              <span className="my-auto text-[22px] ml-[10px] text-white">{details.organization_name[0].text}</span>
            </a>
          </div>

          <div className="w-full md:w-[30%] flex justify-between">
            <div className="flex  flex-col justify-center">
              <a href="/" className="text-[18px] text-white">
                Home
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/video" className="text-[18px] text-white">
                Video
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/blogs" className="text-[18px] text-white">
                Blogs
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/about-us" className="text-[18px] text-white">
                {' '}
                About Us
              </a>
            </div>

            <select value={language} onChange={(e: any) => setLanguage(e.target.value)} className="bg-transparent text-white">
              {options.map((option) => (
                <option className="bg-black" value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
