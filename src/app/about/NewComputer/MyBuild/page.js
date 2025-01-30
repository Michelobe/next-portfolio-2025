"use client";

import Link from "next/link";
import './MyBuild.css';

export default function MyBuild() {
    return (
		<>
			{/* <!-- ============================================ -->
			<!--                   Banner                     -->
			<!-- ============================================ --> */}

			<div id="banner-712">
				<div className="cs-container">
					<span className="cs-int-title">Computer Gallery</span>
				</div>
				{/* <!--Background Image--> */}
				<picture className="cs-background">
					{/* <!--Mobile Image--> */}
					<source media="(max-width: 600px)" srcSet="/images/myBuild/computer-build-banner.jpg" />
					{/* <!--Tablet and above Image--> */}
					<source media="(min-width: 601px)" srcSet="/images/myBuild/computer-build-banner.jpg" />
					<img loading="lazy" decoding="async" src="/images/myBuild/computer-build-banner.jpg" alt="pills" width="1280" height="568" aria-hidden="true" />
				</picture>
			</div>

			<div className='container'>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241128_105614.jpg" alt="meeting" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241128_114024.jpg" alt="meeting" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241128_130847.jpg" alt="meeting" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241214_172531.jpg" alt="meeting" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241215_142804.jpg" alt="meeting" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<img loading="lazy" decoding="async" src="/images/myBuild/20241216_180049.jpg" alt="meeting" aria-hidden="true" />
				</Link>
			</div>
		</>
  	);
}
