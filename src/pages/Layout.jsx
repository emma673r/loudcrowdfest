import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import ReactDOM from "react-dom/client";
import "../../src/burger-menu-style.css";
import LogoWhite from "../components/img-components/LogoWhite";

function Layout() {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  function goToSche() {
    navigate("../schedule");
  }
  function goToLine() {
    navigate("../lineup");
  }
  function goToBook() {
    navigate("../booking");
  }
  function goToNo() {
    navigate("../noPage");
  }
  function goToInfo() {
    navigate("../information");
  }
  return (
    <div className="menuContent">
      <LogoWhite></LogoWhite>
      <p>30/6 - 07/07 2023</p>
      <Menu right width={"100%"} noOverlay>
        {/* this is undefined but without it it doesnt work ?? (emma) */}
        <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to={"/"}>
          <div onClick={goToHome}>HOME</div>
        </Link>
        <Link onClick={() => this.closeMenu()} id="schedule" className="menu-item" to={""}>
          <div onClick={goToSche}>SCHEDULE</div>
        </Link>
        <Link onClick={() => this.closeMenu()} id="lineup" className="menu-item" to={""}>
          <div onClick={goToLine}>LINE-UP</div>
        </Link>
        <Link onClick={() => this.closeMenu()} id="booking" className="menu-item" to={""}>
          <div onClick={goToBook}>BOOKING</div>
        </Link>
        <Link onClick={() => this.closeMenu()} id="shop" className="menu-item" to={""}>
          <div onClick={goToNo}>SHOP</div>
        </Link>
        <Link onClick={() => this.closeMenu()} id="information" className="menu-item" to={""}>
          <div onClick={goToInfo}>INFORMATION</div>
        </Link>
      </Menu>
      <Outlet />
    </div>
  );
}

export default Layout;
