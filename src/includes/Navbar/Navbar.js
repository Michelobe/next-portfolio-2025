"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
	useEffect(() => {
		// Add classes for mobile navigation toggling
		const CSbody = document.querySelector("body");
		const CSnavbarMenu = document.querySelector("#cs-navigation");
		const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
		const csUL = document.querySelector("#cs-expanded");

		if (CShamburgerMenu && CSnavbarMenu && CSbody && csUL) {
			// Hamburger menu toggle logic
			const toggleMenu = () => {
				CShamburgerMenu.classList.toggle("cs-active");
				CSnavbarMenu.classList.toggle("cs-active");
				CSbody.classList.toggle("cs-open");
				// Update aria-expanded value
				const csExpanded = csUL.getAttribute("aria-expanded");
				csUL.setAttribute("aria-expanded", csExpanded === "false" ? "true" : "false");
			};

			CShamburgerMenu.addEventListener("click", toggleMenu);

			// Dropdown menu logic
			const dropDowns = Array.from(
				document.querySelectorAll("#cs-navigation .cs-dropdown")
			);
			dropDowns.forEach((item) => {
				item.addEventListener("click", (e) => {
					// Prevent the event from propagating, so it doesn't trigger closing the menu
					e.stopPropagation();
					item.classList.toggle("cs-active");
				});
			});

			// Close the menu when any link (inside the dropdown) is clicked
			const links = Array.from(document.querySelectorAll('#cs-navigation .cs-li-link'));
			links.forEach((link) => {
				link.addEventListener('click', (e) => {
					// If the link is inside a dropdown, check if it's a regular link or a dropdown toggle
					const parentLi = e.target.closest('li');

					if (!parentLi.classList.contains('cs-dropdown')) {
						// Close the menu if it's a regular link
						CShamburgerMenu.classList.remove("cs-active");
						CSnavbarMenu.classList.remove("cs-active");
						CSbody.classList.remove("cs-open");
						csUL.setAttribute('aria-expanded', 'false');
					}
				});
			});

			// Clean up event listeners when the component unmounts
			return () => {
				CShamburgerMenu.removeEventListener("click", toggleMenu);
				dropDowns.forEach((item) => item.removeEventListener("click", () => { }));
				links.forEach((link) => link.removeEventListener("click", () => { }));
			};
		}
	}, []); // Empty dependency array ensures this only runs once on mount

	return (
		<header id="cs-navigation">
			<div className="cs-container">
				<Link href="/" className="cs-logo" aria-label="back to home">
					<img
						src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg"
						alt="logo"
						width="210"
						height="29"
						aria-hidden="true"
						decoding="async"
					/>
				</Link>
				<nav className="cs-nav" role="navigation">
					<button className="cs-toggle" aria-label="mobile menu toggle">
						<div className="cs-box" aria-hidden="true">
							<span className="cs-line cs-line1" aria-hidden="true"></span>
							<span className="cs-line cs-line2" aria-hidden="true"></span>
							<span className="cs-line cs-line3" aria-hidden="true"></span>
						</div>
					</button>
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
							<li className="cs-li cs-dropdown" tabIndex="0">
								<span className="cs-li-link">
									Tech Blogs
									<img
										className="cs-drop-icon"
										src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fdown.svg"
										alt="dropdown icon"
										width="15"
										height="15"
										decoding="async"
										aria-hidden="true"
									/>
								</span>
								<ul className="cs-drop-ul">
									<li className="cs-drop-li">
										<Link href="/" className="cs-li-link cs-drop-link">
											Web Dev/SEO
										</Link>
									</li>
									<li className="cs-drop-li">
										<Link href="/" className="cs-li-link cs-drop-link">
											Computers
										</Link>
									</li>
									<li className="cs-drop-li">
										<Link href="/" className="cs-li-link cs-drop-link">
											Helpful Tools
										</Link>
									</li>
									<li className="cs-drop-li">
										<Link href="/" className="cs-li-link cs-drop-link">
											Games
										</Link>
									</li>
									<li className="cs-drop-li">
										<Link href="/" className="cs-li-link cs-drop-link">
											Music
										</Link>
									</li>
									<li className="cs-drop-li">
										<Link href="/about/NewComputer" className="cs-li-link cs-drop-link">
											My Computer Build
										</Link>
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
				<Link href="/" className="cs-button-solid cs-nav-button">
					Contact Us
				</Link>
			</div>
		</header>
	);
}
