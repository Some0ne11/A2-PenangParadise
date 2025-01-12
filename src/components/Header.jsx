import React, { useEffect, useState, useCallback } from 'react';
import Navbar from "./Navbar";
import "./Header.css";
import Food from "../assets/img/food.mp4";
import Bridge from "../assets/img/bridge.mp4";
import Unesco from "../assets/img/unesco.mp4";
import Culture from "../assets/img/culture.mp4";
import Beach from "../assets/img/beach.mp4";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 5;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  // Setup timer with reset capability
  useEffect(() => {
    // Create the timer
    const timer = setInterval(nextSlide, 7000);

    // Cleanup function to clear interval when component unmounts
    // or when activeIndex changes (which happens on manual clicks)
    return () => clearInterval(timer);
  }, [activeIndex, nextSlide]); // Dependencies include activeIndex to reset timer on manual navigation

  // Handle manual navigation
  const sliderNav = (manual) => {
    setActiveIndex(manual);
  };

  return (
    <>
      <Navbar />

      <section className="home">
        <video 
          src={Food} 
          autoPlay 
          muted 
          loop 
          className={`video-slide ${activeIndex === 0 ? 'active' : ''}`}
        ></video>
        <video 
          src={Bridge} 
          autoPlay 
          muted 
          loop 
          className={`video-slide ${activeIndex === 1 ? 'active' : ''}`}
        ></video>
        <video 
          src={Unesco} 
          autoPlay 
          muted 
          loop 
          className={`video-slide ${activeIndex === 2 ? 'active' : ''}`}
        ></video>
        <video 
          src={Culture} 
          autoPlay 
          muted 
          loop 
          className={`video-slide ${activeIndex === 3 ? 'active' : ''}`}
        ></video>
        <video 
          src={Beach} 
          autoPlay 
          muted 
          loop 
          className={`video-slide ${activeIndex === 4 ? 'active' : ''}`}
        ></video>

        <div className={`content ${activeIndex === 0 ? 'active' : ''}`}>
          <h1>A Foodie's Paradise</h1>
          <p>Penang is a renowned food paradise, famous for its vibrant and diverse culinary scene. From street food stalls to fine dining establishments, the island offers a tantalizing blend of flavors influenced by Malay, Chinese, Indian, and Peranakan cultures. Penang’s street food is legendary, with dishes like Char Kway Teow, Penang Laksa, Hainanese Chicken Rice, and Nasi Kandar drawing food lovers from around the world. The island’s bustling hawker stalls and street markets serve up some of Malaysia’s best local dishes, making Penang a must-visit destination for food enthusiasts seeking unforgettable gastronomic experiences.</p>
        </div>
        <div className={`content ${activeIndex === 1 ? 'active' : ''}`}>
          <h1>Penang Bridge</h1>
          <p>The Penang Bridge, spanning 13.5 kilometers, is a dual-lane toll bridge and controlled-access highway connecting Penang Island to the mainland of Perai, across the Penang Strait. This iconic structure serves as the first and only road link between the island and the peninsula. With 8.4 kilometers stretching over water, the bridge stands as Malaysia's second-longest and Southeast Asia's fifth-longest by total length—an engineering marvel and a symbol of national pride.</p>
        </div>
        <div className={`content ${activeIndex === 2 ? 'active' : ''}`}>
          <h1>A UNESCO World Heritage Site</h1>
          <p>
          Penang, recognized as a UNESCO World Heritage Site, is a treasure trove of history and culture. George Town, its capital, showcases an exceptional array of well-preserved colonial buildings, traditional shophouses, and historic religious landmarks. This prestigious designation celebrates Penang’s unique heritage, shaped by centuries of trade and cultural exchange. Walking through its streets is like stepping into the past, with each corner reflecting the island's historical significance and architectural charm. Penang stands as a living testament to the rich history and diversity that define its identity.
          </p>
        </div>
        <div className={`content ${activeIndex === 3 ? 'active' : ''}`}>
          <h1>A Melting Pot of Cultures</h1>
          <p>
            Penang is a vibrant melting pot of cultures, where a rich tapestry of traditions, 
            languages, and cuisines coexist harmoniously. 
            Penang proudly showcases its multicultural heritage, with deep influences from Malay, Chinese, Indian, and European communities. The island’s streets are alive with the sights, sounds, and flavors of diverse cultures, reflected in its historic architecture, bustling markets, and lively festivals. From the intricate design of its temples and mosques to the mouthwatering blend of local and international cuisines, Penang stands as a living testament to the beauty of multiculturalism.

          </p>
        </div>
        <div className={`content ${activeIndex === 4 ? 'active' : ''}`}>
          <h1>Beautiful Beaches and Lush Nature</h1>
          <p>Penang is a tropical paradise renowned for its stunning beaches that attract visitors from around the world. From the serene shores of Batu Ferringhi to the untouched beauty of Teluk Kampi in Penang National Park, the island offers a diverse range of coastal experiences. Golden sands, crystal-clear waters, and breathtaking sunsets create the perfect setting for relaxation and adventure. Whether it’s indulging in water sports, enjoying a peaceful stroll along the beach, or savoring fresh seafood by the sea, Penang’s beaches promise an unforgettable escape into nature’s beauty.</p>
        </div>

        <div className="slider-navigation">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`nav-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => sliderNav(index)}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Header;