import React from 'react';


const MusicPlayerConnector =()=>{
    return(
          <div className="SystemWrapper">
                  <div className="HoverCircle"></div>
                  <img className="CircularAlbum" src="https://preview.redd.it/axlpz23v8b241.jpg?auto=webp&s=23e16e9584800ed8d37d69c47bc9b2fb14ab0221" alt="BLINDING LIGHTS"/>
                 <p className="InPlayerName">Blinding Lights</p>
                 <p className="InPlayerSinger"><i>The Weekend</i></p>
                 <div className="RangeWrapper">
                     <input className="Scroll" type="range"/>
                     <span className="Starting">0:00</span><span className="Ending">3:22</span>
                 </div>
          </div>
    )
};


export default MusicPlayerConnector;
