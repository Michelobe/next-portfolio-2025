"use client";

import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    return (

    <header id="cs-navigation">
    {/* <!-- ============================================ -->
    <!--                 Navigation                   -->
    <!-- ==================== https://www.codestitch.app/app/dashboard/stitches/758?nav=Top%20Dropdown ================ --> */}
        <div className="cs-container">
            {/* <!--Nav Logo--> */}
            <Link href="/" className="cs-logo" aria-label="back to home">
                <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg" alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
            </Link>
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
                            <Link href="/" className="cs-li-link cs-active">
                                Home
                            </Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/about/MyBuild" className="cs-li-link">
                                About
                            </Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-li-link">
                                Technologies/Tools
                            </Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-li-link">
                                Projects
                            </Link>
                        </li>
                        {/* <!--Copy and paste this cs-dropdown list item and replace any .cs-li with this cs-dropdown group to make a new dropdown and it will work--> */}
                        <li className="cs-li cs-dropdown" tabndex="0">
                            <span className="cs-li-link">
                                Tech Blogs
                                <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fdown.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                            </span>
                            <ul className="cs-drop-ul">
                                <li className="cs-drop-li">
                                    <Link href="/" className="cs-li-link cs-drop-link">Web Dev/SEO</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link href="/about/NewComputer" className="cs-li-link cs-drop-link">Computers</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link href="/" className="cs-li-link cs-drop-link">Helpful Tools</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link href="/" className="cs-li-link cs-drop-link">Games</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link href="/" className="cs-li-link cs-drop-link">Music</Link>
                                </li>
                                <li className="cs-drop-li">
                                    <Link href="/" className="cs-li-link cs-drop-link">Tirezapetide</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-li-link">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Link href="/" className="cs-button-solid cs-nav-button">Contact Us</Link>

        </div>
    </header>
  );
}
