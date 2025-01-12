import Home from "./routes/Home.jsx"
import Hotel from "./routes/Hotel.jsx"
import TouristSpot from './routes/Trip.jsx'
import Food from './routes/Food.jsx'
import History from './routes/History.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home key={Date.now()} />} />

      <Route path="/touristspot" element={<TouristSpot/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/hotel" element={<Hotel/>}/>
      <Route path="/history" element={<History/>}/>  
    </Routes>
</>
      
  );
}
