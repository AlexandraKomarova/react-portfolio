import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <div className="row">
            <div className="col-12 name">
                <h1>Alexandra Komarova</h1>
            </div>
            <div className="col-12 d-flex justify-content-center menu">
                <div className="menu-item">
                    <p>
                        <a href="#">About</a>
                    </p>
                </div>
                <div className="menu-item">
                    <p>
                        <a href="portfolio.html">Portfolio</a>
                    </p>
                </div>
                <div className="menu-item">
                    <p>
                        <a href="contact.html">Contact</a>
                    </p>  
                </div>    
            </div>
        </div>
    </div>
    );
};