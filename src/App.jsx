import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger-menu-style.css";
function App() {
  return (
    <div className="App">
      <Menu right width={"100%"} noOverlay>
        <a id="home" className="menu-item" href="/">
          HOME
        </a>
        <a id="schedule" className="menu-item" href="/schedule">
          SCHEDULE
        </a>
        <a id="lineup" className="menu-item" href="/lineup">
          LINE-UP
        </a>
        <a id="booking" className="menu-item" href="/booking">
          BOOKING
        </a>
        <a id="shop" className="menu-item" href="/shop">
          SHOP
        </a>
        <a id="information" className="menu-item" href="/information">
          INFORMATION
        </a>
      </Menu>
      <div>LOUDCROWDFEST INDEX</div>
    </div>
  );
}

export default App;
