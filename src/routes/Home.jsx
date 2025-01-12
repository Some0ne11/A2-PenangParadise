import React, { useEffect, useRef } from "react";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import Review from "../components/Review.jsx";
import Usm from "../components/usm.jsx";
import Header from "../components/Header.jsx";
import backgroundMusic from "../assets/background-music.mp3";

function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to play the audio when the component is mounted
    const playAudio = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio playback started successfully
            })
            .catch((error) => {
              console.warn("Autoplay was prevented by the browser:", error);
            });
        }
      }
    };

    playAudio();
  }, []); // Runs only when the component mounts

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Page Content */}
      <Header />
      <Card />
      <Usm />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
