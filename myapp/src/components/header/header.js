import React from "react";
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeView from "../home/home";
import NotFound from "../notfound/notfound";
import '../header/header.css';
import DetailsPage from "../detailspage/detailspage";

function Header(){
    return(
        <Router>
            <nav class="navbar navbar-fixed navbar-bg">
                <div class="container">
                    <div class="navbar-header">
                        <button class="navbar-toggle-button" type="button" id="navabr-toggle">
                            <img src="images/icons/menu.svg" width="30" alt="menu" title="menu" />
                        </button>
                        <Link class="navbar-brand" to="/">Movie <span className="hdr-logo-sub">App</span></Link>
                    </div>	
                </div>    	
            </nav>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/details/:id" element={<DetailsPage/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes> 
        </Router>
    )
}

export default Header;