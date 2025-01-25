"use client";

import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (      
        <footer id="footer-1390">
            {/* <!-- ============================================ -->
            <!--                  Footer                      -->
            <!-- ============== https://codestitch.app/app/dashboard/stitches/1390 ================== --> */}
            <div className="cs-container">
                <div className="cs-top">
                    <a aria-label="go back to home" className="cs-logo" href="">
                        <img className="cs-logo-img" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/agency-logo.svg" alt="logo" width="209" height="40" />
                    </a>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <Link href="/" className="cs-link">Home</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-link">About</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-link">Services</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-link">Blog</Link>
                        </li>
                        <li className="cs-li">
                            <Link href="/" className="cs-link">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="cs-bottom">
                    {/* <!--Social--> */}
                    <ul className="cs-social">
                        <li className="cs-social-li">
                            <Link href="/" className="cs-social-link" aria-label="facebook" target="_blank" rel="noopener">
                                <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
                            </Link>
                        </li>
                        <li className="cs-social-li">
                            <Link href="/" className="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
                                <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
                            </Link>
                        </li>
                        <li className="cs-social-li">
                            <Link href="/" className="cs-social-link" aria-label="instagram" target="_blank" rel="noopener">
                                <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
                            </Link>
                        </li>
                        <li className="cs-social-li">
                            <Link href="/" className="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
                                <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
                            </Link>
                        </li>
                    </ul>
                    <span className="cs-copyright">
                        © Copyright 2023 - <Link href="/" className="cs-copyright-link">Stitch Agency</Link>
                    </span>
                    <div className="cs-flex">
                        <Link href="/" className="cs-copyright-link">Privacy Policy</Link>
                        <span className="cs-separater">|</span>
                        <Link href="/" className="cs-copyright-link">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
  );
}
