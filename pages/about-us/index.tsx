import React from 'react';
import Container from '../../components/Layout/Container';
import Layout from '../../components/Layout/Layout';

const Aboutus = () => {
  return (
    <Layout navBarColor="bg-white">
          {/* <Container> */}
        
          <div className="py-[20px]">
                <Container>
        <div className="py-[50px]">
          <h2 className="text-center text-[40px]">Who are we?</h2>

          <p className="text-center w-1/2 mx-auto">
            Minim ullamco est duis ullamco commodo culpa.Non commodo laborum nisi ut dolore nostrud.Exercitation est
            dolore pariatur consequat ut do Lorem cillum.
          </p>
          <div className="w-full md:w-1/2 lg:w-1/2 flex-col md:p-5 pt-5 mx-auto ">
            <div className="relative">
              <img
                src={
                  'https://c.ndtvimg.com/2021-12/nie2c78g_president-ram-nath-kovind-ima-passing-out-parade-twitter_625x300_11_December_21.jpg?im=Resize=(1230,900)'
                }
                alt={`Hero image`}
                className="rounded-3xl hover:h-full transform transition duration-500 hover:scale-105"
              />
              <img
                height="80px"
                width="80px"
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={
                  'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-8.png'
                }
              />
            </div>
          </div>
        </div>
              
          </Container>

        <div className="flex justify-center  py-[40px] bg-[#f6f5fa]">
          <Container>
            <div className="flex gap-[40px]  py-[40px]">
              <div className="">
                <h2 className="text-[60px] font-[600]">Mission</h2>
                <p className="text-[18px] text-[rgba(39,39,39,.74)]">
                  Aute amet non dolore enim do non commodo qui officia do qui officia. Incididunt cillum incididunt
                  officia laboris aliquip dolore aliquip ipsum sunt esse pariatur reprehenderit ipsum eiusmod. Nostrud
                  cillum adipisicing id et consectetur proident consectetur exercitation magna officia exercitation qui.
                  Quis et amet proident enim reprehenderit qui eu sint excepteur consequat. Mollit eiusmod sint nulla
                  sunt.
                </p>
              </div>
              <div>
                <h2 className="text-[60px] font-[600]">Values</h2>
                <p className="text-[18px] text-[rgba(39,39,39,.74)]">
                  Aute amet non dolore enim do non commodo qui officia do qui officia. Incididunt cillum incididunt
                  officia laboris aliquip dolore aliquip ipsum sunt esse pariatur reprehenderit ipsum eiusmod. Nostrud
                  cillum adipisicing id et consectetur proident consectetur exercitation magna officia exercitation qui.
                  Quis et amet proident enim reprehenderit qui eu sint excepteur consequat. Mollit eiusmod sint nulla
                  sunt.
                </p>
              </div>
            </div>
          </Container>
        </div>
              <Container>
                  
        <section className="py-[40px]">
          <h3 className="text-center text-[60px]">Meet the team who make this possible</h3>

          <img
            src={
              'https://c.ndtvimg.com/2021-12/nie2c78g_president-ram-nath-kovind-ima-passing-out-parade-twitter_625x300_11_December_21.jpg?im=Resize=(1230,900)'
            }
            alt={`Hero image`}
            className="py-[20px]"
          />
        </section>
</Container>
      </div>
      {/* </Container> */}
    </Layout>
  );
};

export default Aboutus;
