"use client";
import Link from 'next/link';

import "./page.css";             

export default function Home() {

  	return (
		<div className="home">
			{/* <!-- ============================================ -->
			<!--             Side By Side Reverse             -->
			<!-- ================== https://www.codestitch.app/app/dashboard/stitches/76 =================== --> */}

			<section id="sbsr-76">
				<div className="cs-container">
					<div className="cs-wrapper">
						<picture className="cs-picture">
							<source media="(max-width: 600px)" srcSet="./images/michael-raiders-clothing.jpg" />
							<source media="(min-width: 601px)" srcSet="./images/michael-raiders-clothing.jpg" />
							<img loading="lazy" decoding="async" src="./images/michael-raiders-clothing.jpg" alt="body builder" width="500" height="552" aria-hidden="true" />
						</picture>
					</div>
					<div className="cs-content">
						<span className="cs-topper">Small Group Training</span>
						<h2 className="cs-title">Make your circle healthier together</h2>
						<p className="cs-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.
						</p>
						<a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a>
					</div>
				</div>
			</section>
										




			{/* <!-- ============================================ -->
			<!--                   Steps                      -->
			<!-- ================= https://codestitch.app/app/dashboard/stitches/1171 ====================== --> */}

			<section id="steps-1171">
				<div className="cs-container">
					<div className="cs-content">
						<span className="cs-topper">Our Work Process</span>
						<h2 className="cs-title">How To Get Started</h2>
						<p className="cs-text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa libero sint hic accusantium exercitationem, voluptatem officia quaerat velit quis ullam?
						</p>
					</div>
					<ul className="cs-card-group">
						<li className="cs-item">
							<picture className="cs-picture">
								<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/lightbulb.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
							</picture>
							<h3 className="cs-h3">About Me</h3>
							<p className="cs-item-p">
								Extensible for web iterate process before meta services impact with employee engagement strategies.
							</p>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/puzzle.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
							</picture>
							<h3 className="cs-h3">Web Tools, Technologies, & Tips</h3>
							<p className="cs-item-p">
								Favorite tools for different uses.
							</p>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/box.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
							</picture>
							<h3 className="cs-h3">Projects</h3>
							<p className="cs-item-p">
								Extensible for web iterate process before meta services impact with employee engagement strategies.
							</p>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/gear.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
							</picture>
							<h3 className="cs-h3">Interesting stuff</h3>
							<p className="cs-item-p">
								Playground for Videos, websites, and other interesting stuff.
							</p>
						</li>
					</ul>
				</div>
				{/* <!--Tire Screech--> */}
				<img className="cs-graphic" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/tire-mark.svg" alt="icon" width="840" height="357" loading="lazy" decoding="async" aria-hidden="true" />
			</section>





			{/* <!-- ============================================ -->
			<!--                   Services                   -->
			<!-- ================ https://www.codestitch.app/app/dashboard/stitches/1191 ==================== -->         */}

			<section id="services-1191">
				<div className="cs-container">
					<div className="cs-content">
						<span className="cs-topper">Other services</span>
						<h2 className="cs-title">We Provide Quality Auto Repair Services</h2>
						<p className="cs-text">
							Facilisis condimentum viverra scelerisque ac morbi sit sed. Turpis sagittis in blandit eleifend tortor ullamcorper eu placerat. Et orci felis volutpat, etiam vitae egestas volutpat pulvinar.
						</p>
					</div>
					{/* <!--Placed in a wrapper div so we can position the car absolutely inside the container to be centered in the middle of the list on desktop--> */}
					<div className="cs-wrapper">
						{/* <!--Car--> */}
						<picture className="cs-image">
							{/* <!--Mobile Image--> */}
							<source media="(max-width: 600px)" srcSet="./images/08-acura-rdx-transparent-rdx-v2.png" />
							{/* <!--Tablet and above Image--> */}
							<source media="(min-width: 601px)" srcSet="./images/08-acura-rdx-transparent-rdx-v2.png" />
							<img loading="lazy" decoding="async" src="./images/08-acura-rdx-transparent-rdx-v2.png" alt="car" width="510" height="193" aria-hidden="true" />
						</picture>
						<ul className="cs-card-group">
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon"
											src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/engineering%201%20red.svg"
											loading="lazy" decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<Link href="/about/NewComputer">
									<div className="cs-text-group">
										<h3 className="cs-h3">Computer Build</h3>
										<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</Link>
							</li>
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/brake-red.svg"
											loading="lazy" decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<div className="cs-text-group">
									<h3 className="cs-h3">The Excel Files</h3>
									<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</li>
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon"
											src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/air-conditioner-red.svg"
											loading="lazy" decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<div className="cs-text-group">
									<h3 className="cs-h3">Magento</h3>
									<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</li>
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon"
											src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/motor%201%20red.svg" loading="lazy"
											decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<div className="cs-text-group">
									<h3 className="cs-h3">CES 2025</h3>
									<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</li>
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon"
											src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/alloy-wheel-red.svg" loading="lazy"
											decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<div className="cs-text-group">
									<h3 className="cs-h3">Photoshop</h3>
									<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</li>
							<li className="cs-item">
								<picture className="cs-picture">
									<img className="cs-icon"
											src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/contamination-red.svg"
											loading="lazy" decoding="async" alt="icon" width="33" height="38" aria-hidden="true" />
								</picture>
								{/* <!-- Text Grouped For Flexbox--> */}
								<div className="cs-text-group">
									<h3 className="cs-h3">Emissions Repair</h3>
									<p className="cs-item-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</li>
						</ul>
					</div>
					<a href="#" className="cs-button-solid">Book Appointment</a>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--                   Blog                       -->
			<!-- =============== https://www.codestitch.app/app/dashboard/stitches/846 =================== --> */}

			<section id="blog-846">
				<div className="cs-container">
					<div className="cs-content">
						<span className="cs-topper">Blog</span>
						<h2 className="cs-title">Latest News & Articles</h2>
					</div>
					<ul className="cs-card-group">
						<li className="cs-item">
							<picture className="cs-picture">
								{/* <!--Mobile Image--> */}
								<source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy2.jpg" />
								{/* <!--Tablet and above Image--> */}
								<source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy2.jpg" />
								<img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy2.jpg" alt="therapy" width="369" height="290" />
							</picture>
							<div className="cs-item-content">
								<span className="cs-date">07 Sep, 2022</span>
								<h3 className="cs-h3">How Physical Therapy Can Help You Recover from Surgery</h3>
								<p className="cs-item-text">
									Physical therapy is often an important part of the recovery process for patients who have undergone surgery.
								</p>
								<a href="#" className="cs-link">
									Read More
									<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Forange-carrot-right.svg" alt="arrow right" width="20" height="20" loading="lazy" decoding="async" aria-hidden="true" />
								</a>
							</div>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								{/* <!--Mobile Image--> */}
								<source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy3.jpg" />
								{/* <!--Tablet and above Image--> */}
								<source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy3.jpg" />
								<img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy3.jpg" alt="therapy" width="369" height="290" />
							</picture>
							<div className="cs-item-content">
								<span className="cs-date">07 Sep, 2022</span>
								<h3 className="cs-h3">How Physical Therapy Can Help You Recover from Surgery</h3>
								<p className="cs-item-text">
									Physical therapy is often an important part of the recovery process for patients who have undergone surgery.
								</p>
								<a href="#" className="cs-link">
									Read More
									<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Forange-carrot-right.svg" alt="arrow right" width="20" height="20" loading="lazy" decoding="async" aria-hidden="true" />
								</a>
							</div>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								{/* <!--Mobile Image--> */}
								<source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" />
								{/* <!--Tablet and above Image--> */}
								<source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" />
								<img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" alt="therapy" width="369" height="290" />
							</picture>
							<div className="cs-item-content">
								<span className="cs-date">07 Sep, 2022</span>
								<h3 className="cs-h3">How Physical Therapy Can Help You Recover from Surgery</h3>
								<p className="cs-item-text">
									Physical therapy is often an important part of the recovery process for patients who have undergone surgery.
								</p>
								<a href="#" className="cs-link">
									Read More
									<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Forange-carrot-right.svg" alt="arrow right" width="20" height="20" loading="lazy" decoding="async" aria-hidden="true" />
								</a>
							</div>
						</li>
						<li className="cs-item">
							<picture className="cs-picture">
								{/* <!--Mobile Image--> */}
								<source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" />
								{/* <!--Tablet and above Image--> */}
								<source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" />
								<img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Ftherapy.jpg" alt="therapy" width="369" height="290" />
							</picture>
							<div className="cs-item-content">
								<span className="cs-date">07 Sep, 2022</span>
								<h3 className="cs-h3">How Physical Therapy Can Help You Recover from Surgery</h3>
								<p className="cs-item-text">
									Physical therapy is often an important part of the recovery process for patients who have undergone surgery.
								</p>
								<a href="#" className="cs-link">
									Read More
									<img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Forange-carrot-right.svg" alt="arrow right" width="20" height="20" loading="lazy" decoding="async" aria-hidden="true" />
								</a>
							</div>
						</li>
					</ul>
					<a href="#" className="cs-button-solid">View All News</a>
				</div>
			</section>
		</div>
	);
}
