import React from 'react';
import TopBarConnector from './Topbar';
import NavigationConnector from './Sidebar';
import './App.css';
import BillboardConnector from './Billboard';
import PopularConnector from './Popular';
import MusicPlayerConnector from './MusicPlayer';


function App() {
  
  
  return (
    <div className = "App">

      <div id="Left">
      <NavigationConnector/>
      </div>
          
      <div className ="Right">
          <TopBarConnector/>
          <div id="TopChart"><h2>BillBoard Topchart</h2></div>
          <div className="Slides">
                <BillboardConnector/>
          </div>
          <div className="RightBottomWrapper">
            <div className="BottomLeft">
              <h1 className="HElement">Most Popular</h1>
              <p id="NumbersOfSong">92 Songs</p>
                <PopularConnector/>
            </div>

            <div className="BottomRight">
              <h1 className="NowPlaying">
                Now Playing
              </h1>
              <p className="ItemsContainer">55 Items on the list</p>
              <div className="MusicPlayerWrapper">
                     <MusicPlayerConnector/>
                     <div className="ControlWrapper">
                       <div className="Controls"><i class=" can fas fa-random"></i></div>
                       <div className="Controls"><i class=" can fas fa-backward"></i></div>
                       <div id="SquareOne" className="Controls"><i class=" option can fas fa-pause"></i></div>
                       <div className="Controls"><i class=" can fas fa-forward"></i></div>
                       <div className="Controls"><i class=" can fas fa-redo-alt"></i></div>
                     </div>
              </div>
            </div>
          </div>
      </div>
      
      
    </div>
 
  );
}

export default App;
