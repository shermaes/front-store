import React from"react";
import "./Header.css";
import image from "../../../logo.png"

export default function Header(){
  return(
    <header className="Header">
        
      <img src={image}className="Logo"alt="logo"/>
      <h1 style={{color: "red"}}>Raul's Hardware Store</h1>
      <nav className="Nav">
      </nav>
    </header>
  );
}