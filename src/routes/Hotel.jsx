import "./Hotel.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import React, { useState } from 'react';
import Background from "../assets/img/heroshot-punta-bonita-pool-and-beach-1.webp"
import { useEffect } from 'react';
  
const Hotel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');

    const hotels = [
        {
            name: 'Eastern & Oriental Hotel',
            description: 'A luxurious heritage hotel located in George Town.  Discover Georgetown\'s rich heritage with charming colonial buildings and vibrant street art. Enjoy a breakfast served to your room, unwind by the indoor pool, and indulge in drinks at the exclusive bar. With convenient access to Prangin Mall, Chew\'s Jetty, and Street Art in George Town, Eastern And Oriental Hotel offers comfort, luxury, and a taste of local charm for solo travelers. ',
            image: 'https://lh3.googleusercontent.com/p/AF1QipONAvYauTXPyl3gSQgI3yky84Fmt0bznLg8ohqN=s1360-w1360-h1020',
            hoverImage: 'https://th.bing.com/th/id/OLC.IeSrJdmyUufSEA480x360?&rs=1&pid=ImgDetMain',
            address: '10, Lebuh Farquhar, George Town, Pulau Pinang',
            mapLink: 'https://shorturl.at/JGCC0',
            bookingLink: 'https://shorturl.at/ZMIF1',
            stars: 5,
            price: 1148,
        },
        {
            name: 'Shangri-La Rasa Sayang',
            description: 'Shangri-La Rasa Sayang, Penang, overlooking Batu Feringgi Beach, offers spacious rooms in tropical gardens with sea or hill views, wooden carvings, and free internet. Amenities include outdoor pools, a closed golf course, Eco Centre, gym, CHI spa, and yoga pavilion. Dining options are Feringgi Grill (European), The Spice Market Café (local), Pinang Restaurant, and The Rasa Deli (take-away treats).',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/16666984.jpg?k=7dada62b7065e2f43b8c6d41e448454b0628c43efda7be6bc550157e3dad1798&o=',
            hoverImage: 'https://cf.bstatic.com/xdata/images/hotel/max500/215737438.jpg?k=705a2e7b2c27c5eb69fde260e9140d00d077a9cc946d5f44ec468a23799dc690&o=',
            address: 'Jalan Batu Ferringhi, Kampung Tanjung Huma, 11100 Batu Ferringhi, Pulau Pinang',
            mapLink: 'https://tinyurl.com/44zs6hhu',
            bookingLink: 'https://tinyurl.com/28r4bkdm ',
            stars: 5,
            price: 900,
        },
        {
            name: 'Hompton by the Beach Penang',
            description: 'Indulge in luxury at Hompton by the Beach in Penang. Experience coastal charm in Tanjung Bungah, Penang as a solo traveler. Enjoy beautiful beaches, vibrant local culture, and breathtaking views of the Andaman Sea.',
            image: 'https://pix8.agoda.net/hotelImages/6953214/-1/ecdd2e3f4098017faf95a9ef8daa0b01.jpg?ce=0&s=1024x',
            hoverImage: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/265581473.jpg?k=3b054ca58ce9cdd71ef7f486fe4a634c1a310fa86827893a8aae59b74a628924&o=&s=1024x',
            address: 'No 533, Jalan C.M. Hashim Tanjung Tokong 11200 George Town Penang',
            mapLink: 'https://tinyurl.com/3rrer4er',
            bookingLink: 'https://shorturl.at/6j85U',
            stars: 4.4,
            price: 255,
        },
        {
            name: 'Hard Rock Hotel',
            description: 'A vibrant hotel with beachfront views and entertainment. Indulge in luxury at this exclusive property with a refreshing swimming pool and convenient shuttle service. Enjoy your air-conditioned room with free Wi-Fi and premium toiletries. Wake up to breathtaking views of the ocean, pool, or sea. Explore popular landmarks nearby including Batu Ferringhi Beach and Night Market. Perfect choice for solo travelers seeking relaxation or adventure.',
            image: 'https://pix8.agoda.net/hotelImages/154/154808/154808_17032911570051984032.jpg?ca=6&ce=1&s=1024x',
            hoverImage: 'https://pix8.agoda.net/hotelImages/154808/-1/9f40890b3accbb6320143a8e7c0deb4d.jpg?ca=13&ce=1&s=1024x',
            address: 'Batu Ferringhi Beach 11100 Batu Ferringhi Penang',
            mapLink: 'https://tinyurl.com/mwvt5rmd',
            bookingLink: 'https://shorturl.at/0TBIc',
            stars: 4.5,
            price: 456,
        },
        {
            name: 'The Prestige Hotel',
            description: 'A modern boutique hotel with colonial architecture. Victorian arcade with curated retail and dining options. Ideal for solo travelers seeking nearby attractions. Explore Georgetown\'s rich cultural heritage, admire colonial buildings, and immerse yourself in the vibrant street art scene. Enjoy a mouthwatering breakfast and delicious meals at the on-site restaurant. Conveniently located near Prangin Mall, Chew\'s Jetty, and Street Art in George Town, The Prestige Hotel Penang is the ideal choice for solo travelers seeking to discover the city and make unforgettable memories. ',
            image: 'https://pix8.agoda.net/hotelImages/801/8017463/8017463_19061413370075808654.jpg?ca=9&ce=1&s=1024x',
            hoverImage: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/203507722.jpg?k=508b00817871c1a739584f9ca1eb1107fccdaad938e3ff0769fec97973fdb858&o=&s=1024x',
            address: '8, Gat Lebuh Gereja 10300 George Town Penang',
            mapLink: 'https://tinyurl.com/3azm6z46',
            bookingLink: 'https://tinyurl.com/n3t3trxt',
            stars: 5,
            price: 515,
        },
        {
            name: 'Lexis Suites Penang',
            description: 'Enjoy a luxurious solo getaway at Lexis Suites Penang with private pools and stunning sea views. Relax in the unique in-room private steam room. Experience world-class amenities and explore Penang Island\'s beautiful seaside. Experience the vibrant atmosphere of Bayan Lepas, Penang, as a solo traveler at Lexis Suites Penang. Explore pristine beaches, indulge in local delicacies, and visit iconic attractions like Penang Hill and Snake Temple.',
            image: 'https://pix8.agoda.net/hotelImages/116/1160845/1160845_17033015300052041102.jpg?ca=6&ce=1&s=1024x',
            hoverImage: 'https://pix8.agoda.net/hotelImages/1160845/-1/ec0f99c50291271b51f2eed9b5d54a1c.jpg?ca=13&ce=1&s=1024x',
            address: '28, Jalan Teluk Kumbar 11920 Teluk Kumbar Pulau Pinang',
            mapLink: 'https://tinyurl.com/3w46a8zt',
            bookingLink: 'https://tinyurl.com/5n7ufmex',
            stars: 5,
            price: 458,
        },
        {
            name: 'Penang Marriott Hotel',
            description: 'Penang Marriott Hotel features an outdoor swimming pool, fitness center, a restaurant and bar in George Town. Guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with cable channels, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. Each room comes with an electric tea pot, while selected rooms are equipped with a kitchen with a minibar. The rooms include a desk.\n' +
                '\n' +
                'The breakfast offers buffet, continental or Asian options.\n' +
                '\n' +
                'Northam Beach is a 8-minute walk from Penang Marriott Hotel, while Rainbow Skywalk at Komtar is 2.1 miles away. Penang International Airport is 11 miles from the property.',
            image: 'https://tinyurl.com/37dwanr9',
            hoverImage: 'https://tinyurl.com/37udvnen',
            address: '55, Gurney Dr, 10250 George Town, Penang',
            mapLink: 'https://tinyurl.com/2urzt328',
            bookingLink: 'https://tinyurl.com/5cxe2xb7',
            stars: 5,
            price: 700,
        },
        {
            name: 'Seven Terraces',
            description: 'Seven Terraces, located in the heart of Penang, is a 5-minute walk from the Goddess of Mercy Temple and Penang Peranakan Mansion, and a 10-minute walk to Cheong Fatt Tze Mansion, Penang Museum, and Khoo Kongsi. The hotel offers spacious, air-conditioned rooms with balconies, flat-screen TVs, and private bathrooms. Guests can enjoy 24-hour front desk services, luggage storage, massages, and airport transfers. Penang International Airport is a 30-minute drive away.',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/68671241.jpg?k=4b1c58a156e966809e6b1d613d9b348e1247c208f9d0a5ff48a8efe89fd15f44&o=&hp=1',
            hoverImage: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72728568.jpg?k=631283d3d4e037e61957c4b4e20d92a1601c4491afac7ceafe3a57b10fd5cd63&o=&hp=1',
            address: '14A, Stewart Ln, Georgetown, 10200 George Town, Penang',
            mapLink: 'https://tinyurl.com/5n8tw92w',
            bookingLink: 'https://tinyurl.com/mw397s7c',
            stars: 4,
            price: 680,
        },
        {
            name: 'Macalister Mansion',
            description: 'Macalister Mansion in George Town combines hip, stylish interiors with top-notch amenities, featuring air-conditioned rooms with seating areas, flat-screen TVs, and private bathrooms. Just 2 km from Northam Beach, the hotel offers a fitness center, garden, shared lounge, restaurant, bar, and sun terrace. Guests can enjoy free WiFi, private parking, 24-hour front desk service, airport transfers, car rentals, and a business center. Nearby attractions include Penang Times Square (1.2 km), Rainbow Skywalk (1.5 km), and 1st Avenue Penang (1.6 km). Penang International Airport is 15 km away. ',
            image: 'https://tinyurl.com/mu5bxax4',
            hoverImage: 'https://tinyurl.com/3s86c96y',
            address: '228 Jalan Macalister, 10400 George Town, Malaysia',
            mapLink: 'https://tinyurl.com/ycm7jz4c',
            bookingLink: 'https://tinyurl.com/ynrx9jnu',
            stars: 5,
            price: 1090,
        },
        {
            name: 'G Hotel Gurney',
            description: 'G Hotel Gurney in Penang’s UNESCO-listed Georgetown offers contemporary accommodations with an outdoor pool, fitness center, and multiple dining options, including Taste Cafe and Miraku Japanese Restaurant. Located near Gurney Drive, Gurney Plaza, and Gurney Paragon, the hotel provides free WiFi, complimentary parking, and modern air-conditioned rooms with scenic coastal views, satellite TV, and free minibar. Guests can enjoy concierge services, currency exchange, and tour arrangements at the 24-hour front desk. Penang Airport is 22 km away.',
            image: 'https://tinyurl.com/yk8atnk6',
            hoverImage: 'https://tinyurl.com/4s2s6eu3',
            address: '168A, Gurney Dr, 10250 George Town, Penang',
            mapLink: 'https://tinyurl.com/vpebym7t',
            bookingLink: 'https://tinyurl.com/3tudt7y9',
            stars: 4.5,
            price: 572,
        },
    ];

    const handlePriceFilter = (hotel) => {
        if (priceRange === 'all') return true;
        if (priceRange === '200-500') return hotel.price >= 200 && hotel.price <= 500;
        if (priceRange === '500-800') return hotel.price > 500 && hotel.price <= 800;
        if (priceRange === '800-more') return hotel.price > 800;
        return false;
    };

    const filteredHotels = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        handlePriceFilter(hotel)
    );

    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={Background}
        title="Hotels in Penang"
        />
        <div className="hotels-page">

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            {/* Price Range Options */}
            <div className="price-range">
                <p>Filter by price range:</p>
                <label>
                    <input
                        type="radio"
                        name="price-range"
                        value="all"
                        checked={priceRange === 'all'}
                        onChange={(e) => setPriceRange(e.target.value)}
                    />
                    All Prices
                </label>
                <label>
                    <input
                        type="radio"
                        name="price-range"
                        value="200-500"
                        checked={priceRange === '200-500'}
                        onChange={(e) => setPriceRange(e.target.value)}
                    />
                    RM200 - RM500
                </label>
                <label>
                    <input
                        type="radio"
                        name="price-range"
                        value="500-800"
                        checked={priceRange === '500-800'}
                        onChange={(e) => setPriceRange(e.target.value)}
                    />
                    RM500 - RM800
                </label>
                <label>
                    <input
                        type="radio"
                        name="price-range"
                        value="800-more"
                        checked={priceRange === '800-more'}
                        onChange={(e) => setPriceRange(e.target.value)}
                    />
                    RM800 or more
                </label>
            </div>

            <div className="hotel-grid">
                {filteredHotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <div className="hotel-image-container">
                            <img src={hotel.image} alt={hotel.name} className="hotel-image"/>
                            <img src={hotel.hoverImage} alt={`${hotel.name} Room`} className="hotel-hover-image"/>
                        </div>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                        <p><strong>Address:</strong> <a href={hotel.mapLink} target="_blank"
                                                        rel="noopener noreferrer">{hotel.address}</a></p>
                        <p><strong>Rating:</strong> {hotel.stars} ⭐</p>
                        <p><strong>Price per night:</strong> RM{hotel.price}</p>
                        <p>
                            <strong>Booking at:</strong> <a href={hotel.bookingLink} target="_blank"
                                                            rel="noopener noreferrer">Click here</a>
                        </p>
                    </div>
                ))}
            </div>
            <p>Note: These hotel prices refer to December 2024 and may vary due to demand and events.
                Book early for the best rates!</p>
        </div>
        <Footer/>
        </>
    );
};

export default Hotel;
