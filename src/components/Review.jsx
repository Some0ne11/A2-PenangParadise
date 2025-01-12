import "./Review.css";
const Review = () => {
    return (
        <div className="travel-review">
            
            <div className="map-section">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaPiLIKVq6iY83SYRQR26NeKlUCEw1AIRyBwkMz0Fkw6aXlCNOTV5tc4J3mlJ8YveETi-me0foTvvRMc-Es9MPjii2zAiIMseiSB6V19aYLdsD6zDnL7N4idkJFQnz1vSNQpPCQr0oISvB/s640/DSC_0861.jpg" alt="Blogger Picture" className="world-map" />
            
            </div>
      
            <div className="review-section">
                
                <h1>[Travelogue] Penang: Point of Views</h1>
    
                <p className="review-text">
                Penang, a thriving destination for the heritage seekers, a short escape for fellow Malaysians, and affordable quality medical retreat for Indonesians. Penang shares lots of different meaning towards different people. This beautiful island, still unpopular by most Indonesians, is actually an amazing travel destinations. The foods, the nature, the city, and the heritage area, are the main reasons this affordable destination should be on your list if you haven't done so.
                <a href="https://flavorfulescape.blogspot.com/2016/11/penang-point-of-views.html"> Read more</a>
                </p>
                

                <div className="reviewer">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK_B3kB_qVNggEQQoLqepRGW-MVOWf9tPDmb9cu5-ZxeZiBlmLzExiKtDsBJ7BvEyv3cMaMPVEplq3L_Ra-5dTII26MD9navHcFtU179VJzBGStun-mtLaqmqLF4EliLZJLKwi4eaXuIGn/s320/DSC_5941.jpg" alt="Flavorful Escape!" className="reviewer-img" />
                    <div className="reviewer-info">
                        <h3>Flavorful Escape</h3>
                        <span>Tourist</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
