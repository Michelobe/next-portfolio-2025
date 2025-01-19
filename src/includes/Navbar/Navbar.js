"use client";

import { useEffect } from "react";
import './Navbar.css';

export default function Navbar() {
    useEffect(() => {
        // Ensure the script runs in the client
        const CSbody = document.querySelector("body");
        const CSnavbarMenu = document.querySelector("#cs-navigation");
        const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
    
        const ariaExpanded = () => {
          const csUL = document.querySelector("#cs-expanded");
          const csExpanded = csUL.getAttribute("aria-expanded");
    
          if (csExpanded === "false") {
            csUL.setAttribute("aria-expanded", "true");
          } else {
            csUL.setAttribute("aria-expanded", "false");
          }
        };
    
        const onHamburgerClick = () => {
          CShamburgerMenu.classList.toggle("cs-active");
          CSnavbarMenu.classList.toggle("cs-active");
          CSbody.classList.toggle("cs-open");
          ariaExpanded();
        };
    
        const dropDowns = Array.from(
          document.querySelectorAll("#cs-navigation .cs-dropdown")
        );
    
        const dropdownListeners = dropDowns.map((item) => {
          const onClick = () => {
            item.classList.toggle("cs-active");
          };
          item.addEventListener("click", onClick);
          return { item, onClick }; // Store item and handler for cleanup
        });
    
        // Add event listener to hamburger menu
        CShamburgerMenu.addEventListener("click", onHamburgerClick);
    
        // Cleanup function
        return () => {
          CShamburgerMenu.removeEventListener("click", onHamburgerClick);
          dropdownListeners.forEach(({ item, onClick }) =>
            item.removeEventListener("click", onClick)
          );
        };
      }, []); // Empty dependency array ensures this runs only once
                            
    return (

    <header id="cs-navigation">
    {/* <!-- ============================================ -->
    <!--                 Navigation                   -->
    <!-- ==================== https://www.codestitch.app/app/dashboard/stitches/758?nav=Top%20Dropdown ================ --> */}
        <div className="cs-container">
            {/* <!--Nav Logo--> */}
            <a href="" className="cs-logo" aria-label="back to home">
                <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg" alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
            </a>
            {/* <!--Navigation List--> */}
            <nav className="cs-nav" role="navigation">
                {/* <!--Mobile Nav Toggle--> */}
                <button className="cs-toggle" aria-label="mobile menu toggle">
                    <div className="cs-box" aria-hidden="true">
                        <span className="cs-line cs-line1" aria-hidden="true"></span>
                        <span className="cs-line cs-line2" aria-hidden="true"></span>
                        <span className="cs-line cs-line3" aria-hidden="true"></span>
                    </div>
                </button>
                {/* <!-- We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are--> */}
                <div className="cs-ul-wrapper">
                    <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                        <li className="cs-li">
                            <a href="../../index.html" className="cs-li-link cs-active">
                                Home
                            </a>
                        </li>
                        <li className="cs-li">
                            <a href="./about-home.html" className="cs-li-link">
                                About
                            </a>
                        </li>
                        <li className="cs-li">
                            <a href="./new-computer.html" className="cs-li-link">
                                Technologies/Tools
                            </a>
                        </li>
                        <li className="cs-li">
                            <a href="" className="cs-li-link">
                                Projects
                            </a>
                        </li>
                        {/* <!--Copy and paste this cs-dropdown list item and replace any .cs-li with this cs-dropdown group to make a new dropdown and it will work--> */}
                        <li className="cs-li cs-dropdown" tabndex="0">
                            <span className="cs-li-link">
                                Tech Blogs
                                <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fdown.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                            </span>
                            <ul className="cs-drop-ul">
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Web Dev/SEO</a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Computers</a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Helpful Tools</a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Games</a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Music</a>
                                </li>
                                <li className="cs-drop-li">
                                    <a href="" className="cs-li-link cs-drop-link">Tirezapetide</a>
                                </li>
                            </ul>
                        </li>
                        <li className="cs-li">
                            <a href="" className="cs-li-link">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <a href="" className="cs-button-solid cs-nav-button">Contact Us</a>

        </div>
    </header>
  );
}
