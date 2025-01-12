import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Background from "../assets/img/his.jpeg";
import { useEffect } from 'react';
import "./History.css";
const History = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={Background}
        title="History of Penang"
        />
        <div className="history-page">

            <section className="background-section">
                <h2>Introduction</h2>
                <p>
                    Penang, often referred to as the "Pearl of the Orient," is a captivating island off the northwest
                    coast of Peninsular Malaysia in the Strait of Malacca. Separated by a narrow strait, Penang is a
                    major tourist and industrial hub, rich in history, culture, and natural beauty.
                </p>
                <div className="image-section.two">
                    <img src="https://tinyurl.com/4t2se89h" alt="Penang Overview 1"/>
                    <img src="https://tinyurl.com/488yed7z" alt="Penang Overview 2"/>

                </div>
            </section>

            <section className="content-section">
                <h2>Geography and Climate</h2>
                <p>
                    Penang Island is oval-shaped, with a granitic mountainous interior reaching a peak of <strong>2,428
                    feet (740 meters)</strong>. Coastal plains ring the island, with the most extensive in the
                    northeast, where George Town, Malaysia's chief port, is located. Penang experiences a tropical
                    climate with annual rainfall averaging <strong>105 inches (2,700 mm)</strong> and temperatures
                    consistently around <strong>80°F (27°C)</strong>. The island is accessible via a <strong>5.2-mile-long
                    (8.4 km)</strong> bridge or ferries connecting to the mainland.
                </p>
                <div className="image-section">
                    <img src="https://tinyurl.com/32axse2x" alt="Penang Geography 1"/>
                    <img src="https://tinyurl.com/5n77mvtb" alt="Penang Geography 2"/>
                </div>
            </section>

            <section className="content-section">
                <h2>Historical Significance</h2>
                <p>
                    Penang's strategic location in the Strait of Malacca made it a valuable British colony, established
                    in <strong>1786</strong> by Captain Francis Light of the East India Company. Initially
                    named <strong>Prince of Wales Island</strong>, the colony grew rapidly, attracting settlers from
                    China, India, Sumatra, and Burma. Penang became part of the Straits Settlements
                    in <strong>1826</strong>, alongside Malacca and Singapore.
                </p>
                <p>
                    From the mid-19th century, Penang served as a hub for the tin and rubber trade. By the 20th century,
                    it transitioned from colonial port to industrial powerhouse, focusing on electronics manufacturing
                    and tourism. In <strong>1948</strong>, Penang joined the Federation of Malaya (later Malaysia).
                </p>
                <p>
                    The island's development was momentarily disrupted in <strong>2004</strong> by a tsunami caused by
                    the Indian Ocean earthquake, but Penang quickly recovered, retaining its prominence as a tourist
                    destination.
                </p>
                <div className="image-section">
                    <img src="https://shorturl.at/PrbH9" alt="History Image"/>
                    <img src="https://tinyurl.com/3d66zz5a" alt="History Image"/>

                </div>
            </section>

            <section className="content-section">
                <h2>George Town - A UNESCO Heritage Site</h2>
                <p>
                    George Town, the capital of Penang, was founded as <strong>Fort
                    Cornwallis</strong> in <strong>1786</strong> and played a pivotal role as a port on the India-China
                    route. Today, the city is a vibrant blend of Chinese, European, and Malay cultures. Iconic landmarks
                    include:
                </p>
                <ul>
                    <li><strong>Fort Cornwallis:</strong> A restored remnant of British colonization.</li>
                    <li><strong>St. George’s Church (1817):</strong> Malaysia’s oldest Anglican church.</li>
                    <li><strong>Kek Lok Si Temple:</strong> A sprawling temple complex, also known as the "Million
                        Buddhas Precious Pagoda."
                    </li>
                    <li><strong>Esplanade:</strong> A scenic reminder of the colonial past.</li>
                </ul>
                <p>
                    In <strong>2008</strong>, George Town earned UNESCO World Heritage Site status, recognizing its
                    cultural and architectural significance.
                </p>
                <div className="image-section">
                    <img src="https://tinyurl.com/m4bw7ba9" alt="Historical Image 1"/>
                    <img src="https://tinyurl.com/yckyr897" alt="Historical Image 2"/>
                    <img src="https://tinyurl.com/3cz8v85p" alt="Historical Image 3"/>
                    <img src="https://tinyurl.com/5sba5fkt" alt="Historical Image 4"/>
                </div>
            </section>

            <section className="content-section">
                <h2>Modern Penang</h2>
                <p>
                    Penang's economy thrives on tourism, electronics manufacturing, and agriculture, with rice,
                    vegetables, and fruit being primary crops. Key industries include:
                </p>
                <ul>
                    <li><strong>Electronics:</strong> Centered in Bayan Lepas.</li>
                    <li><strong>Agriculture:</strong> Sustaining rural livelihoods.</li>
                    <li><strong>Exports:</strong> Tin, rubber, and copra transported through George Town.</li>
                </ul>
                <div className="image-section">
                    <img src="https://tinyurl.com/yt5b8he6" alt="Modern Penang Image 1"/>
                    <img src="https://tinyurl.com/ye3nrtpn" alt="Modern Penang Image 2"/>
                    <img src="https://tinyurl.com/msdfvvyx" alt="Modern Penang Image 3"/>
                    <img src="https://tinyurl.com/2v2djhzw" alt="Modern Penang Image 4"/>

                </div>
            </section>

            <section className="video-section">
                <h2>Uncover the Stories of Penang's Past: A Journey into Its History</h2>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/F79lLUnSQwE"
                        title="Penang Video"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="references-section">
                <h2>References</h2>
                <p>
                    George Town | Malaysia. (n.d.). Encyclopedia Britannica.
                    <a href="https://www.britannica.com/place/George-Town-Malaysia" target="_blank"
                       rel="noopener noreferrer">
                        https://www.britannica.com/place/George-Town-Malaysia
                    </a>
                </p>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default History;