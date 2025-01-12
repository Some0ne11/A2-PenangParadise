import React from "react";
import './Card.css'; // Directly import CSS for global class names
import IconicLandmark from '../assets/img/iconic-landmark.jpg';
import Culinary from '../assets/img/culinary.jpg';
import History from '../assets/img/history-penang-bg.jpg';
import Hotel from '../assets/img/hotel.png';
import Holiday from "../assets/img/holiday.jpg";
import Event from "../assets/img/event.jpg";
import Flight from "../assets/img/flight.jpg";
import {Link} from "react-router-dom";
function Card() {
    return (
        <div className="Memories_wrapper">
            <div className="MemoriesCard">
                <img src={IconicLandmark} alt="Iconic-landmark-img" />
                <div className="content">
                    <h3>Iconic Landmarks</h3>
                    <Link to="/touristspot"><button>Learn More</button></Link>
                    
                </div>
            </div>

            <div className="MemoriesCard">
                <img src={Culinary} alt="Culinary-img" />
                <div className="content">
                    <h3>Culinary Adventures</h3>
                    <Link to="/food"><button>Learn More</button></Link>
                </div>
            </div>

            <div className="MemoriesCard">
                <img src={History} alt="History-img" />
                <div className="content">
                    <h3>A Journey Through Time</h3>
                    <Link to="/history"><button>Learn More</button></Link>
                </div>
            </div>

            <div className="MemoriesCard">
                <img src={Hotel} alt="Hotel-img" />
                <div className="content">
                    <h3>Cozy Stays</h3>
                    <Link to="/hotel"><button>Learn More</button></Link>
                </div>
            </div>
            <div className="MemoriesCard">
                <img src={Flight} alt="Flight-img" />
                <div className="content">
                    <h3>Flight to Penang</h3>
                    <a href="https://my.trip.com/flights/to-penang/airfares-pen?allianceid=14900&sid=4141571&locale=en_my&curr=myr&ppcid=ckid-29097616695_adid-546738666152_akid-kwd-947747498_adgid-127071398093&utm_source=google&utm_medium=cpc&utm_campaign=14688838701&gad_source=1&gclid=Cj0KCQiAst67BhCEARIsAKKdWOlFjcMCDr-w6jEs3cn2QFgnB89MNFxId3Z8iiJyF8ELZXyxoe04YhkaAu_NEALw_wcB"><button>Learn More</button></a>
                </div>
            </div>
            <div className="MemoriesCard">
                <img src={Event} alt="Event-img" />
                <div className="content">
                    <h3>Events in Penang</h3>
                    <a href="https://mypenang.gov.my/events/all-events/?lg=en"><button>Learn More</button></a>
                </div>
            </div>
            <div className="MemoriesCard">
                <img src={Holiday} alt="Holiday-img" />
                <div className="content">
                    <h3>Public Holidays <br /> in Penang 2025</h3>
                    <a href="https://www.qppstudio.net/publicholidays2025/malaysia-pulau-pinang-penang.htm">
                        <button>Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
