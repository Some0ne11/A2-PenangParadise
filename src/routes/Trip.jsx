import "./Trip.css"
import Footer from "../components/Footer";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import PenangHill from "../assets/img/penang-hill.jpg"
import KekLokSiTemple from "../assets/img/kek-lok-si.png"
import Unesco from "../assets/img/unesco.jpeg"
import BatuFerringhi from "../assets/img/batu-ferringhi.jpg"
import ClanJetty from "../assets/img/clan-jetty.jpg"
import PenangNationalPark from "../assets/img/penang-national-park.jpeg"
import PenangStreetArt from "../assets/img/penang-street-art.jpg"
import PenangPeranakanMansion from "../assets/img/penang-peranakan-mansion.jpeg"
import TropicalSpiceGarden from "../assets/img/tropical-spice-garden.jpg"
import PenangWarMuseum from "../assets/img/penang-war-museum.jpeg"
import EscapeThemePark from "../assets/img/escape-theme-park.jpg"
import PenangBotanicGarden from "../assets/img/penang-botanical-garden.jpg"
import CheongFattTze from "../assets/img/cheong-fatt-tze.jpg"
import PenangButterflyPark from "../assets/img/penang-butterfly-park.jpg"
import GlassMuseum from "../assets/img/glass-museum.jpeg"
import Teddyville from "../assets/img/teddyville-museum.jpg"
import PenangFloatingMosque from "../assets/img/floating-mosque.jpg"
import PenangGallery from "../assets/img/penang-state-museum.jpg"
import Wonderfood from "../assets/img/penang-wonderfood.jpeg"
import Burmese from "../assets/img/burmese.jpg"
import TrickArt from "../assets/img/penang-3d-trick-arts-museum.jpg"
import { useEffect } from 'react';
import Background from "../assets/img/tourist-spot-bg.jpg";
function Trip(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return( 
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={Background}
        title="Tourist Spot"
        
        />
        <div className="tripcard">
            
            <h1>Explore Places in Penang</h1>

            <p>Penang, known as the "Pearl of the Orient," 
                is a state on the northwest coast of Peninsular Malaysia. 
                It consists of Penang Island, where the capital city 
                George Town is located, and Seberang Perai on the mainland. 
                Penang has grown to be a popular travel destination for 
                both foreign visitors and Malaysians due to its rich history, 
                diversified culture, and breath-taking natural beauty. 
                Penang is a popular destination for domestic tourists 
                because to its accessibility, affordability, and chance 
                to see the rich history and culture of their own nation.
            </p>
            <div className="t-card">
                <div className="t-image">
                    <img src={PenangHill} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/mXvst55NayaiCocm9"><h4>Penang Hill</h4></a>
                
                <p>
                    For breathtaking views of Penang Island, a trip to Penang Hill is a must. 
                    This hill station stands at an elevation of 833 meters above sea level and 
                    offers a cool retreat from the city's heat. Take a ride on the funicular train, 
                    which has been operating since 1923, and enjoy the scenic journey up the hill.
                </p>
                    
 
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={KekLokSiTemple} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/YT9ZxsxQ6ey8ZDz9A"><h4>Kek Lok Si Temple</h4></a>
                
                <p>
                Kek Lok Si is a wonderful Buddhist temple built in away from Penang’s 
                shore. This architectural structure that is a haven for Buddhist pilgrims 
                and Chinese teachings houses a large Buddha statue apart from thousands of 
                his pictures, more than a hundred carvings, and some sculptures making it a 
                traditional home for both Mahayana Buddhism and Theravada Buddhism.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">8:30 am- 5:30 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={Unesco} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/yKajEZyTTpAozmoa9"><h4>George Town UNESCO World Heritage Site</h4></a>
                
                <p>
                George Town, the capital city of Penang, is a UNESCO World Heritage 
                Site known for its well-preserved colonial architecture, vibrant 
                street art, and multicultural heritage. Take a stroll through the 
                streets of George Town and admire the beautiful shophouses, temples, 
                and mosques that reflect the city's rich history.
                </p>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={BatuFerringhi} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/xawSgqgm45CU34jVA"><h4>Batu Ferringhi Beach</h4></a>
                
                <p>
                Batu Ferringhi Beach is an adventure land where you can get your 
                adrenalin racing while on a leisure holiday. The availability of 
                Jet Skis and Parasailing sports by the seaside is a major lure that 
                pulls every tourist who visits this town in Penang.
                </p>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={ClanJetty} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/nmm9aBZV6eh8VaT27"><h4>Clan Jetties</h4></a>
                
                <p>
                A lot many people from China had moved to Penang centuries ago, and the 
                Clan Jetties is home to the last set of them. You will find here six 
                jetties (houses) floating on water that signify six villages 
                made up of wood and aluminium.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 9:00 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangNationalPark} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/86urjUfg4rHRerDC6"><h4>Penang National Park</h4></a>
                
                <p>
                Penang National Park breaks the stigma around a national park being about 
                plentiful animals and long jungles. This smallest national park in Malaysia 
                is all about exploring nature by walking in its trails where you can spot 
                some animals like monkeys and giant lizards.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">8:00 am - 4:30 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangStreetArt} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/Ya4mYji2TMQBc5Gq6"><h4>Penang Street Art</h4></a>
                
                <p>
                Penang is famous for its vibrant street art scene, which has attracted 
                art enthusiasts from around the world. The city is adorned with murals, 
                sculptures, and installations that tell stories of Penang's history and 
                culture. Take a self-guided tour and discover these hidden gems as you 
                explore the streets of George Town.
                </p>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangPeranakanMansion} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/22X8B3MmhuTQXXpM7"><h4>Penang Peranakan Mansion</h4></a>
                
                <p>
                For all those who cannot get enough of learning about the cultures 
                in the world, the Pinang Peranakan Mansion will seem like a house of 
                joy for you. This museum is dedicated to retelling the history of the 
                Peranakan people who are otherwise referred to as Strait Chinese.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:30 am- 5:00 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={TropicalSpiceGarden} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/dhVDfjogvWTbFE4z9"><h4>Tropical Spice Garden</h4></a>
                
                <p>
                This is a place for all those who want to off-beat things when away on a 
                trip to Penang. The garden that once used to be a rubber plantation has 
                now transformed into an aromatic spice garden where there is a lot to learn 
                about the 500 species of flora and fauna for enthusiasts. You can walk around 
                the natural trails that also cross waterfalls while you explore this a
                ward-winning garden with a guided tour.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 6:00 pm (Fri - Sun)</span>
                </div>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 4:30 pm (Mon - Thurs)</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangWarMuseum} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/CNM5QZGE6RW2oRuXA"><h4>Penang War Museum</h4></a>
                
                <p>
                Penang War Museum is one of Penang's best places for history enthusiasts. 
                This former British military fortress turned museum offers a fascinating 
                insight into the history of World War II in Penang. Explore the underground 
                tunnels, artillery bunkers, and exhibits that showcase the impact of war on 
                the island. Tours and interactive displays are available for you to choose from.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 6:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={EscapeThemePark} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/Y7qi7wzTvYUvRzRT8"><h4>Escape Theme Park</h4></a>
                
                <p>
                This is the first theme park launched in Penang that is entertaining people 
                with thrilling adventures and a water park. The natural environment around 
                that sway with the wind in the area uplifts the theme park experience, 
                especially when you go bungee jumping.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">10:00 am - 6:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangBotanicGarden} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/hWGxiqvLFYHYwi1b6"><h4>Penang Botanic Gardens</h4></a>
                
                <p>
                Immerse yourself in nature at the Penang Botanic Gardens. This well-maintained 
                garden is a paradise for plant lovers, with a wide variety of tropical flora and 
                fauna. Take a stroll along the winding paths, visit the orchid garden, and relax 
                by the tranquil waterfalls.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">6:30 am - 7:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={CheongFattTze} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/QkQdXDmATT99frTS6"><h4>Cheong Fatt Tze Mansion</h4></a>
                
                <p>
                The blue mansion tip-top with flawless infrastructure has won several awards 
                and is recognized by the UNESCO for conserving the heritage. It has even won 
                accolades for being amongst the best Penang tourist places.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">11:00 am - 6:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangButterflyPark} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/yQHG8HJxQgNRzyjf7"><h4>Penang Butterfly Park</h4></a>
                
                <p>
                If you haven’t had the chance to connect with the charm of nature 
                in a long time, then Entopia Penang Butterfly Park should be on your 
                list of places to visit in Penang. This farm houses over 4,000 butterflies 
                of about 150 species, each more ecstatic than the other drifting one 
                into a fairy tale land.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 5:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={GlassMuseum} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/gQoYGktmvViJEL358"><h4>Glass Museum Penang</h4></a>
                
                <p>
                Choose to visit the Glass Museum Penang during your visit, and you are sure 
                to rave about its build and beauty for the rest of your life. Pictures from 
                your trip cannot get any better than when clicked in this museum where you can 
                confuse the image when standing in the large kaleidoscope.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:30 am - 6:00 pm (Mon - Fri)</span>
                </div>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:30 am - 5:00 pm (Closed on Sunday)</span>
                </div>
                

                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={Teddyville} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/Sxnie9SeqrMCiWQr9"><h4>Teddyville Museum</h4></a>
                
                <p>
                The Teddyville Museum is indeed just as amazing as it sounds where you can 
                witness the joy of being around our childhood furry friends have a whole 
                building to themselves. This enchanting teddy world has the leading collection 
                of teddy bears, which also recite the magnificent history of Penang in the most 
                delightful way that makes learning easy and cute!
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 5:30 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangFloatingMosque} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/NHc6bXnAx122S82FA"><h4>Penang Floating Mosque</h4></a>
                
                <p>
                Penang Floating Mosque is just like any other typical mosque but for the 
                uniqueness that it is built in the ocean water, making it stand out from the 
                others. Built not so long ago in 2005, this is the only one that is built in the ocean water.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">5:00 am - 6:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={PenangGallery} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/vFoVm2BNcVjKxBjd7"><h4>Penang State Museum and Art Gallery</h4></a>
                
                <p>
                This 1821 colonial building is like entering into the doors of the ancient times 
                because every corner right from the gate onwards narrates the history of Penang. 
                Holding a significant place in the Penang tourist places, this museum is a treasure 
                of galleries, artefacts, creativity, and costumes which express the events from the 
                past in a manner that one can easily relate to.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 5:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={Wonderfood} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/tHfGhUVskJ2oqgAM9"><h4>Penang Wonderfood Museum</h4></a>
                
                <p>
                Penang Wonderfood Museum is true to its name, a ‘food museum’ that is one-of-a-kind 
                and explicitly marvellous. This building is dedicated to glorifying the food culture 
                of Penang by creating large plastic models of the food that this place is known for.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 6:00 pm</span>
                </div>
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={Burmese} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/J4yQyBzk3C3DUa3T7"><h4>Dhammikarna Burmese Temple</h4></a>
                
                <p>
                The Dhammikarna Burmese Temple is the only Burmese Buddha temple outside Myanmar 
                and has statues of his meditation pose at every end of this temple. The eccentric 
                story of Buddha is conveyed through the frescoes that you will witness as you walk 
                inside this serene atmosphere where there is also a Bodhi Tree and a wishing pond.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 5:00 pm</span>
                </div>
                
            </div>

            <div className="t-card">
                <div className="t-image">
                    <img src={TrickArt} alt="image"/>
                </div>
                <a href="https://maps.app.goo.gl/HgG1stnPGwKBgL8XA"><h4>Penang 3D Trick Art Museum</h4></a>
                
                <p>
                Penang 3D Trick Art Museum is for all those who love to click pictures until the phone’s battery dies; 
                here you can do just that, but by tricking the viewer. 
                The museum has been designed in a manner where one can click pictures with several structures 
                that may seem ordinary, but have a catch to make things original when you see them in an image.
                </p>
                <div class="box">
                    <i class="fa-solid fa-clock"></i>
                    <span class="word">9:00 am - 6:00 pm</span>
                </div>
            </div>
        </div>
        <Footer/>
        </> 
    )
}
export default Trip