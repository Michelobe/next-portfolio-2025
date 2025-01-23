"use client";

import './NewComputer.css';

export default function NewComputer() {
    return (
		<div>
			{/* <!-- ============================================ -->
			<!--                   Banner                     -->
			<!-- ============================================ --> */}

			<div id="banner-849">
				<div className="cs-container">
					<span className="cs-int-title">My Computer Build</span>
				</div>
				{/* <!--Background Image--> */}
				<picture className="cs-background" aria-hidden="true">
					{/* <!--Mobile Image--> */}
					<source media="(max-width: 600px)" srcSet="../../images/computerPage/my-computer-main-banner.jpg" />
					{/* <!--Tablet and above Image--> */}
					<source media="(min-width: 601px)" srcSet="../../images/computerPage/my-computer-main-banner.jpg" />
					<img loading="lazy" decoding="async" src="../../images/computerPage/my-computer-main-banner.jpg" alt="yoga" width="1280" height="568" />
				</picture>
				{/* <!--Change the svg path fill color to whatever color the section below is so you can match it and create the illusion it is all one piece--> */}
				<svg className="cs-wave" width="1920" height="179" viewBox="0 0 1920 179" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z" fill="white"/>
				</svg>
			</div>


			{/* <!-- ============================================ -->
			<!--                   Gallery                    -->
			<!-- ================== https://www.codestitch.app/app/dashboard/stitches/1152 ================= --> */}

			<section id="gallery-1152">
				<div className="cs-container">
					<div className="cs-content">
						<span className="cs-topper">The Build</span>
						<h2 className="cs-title">Start Finish</h2>
					</div>
					<div className="cs-gallery">
						{/* <!--Picture 1--> */}
						<picture className="cs-image">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/gallery-1-dirty-old-computer.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/gallery-1-dirty-old-computer.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/gallery-1-dirty-old-computer.jpg" alt="gallery" width="272" height="320" />
						</picture>
						{/* <!--Picture 2--> */}
						<picture className="cs-image">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/gallery-2-computer-taken-apart.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/gallery-2-computer-taken-apart.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/gallery-2-computer-taken-apart.jpg" alt="gallery" width="272" height="320" />
						</picture>
						{/* <!--Picture 3--> */}
						<picture className="cs-image">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/gallery-3-begin-motherboard-install.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/gallery-3-begin-motherboard-install.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/gallery-3-begin-motherboard-install.jpg" alt="gallery" width="272" height="320" />
						</picture>
						{/* <!--Picture 4--> */}
						<picture className="cs-image">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/gallery-4-graphics-card-comparison.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/gallery-4-graphics-card-comparison.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/gallery-4-graphics-card-comparison.jpg" alt="gallery" width="272" height="320" />
						</picture>
						{/* <!--Picture 5--> */}
						<picture className="cs-image">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/gallery-5-final-computer-assembly.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/gallery-5-final-computer-assembly.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/gallery-5-final-computer-assembly.jpg" alt="gallery" width="272" height="320" />
						</picture>
					</div>
				</div>
			</section>
											






			{/* <!-- ============================================ -->
			<!--                    Table                     -->
			<!-- ============= https://www.codestitch.app/app/dashboard/stitches/1669 =============== --> */}

			<section id="table-1669">
				<div className="cs-container">
					<div className="cs-content">
						<span className="cs-topper">Specs</span>
					</div>
					<table className="cs-table">
						<thead>
							<tr className="cs-color">
								<th className="cs-th">Bookkeeping & Accounting Services</th>
								<th className="cs-th">New Computer</th>
								<th className="cs-th">Watts</th>
								<th className="cs-th">Old Computer</th>
								<th className="cs-th">Watts</th>
							</tr>
						</thead>
						<tbody>
							<tr className="cs-tr">
								<td className="cs-td">Processor (CPU)</td>
								<td className="cs-td">AMD Ryzen 7 - 2700X</td>
								<td className="cs-td">105W</td>
								<td className="cs-td">Intel Core i5-8400</td>
								<td className="cs-td">65W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Motherboard</td>
								<td className="cs-td">ROG Strix B450-F</td>
								<td className="cs-td">133W</td>
								<td className="cs-td">B360M Bazooka</td>
								<td className="cs-td">95W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">RAM (Memory)</td>
								<td className="cs-td">DDR4 - 48GB</td>
								<td className="cs-td">N/A</td>
								<td className="cs-td">DDR4 - 48GB</td>
								<td className="cs-td">N/A</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Graphics Card (GPU)</td>
								<td className="cs-td">ASRock Arc A770 Phantom OC 16GB</td>
								<td className="cs-td">225W</td>
								<td className="cs-td">Radeon RX 580 Armor 4G</td>
								<td className="cs-td">185W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Storage (SSD/HDD)</td>
								<td className="cs-td">Samsung 990 EVO SSD - 2TB</td>
								<td className="cs-td">5.5W</td>
								<td className="cs-td">WD Blue 3.5" PC HDD - 1TB</td>
								<td className="cs-td">6.1W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Power Supply Unit (PSU)</td>
								<td className="cs-td">PowerSpec 750 BSM</td>
								<td className="cs-td">750W</td>
								<td className="cs-td">Channel Well GPT500S-A</td>
								<td className="cs-td">550W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Cooling System</td>
								<td className="cs-td">Be Quiet Pure Rock Slim 2</td>
								<td className="cs-td">130W</td>
								<td className="cs-td">Intel E97379-002</td>
								<td className="cs-td">95W</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>


			{/* <!-- ============================================ -->
			<!--             Side By Side Reverse             -->
			<!-- ============================================ --> */}

			<section id="RTsbsr-1219">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/amd-header-logo.svg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture ryzen">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/amd-ryzen-7-processor-front-back.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/amd-ryzen-7-processor-front-back.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/amd-ryzen-7-processor-front-back.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Processor (CPU)</span>
						<h2 className="cs-title">AMD Ryzen 7 2700X</h2>
						<p className="cs-text">I recently upgraded to the AMD Ryzen 7 2700X processor, moving up from the Intel Core i5-8400. The Ryzen 7 2700X, with its 8 cores, 16 threads, and 3.7 GHz base clock, has been a game-changer for multitasking and productivity tasks like video editing. Compared to the i5-8400, which has 6 cores, 6 threads, and a 2.8 GHz base clock, the Ryzen offers significantly better performance for demanding workloads. While the i5-8400 served me well for gaming with its integrated graphics and lower 65W TDP, the 2700X’s raw power and multithreading capabilities have made it the perfect choice for my current needs.</p>
						<table className="cs-table">
							<thead>
							<tr className="cs-color">
								<th className="cs-th">Feature</th>
								<th className="cs-th">AMD Ryzen 7 2700X</th>
								<th className="cs-th">Intel Core i5-8400</th>
							</tr>
							</thead>
							<tbody>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Cores / Threads</strong></td>
								<td className="cs-td">8 Cores / 16 Threads</td>
								<td className="cs-td">6 Cores / 6 Threads</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Base / Boost Clock</strong></td>
								<td className="cs-td">3.7 GHz / 4.3 GHz</td>
								<td className="cs-td">2.8 GHz / 4.0 GHz</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Multithreading</strong></td>
								<td className="cs-td">Yes (Simultaneous Multithreading)</td>
								<td className="cs-td">No</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>TDP</strong></td>
								<td className="cs-td">105W</td>
								<td className="cs-td">65W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Integrated Graphics</strong></td>
								<td className="cs-td">No</td>
								<td className="cs-td">Intel UHD 630</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Performance</strong></td>
								<td className="cs-td">Best for multitasking & productivity</td>
								<td className="cs-td">Great for gaming</td>
							</tr>
							</tbody>
						</table>
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--                 Side By Side                 -->
			<!-- ================ https://www.codestitch.app/app/dashboard/stitches/1219 ================= --> */}

			<section id="RTsbs-1219">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/republic-of-gamers-logo-thumbnail-v2.jpg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/rog-strix-b450-f-kgaming-motherboard.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/rog-strix-b450-f-kgaming-motherboard.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/rog-strix-b450-f-kgaming-motherboard.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Motherboard</span>
						<h2 className="cs-title">ROG Strix B450-F Gaming</h2>
						<p className="cs-text">Upgrading to the ROG Strix B450-F motherboard has been a game-changer for my build. Compared to the B360M Bazooka, which is more suited for budget-friendly Intel systems, the ROG Strix B450-F offers everything I need for a high-performance AMD setup. With support for Ryzen processors, overclocking capabilities, and an ATX form factor that provides plenty of room for expansion, it’s perfect for my needs. Features like dual M.2 slots, robust VRM cooling, and customizable RGB lighting through ASUS Aura Sync add both performance and style. This upgrade has taken my system to the next level, ensuring it’s ready for anything I throw at it.</p>
						<table className="cs-table">
							<thead>
							<tr className="cs-color">
								<th className="cs-th">Feature</th>
								<th className="cs-th">ROG Strix B450-F</th>
								<th className="cs-th">B360M Bazooka</th>
							</tr>
							</thead>
							<tbody>
							<tr className="cs-tr">
								<td className="cs-td">Platform</td>
								<td className="cs-td">AMD (Ryzen 1st-3rd Gen, AM4 socket)</td>
								<td className="cs-td">Intel (8th/9th Gen, LGA 1151 socket)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Chipset</td>
								<td className="cs-td">B450 (Supports overclocking)</td>
								<td className="cs-td">B360 (No overclocking)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Form Factor</td>
								<td className="cs-td">ATX (Full-sized)</td>
								<td className="cs-td">Micro-ATX (Compact)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Memory Support</td>
								<td className="cs-td">DDR4 up to 4400 MHz (OC)</td>
								<td className="cs-td">DDR4 up to 2666 MHz</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Expansion Slots</td>
								<td className="cs-td">Dual M.2, PCIe 4.0 (with BIOS update)</td>
								<td className="cs-td">Single M.2, PCIe 3.0</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Cooling</td>
								<td className="cs-td">Enhanced VRM and heatsinks</td>
								<td className="cs-td">Basic VRM design</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">RGB</td>
								<td className="cs-td">ASUS Aura Sync</td>
								<td className="cs-td">Mystic Light (limited)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Ideal For</td>
								<td className="cs-td">High-performance AMD gaming builds</td>
								<td className="cs-td">Budget-friendly Intel systems</td>
							</tr>
							</tbody>
						</table>
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>





			{/* <!-- ============================================ -->
			<!--             Side By Side Reverse             -->
			<!-- ============================================ --> */}

			<section id="RTsbsr-1219">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/amd-header-logo.svg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture ryzen">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/computer-ram-four-sticks.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/computer-ram-four-sticks.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/computer-ram-four-sticks.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">RAM (Memory)</span>
						<h2 className="cs-title">16GB Teamgroup T-Force Vulcan X 2</h2>
						<h2 className="cs-title">8GB PNY XLR8 Gaming X 2</h2>
						<p className="cs-text">I’ve got 2 - 16GB sticks of Teamgroup T-Force Vulcan and 2 - 8GB sticks of PNY XLR8 Gaming DDR4 RAM in my system, for a total of 48GB of RAM across four sticks. The T-Force Vulcan typically runs at speeds between 2666MHz and 3600MHz, offering solid overclocking potential and low latency, while the XLR8 Gaming runs between 2400MHz and 3200MHz, prioritizing stability. Both have heat spreaders for cooling, with the T-Force featuring a sleeker design. Since the RAM sticks are mixed, they run at the speed and timings of the slower module unless adjusted in the BIOS. Dual-channel placement ensures the best performance from this setup.</p>
						<table className="cs-table">
							<thead>
							<tr className="cs-color">
								<th className="cs-th">Specification</th>
								<th className="cs-th">Teamgroup T-Force Vulcan</th>
								<th className="cs-th">PNY XLR8 Gaming</th>
							</tr>
							</thead>
							<tbody>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Quantity</strong></td>
								<td className="cs-td">2 sticks (16GB each)</td>
								<td className="cs-td">2 sticks (8GB each)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Total Capacity</strong></td>
								<td className="cs-td">32GB</td>
								<td className="cs-td">16GB</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Frequency Range</strong></td>
								<td className="cs-td">2666MHz - 3600MHz</td>
								<td className="cs-td">2400MHz - 3200MHz</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Overclocking Potential</strong></td>
								<td className="cs-td">High</td>
								<td className="cs-td">Moderate</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Heat Spreader</strong></td>
								<td className="cs-td">Yes (sleek design)</td>
								<td className="cs-td">Yes (basic design)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td"><strong>Primary Use Case</strong></td>
								<td className="cs-td">High-performance, gaming, multitasking</td>
								<td className="cs-td">Gaming, stability</td>
							</tr>
							</tbody>
						</table>              
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--                 Side By Side                 -->
			<!-- ================ https://www.codestitch.app/app/dashboard/stitches/1219 ================= --> */}

			<section id="RTsbs-1219-graph">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/intel-arc-logo.jpg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/asrock-intel-arc-a770-phantom-gaming-16gb-oc-side-angle.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/asrock-intel-arc-a770-phantom-gaming-16gb-oc-side-angle.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/asrock-intel-arc-a770-phantom-gaming-16gb-oc-side-angle.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Graphics Card (GPU)</span>
						<h2 className="cs-title">ASRock Arc A770 Phantom OC 16GB</h2>
						<p className="cs-text">I upgraded from the Radeon RX 580 Armor 4G to the Intel ARC A770 Phantom OC 16GB for a significant boost in performance and features. The A770 offers 16GB of GDDR6 memory, advanced ray tracing support, and AV1 encoding, making it ideal for 1440p gaming and modern workflows. In comparison, the RX 580, with its 4GB of GDDR5 memory and older Polaris architecture, was sufficient for 1080p gaming and less demanding tasks but lacked the power and features to handle today’s requirements. The upgrade has greatly improved my system’s capability for gaming and creative tasks.</p>
						<table className="cs-table">
							<thead>
							<tr className="cs-color">
								<th className="cs-th">Feature</th>
								<th className="cs-th">Intel ARC A770 Phantom OC 16GB</th>
								<th className="cs-th">Radeon RX 580 Armor 4G</th>
							</tr>
							</thead>
							<tbody>
							<tr className="cs-tr">
								<td className="cs-td">Release Year</td>
								<td className="cs-td">2022</td>
								<td className="cs-td">2017</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Architecture</td>
								<td className="cs-td">Xe-HPG (Alchemist)</td>
								<td className="cs-td">Polaris (GCN)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">VRAM</td>
								<td className="cs-td">16GB GDDR6</td>
								<td className="cs-td">4GB GDDR5</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Memory Bandwidth</td>
								<td className="cs-td">560 GB/s</td>
								<td className="cs-td">~256 GB/s</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Ray Tracing</td>
								<td className="cs-td">Supported</td>
								<td className="cs-td">Not Supported</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">AV1 Encoding</td>
								<td className="cs-td">Supported</td>
								<td className="cs-td">Not Supported</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Core Count</td>
								<td className="cs-td">4096 Xe Cores</td>
								<td className="cs-td">2304 Stream Processors</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Clock Speed (Boost)</td>
								<td className="cs-td">~2400 MHz</td>
								<td className="cs-td">~1366 MHz</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">TDP (Power Draw)</td>
								<td className="cs-td">225W</td>
								<td className="cs-td">185W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Recommended PSU</td>
								<td className="cs-td">650W+</td>
								<td className="cs-td">500W+</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Target Resolution</td>
								<td className="cs-td">1440p, decent for 4K</td>
								<td className="cs-td">1080p</td>
							</tr>
							</tbody>
						</table>              
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--             Side By Side Reverse             -->
			<!-- ============================================ --> */}

			<section id="RTsbsr-1219">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/samsung-logo.jpg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture ryzen">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Storage (SSD/HDD)</span>
						<h2 className="cs-title">Samsung 990 EVO SSD</h2>
						<p className="cs-text">When I upgraded to the 2TB Samsung 990 EVO SSD, it felt like stepping into the future. My old 1TB HDD served me well, but it was like relying on an old bicycle when I could have been driving a race car. The SSD is blazing fast, loading everything in seconds, while the HDD used to take its time, with its spinning platters and clicking noises. The best part? No more waiting around for things to load or dealing with the occasional lag—this SSD makes everything silent, smooth, and lightning-fast. It’s more durable, energy-efficient, and has double the storage, which is a game-changer for my upgraded system. The HDD is still handy for backups, but for everyday performance, the SSD blows it out of the water.</p>
				<table className="cs-table">
					<thead>
					<tr className="cs-color">
					<th className="cs-th">Specification</th>
					<th className="cs-th">2TB Samsung 990 EVO SSD</th>
					<th className="cs-th">1TB HDD</th>
					</tr>
					</thead>
					<tbody>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Type</strong></td>
					<td className="cs-td">Solid State Drive (SSD)</td>
					<td className="cs-td">Hard Disk Drive (HDD)</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Storage Capacity</strong></td>
					<td className="cs-td">2TB</td>
					<td className="cs-td">1TB</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Read Speed</strong></td>
					<td className="cs-td">Up to 7,450 MB/s</td>
					<td className="cs-td">80–160 MB/s</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Write Speed</strong></td>
					<td className="cs-td">Up to 6,900 MB/s</td>
					<td className="cs-td">80–160 MB/s</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Access Time</strong></td>
					<td className="cs-td">Virtually instantaneous</td>
					<td className="cs-td">Slower, due to mechanical parts</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Durability</strong></td>
					<td className="cs-td">No moving parts, shock-resistant</td>
					<td className="cs-td">Susceptible to damage from movement</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Form Factor</strong></td>
					<td className="cs-td">Compact M.2 NVMe</td>
					<td className="cs-td">Larger (2.5" or 3.5")</td>
					</tr>
					</tbody>
				</table>
							
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--                 Side By Side                 -->
			<!-- ================ https://www.codestitch.app/app/dashboard/stitches/1219 ================= --> */}

			<section id="RTsbs-1219-graph">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/powerspec-750w-power-supply-unit-with-box.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/powerspec-750w-power-supply-unit-with-box.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/powerspec-750w-power-supply-unit-with-box.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Power Supply Unit (PSU)</span>
						<h2 className="cs-title">PowerSpec 750 BSM</h2>
						<p className="cs-text">Switching to the PowerSpec 750 BSM has been a noticeable upgrade. The Channel Well GPT500S-A was fine for a while, but it felt limited by its 500W output, and the non-modular cables were a hassle to manage. With the PowerSpec, I get 750W of power, which is a much better fit for my system now. The semi-modular design has made a huge difference—fewer cables cluttering up the case means better airflow and less mess. It’s just more reliable overall, and it gives me the confidence to push my setup without worrying about power constraints.</p>
				<table className="cs-table">
					<thead>
					<tr className="cs-color">
					<th className="cs-th">Specification</th>
					<th className="cs-th">PowerSpec 750 BSM</th>
					<th className="cs-th">Channel Well GPT500S-A</th>
					</tr>
					</thead>
					<tbody>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Type</strong></td>
					<td className="cs-td">Semi-modular PSU</td>
					<td className="cs-td">Non-modular PSU</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Wattage</strong></td>
					<td className="cs-td">750W</td>
					<td className="cs-td">500W</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Efficiency Rating</strong></td>
					<td className="cs-td">80+ Bronze</td>
					<td className="cs-td">80+ Standard</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Form Factor</strong></td>
					<td className="cs-td">ATX</td>
					<td className="cs-td">ATX</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Fan</strong></td>
					<td className="cs-td">120mm fan</td>
					<td className="cs-td">120mm fan</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Cables</strong></td>
					<td className="cs-td">Semi-modular, fewer cables for better management</td>
					<td className="cs-td">Non-modular, all cables are fixed</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Use Case</strong></td>
					<td className="cs-td">Mid to high-end systems requiring more power</td>
					<td className="cs-td">Basic to mid-range systems</td>
					</tr>
					</tbody>
					</table>
						
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--             Side By Side Reverse             -->
			<!-- ============================================ --> */}

			<section id="RTsbsr-1219">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/samsung-logo.jpg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture ryzen">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/samsung-990evo-2tb-ssd.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Cooling System</span>
						<h2 className="cs-title">Be Quiet Pure Rock Slim 2</h2>
						<p className="cs-text">When I upgraded to the 2TB Samsung 990 EVO SSD, it felt like stepping into the future. My old 1TB HDD served me well, but it was like relying on an old bicycle when I could have been driving a race car. The SSD is blazing fast, loading everything in seconds, while the HDD used to take its time, with its spinning platters and clicking noises. The best part? No more waiting around for things to load or dealing with the occasional lag—this SSD makes everything silent, smooth, and lightning-fast. It’s more durable, energy-efficient, and has double the storage, which is a game-changer for my upgraded system. The HDD is still handy for backups, but for everyday performance, the SSD blows it out of the water.</p>
				<table className="cs-table">
					<thead>
					<tr className="cs-color">
					<th className="cs-th">Specification</th>
					<th className="cs-th">2TB Samsung 990 EVO SSD</th>
					<th className="cs-th">1TB HDD</th>
					</tr>
					</thead>
					<tbody>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Type</strong></td>
					<td className="cs-td">Solid State Drive (SSD)</td>
					<td className="cs-td">Hard Disk Drive (HDD)</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Storage Capacity</strong></td>
					<td className="cs-td">2TB</td>
					<td className="cs-td">1TB</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Read Speed</strong></td>
					<td className="cs-td">Up to 7,450 MB/s</td>
					<td className="cs-td">80–160 MB/s</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Write Speed</strong></td>
					<td className="cs-td">Up to 6,900 MB/s</td>
					<td className="cs-td">80–160 MB/s</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Access Time</strong></td>
					<td className="cs-td">Virtually instantaneous</td>
					<td className="cs-td">Slower, due to mechanical parts</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Durability</strong></td>
					<td className="cs-td">No moving parts, shock-resistant</td>
					<td className="cs-td">Susceptible to damage from movement</td>
					</tr>
					<tr className="cs-tr">
					<td className="cs-td"><strong>Form Factor</strong></td>
					<td className="cs-td">Compact M.2 NVMe</td>
					<td className="cs-td">Larger (2.5" or 3.5")</td>
					</tr>
					</tbody>
				</table>
							
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>



			{/* <!-- ============================================ -->
			<!--                 Side By Side                 -->
			<!-- ================ https://www.codestitch.app/app/dashboard/stitches/1219 ================= --> */}

			<section id="RTsbs-1219-graph">
				<div className="cs-container">
					{/* <!-- Left Image Section --> */}
					<div className="cs-image-group">
						{/* <!--Floating Box--> */}
						<div className="cs-box">
							<img className="cs-icon" loading="lazy" decoding="async" src="../../images/computerPage/bequietgroot.jpg" alt="icon" width="521" height="60" aria-hidden="true" />
						</div>
						{/* <!--Big Background Image--> */}
						<picture className="cs-picture">
							<source media="(max-width: 600px)" srcSet="../../images/computerPage/Pure-Rock-Slim-2-Heroshot.jpg" />
							<source media="(min-width: 601px)" srcSet="../../images/computerPage/Pure-Rock-Slim-2-Heroshot.jpg" />
							<img loading="lazy" decoding="async" src="../../images/computerPage/Pure-Rock-Slim-2-Heroshot.jpg" alt="meeting" width="522" height="560" aria-hidden="true" />
						</picture>
						{/* <!--Swirl--> */}
						<img className="cs-graphic" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" />
					</div>
					{/* <!-- Right Content Section--> */}
					<div className="cs-content">
						<span className="cs-topper">Cooling System</span>
						<h2 className="cs-title">Be Quiet Pure Rock Slim 2</h2>
						<p className="cs-text">I upgraded from the Radeon RX 580 Armor 4G to the Intel ARC A770 Phantom OC 16GB for a significant boost in performance and features. The A770 offers 16GB of GDDR6 memory, advanced ray tracing support, and AV1 encoding, making it ideal for 1440p gaming and modern workflows. In comparison, the RX 580, with its 4GB of GDDR5 memory and older Polaris architecture, was sufficient for 1080p gaming and less demanding tasks but lacked the power and features to handle today’s requirements. The upgrade has greatly improved my system’s capability for gaming and creative tasks.</p>
						<table className="cs-table">
							<thead>
							<tr className="cs-color">
								<th className="cs-th">Feature</th>
								<th className="cs-th">Intel ARC A770 Phantom OC 16GB</th>
								<th className="cs-th">Radeon RX 580 Armor 4G</th>
							</tr>
							</thead>
							<tbody>
							<tr className="cs-tr">
								<td className="cs-td">Release Year</td>
								<td className="cs-td">2022</td>
								<td className="cs-td">2017</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Architecture</td>
								<td className="cs-td">Xe-HPG (Alchemist)</td>
								<td className="cs-td">Polaris (GCN)</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">VRAM</td>
								<td className="cs-td">16GB GDDR6</td>
								<td className="cs-td">4GB GDDR5</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Memory Bandwidth</td>
								<td className="cs-td">560 GB/s</td>
								<td className="cs-td">~256 GB/s</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Ray Tracing</td>
								<td className="cs-td">Supported</td>
								<td className="cs-td">Not Supported</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">AV1 Encoding</td>
								<td className="cs-td">Supported</td>
								<td className="cs-td">Not Supported</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Core Count</td>
								<td className="cs-td">4096 Xe Cores</td>
								<td className="cs-td">2304 Stream Processors</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Clock Speed (Boost)</td>
								<td className="cs-td">~2400 MHz</td>
								<td className="cs-td">~1366 MHz</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">TDP (Power Draw)</td>
								<td className="cs-td">225W</td>
								<td className="cs-td">185W</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Recommended PSU</td>
								<td className="cs-td">650W+</td>
								<td className="cs-td">500W+</td>
							</tr>
							<tr className="cs-tr">
								<td className="cs-td">Target Resolution</td>
								<td className="cs-td">1440p, decent for 4K</td>
								<td className="cs-td">1080p</td>
							</tr>
							</tbody>
						</table>              
						
						{/* <!-- <a className="cs-button-solid" aria-label="learn more about our programs" href="">Learn More</a> --> */}
					</div>
				</div>
			</section>
		</div> 
  	);
}
