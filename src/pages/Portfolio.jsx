import React from 'react'
import ak from "../images/ak.png"
import am from "../images/am.png"
import codeQuiz from "../images/code-quiz.png"
import gb from "../images/gb.png"
import weather from "../images/weather.png"
import recycle from "../images/recycle.png"
import "../styles/portfolio.css"

export const Portfolio = () => {
  return (
    <div>
      <div className="container main-wrapper">
        <div className="row d-flex align-items-lg-center portfolio-img-wrapper">
          <div className="col-12 about-me">
              <p>Portfolio</p>
          </div>
          <div className="col-lg-4">
              <div className="portfolio-img sasha">
                  <img src={ak} alt="website image"/>
              </div>
              <div className="description">
                  <p>Personal Website</p>
              </div>
              <div className="site-link">
                  <p>
                      <a href="http://alexandrakomarova.com/">alexandrakomarova.com</a>
                  </p>
              </div>
            </div>
              <div className="col-lg-4">
                  <div className="portfolio-img alyona">
                      <img src={am} alt="website image"/>
                  </div>
                  <div className="description">
                      <p>Personal Website</p>
                  </div>
                  <div className="site-link">
                      <p>
                          <a href="http://alyonamaslova.com/">alyonamaslova.com</a>
                      </p>
                  </div>
              </div>
                <div className="col-lg-4">
                    <div className="portfolio-img great-blue">
                        <img src={gb} alt="website image"/>
                    </div>
                    <div className="description">
                        <p>Art Project Website</p>
                    </div>
                    <div className="site-link">
                        <p>
                            <a href="http://greatbluejournal.com/">greatbluejournal.com</a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                  <div className="portfolio-img great-blue">
                      <img src={codeQuiz} alt="website image"/>
                  </div>
                  <div className="description">
                      <p>Javascript Quiz</p>
                  </div>
                  <div className="site-link">
                      <p>
                        <a href="https://s212288s.github.io/code-quiz/">s212288s.github.io/code-quiz</a>
                      </p>
                  </div>  
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-img great-blue">
                        <img src={weather} alt="website image"/>
                    </div>
                    <div className="description">
                        <p>Weather Dashboard</p>
                    </div>
                    <div className="site-link">
                        <p>
                            <a href="https://s212288s.github.io/WEATHER-DASHBOARD/">s212288s.github.io/WEATHER-DASHBOARD/</a>
                        </p>
                    </div>  
                </div>
                <div className="col-lg-4">
                  <div className="portfolio-img great-blue">
                      <img src={recycle} alt="website image"/>
                  </div>
                  <div className="description">
                      <p>Search for best recycling practices</p>
                  </div>
                  <div className="site-link">
                      <p>
                          <a href="https://intense-thicket-33780.herokuapp.com/">Recycle Nation</a>
                      </p>
                  </div>  
              </div>
            </div>
        </div>
    </div>
  )
}
