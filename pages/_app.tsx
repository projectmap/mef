import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import ThemeContext from '../ThemeContext';
import EmbedVideo from '../components/Common/EmbeddedVideo';
// ..

function MyApp({ Component, pageProps }: AppProps) {
  const [embedUrl, setEmbedUrl] = React.useState();
  const [language, setLanguage] = React.useState('np');
  const [isNepali, setIsNepali] = React.useState(true);
  const [certificates, setCertificates] = React.useState(undefined);

  React.useEffect(() => {
    setIsNepali(language === 'np');
  }, [language]);
  React.useEffect(() => {
    AOS.init();
  }, []);

  function avoidScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }

  React.useEffect(() => {
    if (certificates || embedUrl) {
      avoidScroll();
    } else {
      enableScroll();
    }
  }, [embedUrl, certificates]);
  return (
    <ThemeContext.Provider
      value={{ embedUrl, setEmbedUrl, certificates, setCertificates, language, setLanguage, isNepali }}
    >
      <Component {...pageProps} />
      <EmbedVideo />
    </ThemeContext.Provider>
  );
}

export default MyApp;
