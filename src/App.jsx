import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger-menu-style.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <div className="menuContent">
        <p className="dates">LOGO</p>
        <p className="dates">30/6 - 07/07 2023</p>
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
      </div>
      <Home></Home>
    </div>
  );
}

//     <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />}></Route>
//       <Route path="schedule" element={<Schedule />}></Route>
//       <Route path="booking" element={<Booking />}></Route>
//     </Route>
//   </Routes>
// </BrowserRouter>

export default App;
