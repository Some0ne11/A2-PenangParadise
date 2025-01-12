import React, { Component } from "react";
import "./Navbar.css";
import {Menuitems} from "./Menuitems"
import {Link} from "react-router-dom";
class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <a href="/"><h1 className="navbar-logo">Penang Paradise</h1></a>
                    
                    
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                        
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {Menuitems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className="nav-links" to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                    }
                
                
                
                </ul>
            </nav>
        )
    }   
    
}
export default Navbar;