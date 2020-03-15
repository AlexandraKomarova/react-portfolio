import React from 'react'
import Me from "../images/me.jpg"
import "../styles/style.css"

export const Home = () => {
  return (
    <div>
      <div className="container main-wrapper">
            <div className="row">
                <div className="col-12 about-me">
                    <p>About Me</p>
                </div>
                <div className="col-12 clearfix main-content">  
                    <img src={Me} alt="photo of me" className="float-md-left"/>
                    <p>Alexandra Komarova</p>
                    <p>Aspiring Web Developer currently studying at Columbia Engineering School Full-Stack Coding Bootcamp</p>
                </div>   
            </div>
        </div>
    </div>
  )
}
