import React from 'react';



const NavigationConnector = () =>{
    const profile = "https://www.freeiconspng.com/uploads/pocket-mortys-cheats-icon-18.jpeg"
    return(
        <div className="NavigationBarWrapper">
              <div id="ProvileInfo">
              <img className="ProfilePicture" src={profile} alt="User Profile" />
              <h3 id="Name">Morty Smith</h3>
              <p id="Email"><i>morty.smith25@ohboy.com</i></p>
              </div>
              <div className ="MenuWrapper">
                  <div className="NavigationMenu">
                 <div><i class="fas fa-home"></i></div> <div className="NavigationTitle"><p>Home</p></div>
                  </div>    
                  <div className="NavigationMenu">
                  <div><i id="Colour" class="fas fa-window-restore"></i></div><div className="NavigationTitle"><p className="Color">Browse</p></div>
                  </div>
                  <div className="NavigationMenu">
                  <div><i class="fas fa-file"></i></div><div className="NavigationTitle"><p>Album</p></div>
                  </div>
                  <div className="NavigationMenu">
                  <div><i class="fas fa-user"></i></div><div className="NavigationTitle"><p>Artist</p></div>
                  </div>
                  <div className="NavigationMenu">
                  <div><i class="fas fa-video"></i></div><div className="NavigationTitle"><p>Videos</p></div>
                  </div>
              </div>
              <h3 id="PersonalMusic"><i>MY MUSIC</i></h3>
              <div className="NavigationMenuTwo">
                 <div><i class="fas fa-clock"></i></div> <div className="NavigationTitle"><p>Recently Played</p></div>
                  </div>    
                  <div className="NavigationMenuTwo">
                  <div><i class="fas fa-file"></i></div><div className="NavigationTitle"><p>Local Files</p></div>
                  </div>

                  <div id="IphoneWrapper">
                      <h4 id="Detail">Iphone X</h4>
                      <div id="IphonePicture">
                          <img id="Phone" src="https://clipart.info/images/ccovers/1505918647iphone-x-png.png" alt="Iphone"/>
                      </div>
                  </div>
        </div>
    )
}



export default NavigationConnector;