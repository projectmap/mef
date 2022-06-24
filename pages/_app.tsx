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
    if (embedUrl) {
      avoidScroll();
    } else {
      enableScroll();
    }
  }, [embedUrl]);
  return (
    <ThemeContext.Provider value={{ embedUrl, setEmbedUrl }}>
      <Component {...pageProps} />
      <EmbedVideo />
    </ThemeContext.Provider>
  );
}

export default MyApp;
