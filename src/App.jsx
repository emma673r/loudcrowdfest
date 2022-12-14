import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Schedule from "./pages/Schedule";
import Lineup from "./pages/Lineup";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";
import Information from "./pages/Information";
import NoPage from "./pages/NoPage";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*    <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />}></Route>
          <Route path="schedule" element={<Schedule />}></Route>
          <Route path="lineup" element={<Lineup />}></Route>;
          <Route path="booking" element={<Booking />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="information" element={<Information />}></Route>
          <Route path="*" element={<NoPage />} />
          {/*       </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*     <BrowserRouter>
  <Routes>
     <Route path="/" element={<Layout />}>
     <Route index element={<Home />}></Route>
       <Route path="schedule" element={<Schedule />}></Route>
    <Route path="lineup" element={<Lineup />}></Route>;
       <Route path="booking" element={<Booking />}></Route>
          <Route path="shop" element={<Shop />}></Route>
             <Route path="information" element={<Information />}></Route>
              <Route path="*" element={<NoPage />} />
     </Route>
   </Routes>
 </BrowserRouter> */

export default App;
