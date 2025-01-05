import React from "react";

export default function Navbar({ onScrollToSection }) {

    return (
      <>
        <div>
            <nav>
                <ul>
                <li><button className="Navbar-button" onClick={() => onScrollToSection("carousel")}><p>關廂境廟</p></button></li>
                <li><button className="Navbar-button" onClick={() => onScrollToSection("history")}><p>歷史沿革</p></button></li>
                <li><button className="Navbar-button" onClick={() => onScrollToSection("event")}><p>活動介紹</p></button></li>
                <li><button className="Navbar-button" onClick={() => onScrollToSection("pray")}><p>擲筊求籤</p></button></li>
                </ul>
            </nav>
        </div>
      </>
    )
  }