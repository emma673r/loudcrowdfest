import React from "react";
import { Outlet, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import ReactDOM from "react-dom/client";
import "../../src/burger-menu-style.css";
import LogoWhite from "../components/img-components/LogoWhite";

function Layout() {
  return (
    <div className="menuContent">
      <LogoWhite></LogoWhite>
      <p>30/6 - 07/07 2023</p>
      <Menu right width={"100%"} noOverlay>
        {/* this is undefined but without it it doesnt work ?? (emma) */}
        <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to={"/"}>
          HOME
        </Link>
        <Link onClick={() => this.closeMenu()} id="schedule" className="menu-item" to={"../schedule"}>
          SCHEDULE
        </Link>
        <Link onClick={() => this.closeMenu()} id="lineup" className="menu-item" to={"../lineup"}>
          LINE-UP
        </Link>
        <Link onClick={() => this.closeMenu()} id="booking" className="menu-item" to={"../booking"}>
          BOOKING
        </Link>
        <Link onClick={() => this.closeMenu()} id="shop" className="menu-item" to={"../noPage"}>
          SHOP
        </Link>
        <Link onClick={() => this.closeMenu()} id="information" className="menu-item" to={"../information"}>
          INFORMATION
        </Link>
      </Menu>
      <Outlet />
    </div>
  );
}

export default Layout;
