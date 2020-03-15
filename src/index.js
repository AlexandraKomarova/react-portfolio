import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  return (
    <div>
      {/* <div className="container main-wrapper">
            <div className="row">
                <div className="col-12 about-me">
                    <p>About Me</p>
                </div>
                <div className="col-12 clearfix main-content">  
                    <img src="images/me.jpg" alt="photo of me" className="float-md-left"/>
                    <p>Alexandra Komarova</p>
                    <p>Aspiring Web Developer currently studying at Columbia Engineering School Full-Stack Coding Bootcamp</p>
                </div>   
            </div>
        </div> */}
        {/* <h1 className="display-1">Hello</h1> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
