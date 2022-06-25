import React from 'react';
import Container from '../../components/Layout/Container';
import Layout from '../../components/Layout/Layout';

import { Carousel } from 'react-responsive-carousel';
import { client } from '../../prismic/client';
import ThemeContext from '../../ThemeContext';
import CertificateModal from '../../components/Common/CertificatesModal';

export async function getServerSideProps() {
  const aboutPage = await client.getAllByType('about_page');
  const video = await client.getAllByType('video');
  const footer = await client.getAllByType('footer');

  return {
    props: {
      aboutPage,
      video,
      footer,
    },
  };
}
const Aboutus = (props: any) => {
  const { embedUrl, setEmbedUrl, certificates, setCertificates, isNepali } = React.useContext(ThemeContext);

  const { aboutPage, video } = props;
  const aboutPageData = aboutPage[0].data;
  const selectedVideo = video.find((item: any) => item.data.isforaboutpage).data;
  console.log(aboutPageData, 'aboutPageData');
  return (
    <Layout navBarColor="bg-white" footer={props.footer[0].data} title="Bhumika Nepal | About Us">
      <CertificateModal certificates={certificates} setCertificate={setCertificates} />
      <div className="py-[20px] pb-0">
        <Container>
          <div
            className="py-[80px]"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h2 className="text-center text-[40px]">
              {isNepali ? aboutPageData.title_nepali[0].text : aboutPageData.title[0].text}
            </h2>

            <p className="text-center w-full md:w-1/2 mx-auto">
              {isNepali ? aboutPageData.descriptions_nepali[0].text : aboutPageData.descriptions[0].text}
            </p>
            <div
              className="w-full md:w-1/2 lg:w-1/2 flex-col md:p-5 pt-5 mx-auto cursor-pointer "
              onClick={() => setEmbedUrl(selectedVideo.youtube_video_link.url)}
            >
              <div className="relative">
                <img
                  src={selectedVideo?.thumbnail?.url}
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
        <div
          className="flex justify-center py-[80px] bg-[#f6f5fa]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <Container>
            <div className="flex flex-col justify-between md:flex-row gap-[40px]  py-[40px]">
              <div className="w-full md:w-1/2">
                <h2 className="text-[32px] lg:text-[60px] font-[600]">{isNepali ? 'मिशन' : 'Mission'}</h2>
                <p className="text-[14px] lg:text-[18px] text-[rgba(39,39,39,.74)]">
                  {isNepali ? aboutPageData.mission_in_nepal[0].text : aboutPageData.mission[0].text}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-[32px] lg:text-[60px]">{isNepali ? 'दृष्टि' : 'Vision'}</h2>
                <p className="text-[14px] lg:text-[18px] text-[rgba(39,39,39,.74)]">
                  {isNepali ? aboutPageData.values_nepali[0].text : aboutPageData.values[0].text}
                </p>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <section
            className="py-[80px]"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h3 className="text-center text-[32px] lg:text-[60px]">
              {isNepali ? 'यो सम्भव बनाउने टोलीलाई भेट्नुहोस्' : 'Meet the team who make this possible'}
            </h3>
            <Carousel>
              {aboutPageData.team_photos.map((item: any) => {
                return (
                  <div className="w-full flex-col md:p-5 pt-5 ">
                    <img src={item.photi.url} alt={`Hero image`} />
                  </div>
                );
              })}
            </Carousel>
          </section>
        </Container>

        <section
          className="bg-[#f6f5fa] py-[30px]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <Container>
            <h2 className="text-center text-[24px] lg:text-[40px] ">
              {isNepali ? aboutPageData.certificate_title_nepali[0].text : aboutPageData.certificate_title[0].text}
            </h2>

            <p className="text-center py-[10px]">
              {isNepali ? 'वितरण: नेपाल नोटरी पब्लिक काउन्सिल' : 'Distributed by : Nepal Notary Public Council'}
            </p>
            <button
              onClick={() => setCertificates(aboutPageData.documents)}
              className="transform  transition duration-500 hover:scale-105 text-[16px] mt-[30px] hover:bg-[#14323a] bg-white text-black border-[#14323a] border text-center flex mx-auto hover:text-white text-[18px] mx-auto  px-[50px] py-[20px] rounded-[80px]"
            >
              {isNepali ? 'कागजातहरू हेर्नुहोस्' : 'View Documents'}
            </button>
          </Container>
        </section>
      </div>
    </Layout>
  );
};

export default Aboutus;
