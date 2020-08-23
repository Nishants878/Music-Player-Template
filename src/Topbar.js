
import React from 'react';

const TopBarConnector = () =>{
    return(
        <div id = "TopbarWrapper">
            <div id ="TopLeft">
            <i id="SearchIcon" class="fas fa-search"></i>
            <input id="InputOne" type="text" name="search" placeholder="Search for song,artists etc.."/>
            </div>
            <div id ="TopRight">
              <span id="Dot"></span>
            <i id="Bell" className="far fa-bell"></i>
            <i id="Settings" class="fa fa-cog" aria-hidden="true"></i>
            <button id="BtnOne">Upgrade Plan</button>
            </div>
        </div>
    )
}


export default TopBarConnector;