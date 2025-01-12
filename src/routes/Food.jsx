import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import React, { useState } from 'react';
import Background from "../assets/img/food-bg.jpg";
import { useEffect } from 'react';
import "../App.css";
function Food() {
    const [searchTerm, setSearchTerm] = useState('');
    const [commentInputs, setCommentInputs] = useState({});
    const [foods, setFoods] = useState([
        {
            name: 'Siam Road Charcoal Char Koay Teow',
            description: 'A classic stir-fried noodle dish with prawns, eggs, and chives. Hailed by the BBC as the “Humble King of Noodles”, Uncle Tan Chooi Hong never fails to work his magic with every plate. Using traditional charcoal to cook the noodles, his signature dish has a heavenly flavor that’s full-bodied with a smoky aftertaste.',
            image: 'https://www.travelswithsun.com/wp-content/uploads/The-Famous-Mouth-Watering-Siam-Road-Charcoal-Char-Koay-Teow-In-Penang.jpg',
            address: '82, Jalan Siam, George Town, 10400 George Town, Pulau Pinang',
            mapLink: 'https://shorturl.at/yorYd',
            stars: 4.5,
            reviews: ['Amazing flavor!', 'Best I’ve ever had.'],
        },
        {
            name: 'Penang Road Famous Laksa',
            description: 'Penang Asam Laksa is a tangy, flavorful noodle soup made with mackerel broth, tamarind, thick rice noodles, and fresh toppings like mint, pineapple, and shrimp paste. It’s a must-try dish that captures the vibrant flavors of Penang’s culinary heritage.',
            image: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/77b88c62389949179ef84d9cd3acfc40.jpeg?w=800&h=800&org_if_sml=1',
            address: '456 Laksa Lane, Georgetown, Penang',
            mapLink: 'https://shorturl.at/9uJlc',
            stars: 4.8,
            reviews: ['Amazing taste!', 'So flavorful!'],
        },
        {
            name: 'Mu Tong Hokkien Mee @ The Shark Food Court',
            description: 'Hokkien Mee is a flavorful noodle dish with a rich prawn broth, topped with prawns, pork, eggs, and sambal chili.' +
                ' Mu Tong Hokkien Mee, now at The Shark Food Court, has over 60 years of history. Known for their "liquid gold" broth, they’re a top spot for this Penang classic.',
            image: 'https://2.bp.blogspot.com/-xBkfM37A0dE/WW8sQXUyYvI/AAAAAAAABds/mbBnJnlQheoDr87fA9AzCjsM8PIw5BZCACLcBGAs/s1600/P1.jpg',
            address: '192, Jalan Burma, Kampung Syed, 10350 George Town, Pulau Pinang.',
            mapLink: 'https://shorturl.at/AovEV',
            stars: 5.0,
            reviews: ['Tangy and delicious!', 'Authentic Hokkien Mee, just like how it’s meant to be.'],
        },
        {
            name: 'Pasembur King (Hussain)',
            description: 'Hussain Pasembur King serves the best and most authentic pasembur with a thick sauce. It is neither too sweet nor too spicy, which might be why many people love it. They also offer a variety of other dishes such as Mee Goreng, Kuey Teow Rebus, Squid, Beef, Kelompong (stuffed fritters), Fish Roe, Cucur (fried snacks), Mee Rebus, Yam, and Tofu.',
            image: 'https://myweekendplan.asia/wp-content/uploads/2023/01/Pasembur-King-Hussain-1.jpg ',
            address: 'Georgetown, 10200 George Town, Penang ',
            mapLink: 'https://shorturl.at/CLjLo ',
            stars: 4.3,
            reviews: ['A must-try!'],
        },
        {
            name: 'Nasi Kandar (Deen Maju)',
            description: 'Nasi Kandar, a Penang specialty, is a hearty dish of steamed rice drenched in a flavorful mix of curries and served with a variety of side dishes like fried chicken, beef, squid, fish roe, and okra. Its rich, aromatic taste and unique "banjir" style make it a favorite among locals and tourists alike.\n' +
                'One of the best places to try Nasi Kandar is Deen Maju on Gurdwara Road. Known for its crispy fried chicken and creamy Ayam Ros curry, this restaurant attracts long queues daily. \n',
            image: 'https://penangfoodie.sgp1.digitaloceanspaces.com/2018/02/27891034_2037049923204036_2337065398526017536_n.jpg ',
            address: '170, Jalan Gurdwara, 10300 George Town, Pulau Pinang ',
            mapLink: 'https://shorturl.at/Un7GL ',
            stars: 4.6,
            reviews: ['Best in town!', 'Absolutely loved it.'],
        },
        {
            name: 'Penang Road Famous Teochew Chendul',
            description: 'Cendol is a traditional Southeast Asian dessert made with shaved ice, pandan-flavored jelly noodles, coconut milk, and palm sugar syrup. Topped with ingredients like red beans, durian, or sweet corn, it’s a refreshing treat, especially in Malaysia and Indonesia. The combination of creamy coconut milk, sweet palm sugar, and chewy jelly noodles makes it a perfect dessert for hot days. Penang Road Famous Teochew Chendul is a must-visit for an authentic, satisfying version of this dessert.',
            image: 'https://penangfoodie.sgp1.digitaloceanspaces.com/2019/02/50105001_560740637771554_2570057894363382581_n.jpg ',
            address: '27-29, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang',
            mapLink: 'https://shorturl.at/30Kdy',
            stars: 4.2,
                reviews: ['Absolutely tasty!', 'So sweet'],
        },
        {
            name: 'Hot Bowl White Curry Mee',
            description: 'White curry mee is served in a coconut milk-based broth with a bowl of curry paste on the side so that you can adjust the heat to your liking. The curry paste is available for sale by the bottle; it takes two hours to hand-stir the spices with dried shrimps and chillies. Optionally, pair your mee with deboned steamed chicken, spiced loh bak or Teochew guang jiang. The clear broth noodle soup with chicken meatballs is also worth trying. ',
            image: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/af463b7d8b914706a9730b8ad451acdc.jpeg?w=800&h=800&org_if_sml=1 ',
            address: '58C, Jalan Rangoon, 10400 George Town, Pulau Pinang',
            mapLink: 'https://shorturl.at/Nrea7 ',
            stars: 4.8,
            reviews: ['Can’t get enough of their savory and aromatic broth.'],
        },
        {
            name: 'Apom Balik (Aki Pancake)',
            description: 'Apom Balik is a popular pancake known for its crispy edges and soft, chewy center. It is typically filled with crushed peanuts, sugar, and sweet corn, and often folded in half to contain the filling. Some variations may also include bananas or chocolate. Its delightful combination of crispy and chewy textures makes it a favorite snack or dessert in Southeast Asia.',
            image: 'https://penangfoodie.sgp1.digitaloceanspaces.com/2018/09/34696680_445720075854002_1138926246298648576_n.jpg ',
            address: 'Bayan Lepas, 47, Jalan Nipah, Bayan Lepas, 11900 Bayan Lepas, Penang',
            mapLink: 'https://tinyurl.com/st6pjbt4 ',
            stars: 4.0,
            reviews: ['Worth every bite.', 'Love it!'],
        },
        {
            name: 'Penang Nutmeg Juice',
            description: 'Nutmeg Juice is a refreshing beverage made from the nutmeg fruit native to Penang. Known for its tangy, slightly sweet flavor with a hint of spice, it’s often served chilled and is believed to have cooling properties. Besides refreshing qualities, nutmeg juice is also appreciated for aiding digestion and relieving bloating. A must-try drink to experience Penang’s unique flavors.',
            image: 'https://penangfoodie.sgp1.digitaloceanspaces.com/2019/02/50105001_560740637771554_2570057894363382581_n.jpg ',
            address: '202A, Jalan Tanjung Bungah, Kampung Sungai Pinang, 11000 Balik Pulau, Pulau Pinang',
            mapLink: 'https://tinyurl.com/4w655ukj ',
            stars: 3.7,
            reviews: ['Such a unique flavor', ' Love how cooling and soothing it is. Definitely a must-try for anyone visiting Penang!'],
        },
        {
            name: 'Ali Nasi Lemak ',
            description: 'This is Malaysia’s national dish. Literally “fat rice”, nasi lemak is a dish consisting of boiled or fried egg, cucumber, ikan bilis (fried anchovies), peanuts, sambal (chili sauce), and of course the nasi (rice), which is cooked in santan (coconut milk) and flavored with pandan (screwpine) leaves. It’s usually paired with a viand or two (or sometime more), in which ayam goreng (fried chicken) is the most popular. Imagine the flavors and textures! \n' +
                'Ali Nasi Lemak is known to serve the best nasi lemak in all of Penang. The flavor is a mix of sweet, spicy, and salty. It’s definitely an umami bomb!\n',
            image: 'https://images.squarespace-cdn.com/content/v1/5d7f2d797a64971f017f10ff/502adc86-ef18-49ce-a133-02ad51ba5eb6/10-03+PENANG+FOOD+AND+TRAVEL+GUIDE+P10.png?format=1500w ',
            address: 'Beach St, Georgetown, 10300 George Town, Penang',
            mapLink: 'https://tinyurl.com/5n7btu3k ',
            stars: 5.0,
            reviews: ['The sambal adds an incredible kick to the dish.', 'Top-notch dish!'],
        },

    ]);

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCommentChange = (index, value) => {
        setCommentInputs({ ...commentInputs, [index]: value });
    };

    const addComment = (index) => {
        const updatedFoods = [...foods];
        if (commentInputs[index]) {
            updatedFoods[index].reviews.push(commentInputs[index]);
            setFoods(updatedFoods);
            setCommentInputs({ ...commentInputs, [index]: '' });
        }
    };
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={Background}
        title="Discover Penang's Delicacies"
        />
        <div className="food-page">
            
            <input
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="food-list">
                {filteredFoods.map((food, index) => (
                    <div key={index} className="food-card">
                        <img src={food.image} alt={food.name} className="food-image" />
                        <h3>{food.name}</h3>
                        <p>{food.description}</p>
                        <p><strong>Address:</strong> <a href={food.mapLink} target="_blank" rel="noopener noreferrer">{food.address}</a></p>
                        <p><strong>Rating:</strong> {food.stars} ⭐</p>
                        <div className="reviews">
                            <strong>Reviews:</strong>
                            <ul>
                                {food.reviews.map((review, i) => (
                                    <li key={i}>{review}</li>
                                ))}
                            </ul>
                            <textarea
                                placeholder="Add your comment"
                                value={commentInputs[index] || ''}
                                onChange={(e) => handleCommentChange(index, e.target.value)}
                                className="review-input"
                            />
                            <button onClick={() => addComment(index)} className="review-button">
                                Submit Comment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Food;