import React from 'react';
import Container from '../Layout/Container';
import Button from '../Common/button';
import ThemeContext from '../../ThemeContext';

const LearnMore = () => {
  const { isNepali } = React.useContext(ThemeContext);

  return (
    <div className="bg-[#14323a] opacity-90 my-[20px]">
      <Container>
        <div className="flex flex-col md:flex-row py-[40px] justify-between">
          <h1 className="text-white text-[20px] text-center md:text-left w-full md:w-1/3">
            {isNepali
              ? 'बालबालिका र महिलामाथि हुने यौनजन्य तथा अन्य प्रकारका शोषणबाट मुक्त समाज ।'
              : 'A society free from sexual and other forms of exploitation against children and women.'}
          </h1>
          <a href="/about-us" className="md:flex mx-auto md:mx-0 mt-[10px] md:mt-0 flex-col justify-center">
            <Button buttonName={isNepali ? 'हाम्रो बारेमा जान्नुहोस्' : 'Learn About Us'} className="" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default LearnMore;
