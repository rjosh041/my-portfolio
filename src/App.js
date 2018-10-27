import React from 'react';
import fbicon from './images/facebook-logo.png';
import messenger from './images/messenger-logo.png';
import gplus from './images/google-plus-logo.png';
import windows from './images/windows-logo.png';
import wpflogo from './images/wpf-logo.png';
import dblogo from './images/database.png';
import windowsres from './images/windows-res.png';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <div className="top-nav">
                  <h1>Joshua<span>Ramos</span></h1>
                  <ul>
                      <li><a href="#Home"><span className="active">Home</span></a></li>
                      <li><a href="#About">About</a></li>
                      <li><a href="#Works">Works</a></li>
                      <li><a href="#Contact">Contact</a></li>
                  </ul>
              </div>
              <div className="main-content">
                  <div className="container">
                      <h1>Hi!, I'm Joshua, Nice to meet you!</h1>
                      <p><i>"You can never understand everything <br />
                      But, you should push yourself to understand the system"<br />
                      -Ryan Dahl (Node.js Creator)
                      </i></p>
                      <button>Start Scrolling</button>
                  <div className="media-logos">
                      <img src={fbicon} alt="Facebook"/>
                      <img src={messenger}  alt="Messenger"/>
                      <img src={gplus}  alt="Google Plus"/>
                  </div>
                  </div>
              </div>
          </header>
      <div className="Work">
          <div className="Work-container">
            <div className="box">
               <img src={wpflogo} alt="Facebook"/>
               <p>Windows Presentation Foundation</p>
            </div>
            <div className="box">
               <img src={windows}  alt="Facebook"/>
               <p>Windows Application</p>
            </div>
            <div className="box">
               <img src={dblogo} alt="Facebook"/>
               <p>Relational Database</p>
            </div>
            <div className="box">
               <img src={windowsres} alt="Facebook"/>
               <p>Windows App UI</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;