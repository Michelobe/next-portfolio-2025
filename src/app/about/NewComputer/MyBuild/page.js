"use client";

import Link from "next/link";
import Image from 'next/image';
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
					<Image loading="lazy" decoding="async" src="/images/myBuild/computer-build-banner.jpg" alt="pills" width="1280" height="568" aria-hidden="true" />
				</picture>
			</div>

			<div className='container'>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/old-computer-dusty.jpg" alt="meeting" width="640" height="296" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/computer-exploded-view.jpg" alt="meeting" width="640" height="296" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/new-computer-old-gpu.jpg" alt="meeting" width="640" height="296" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/new-computer-arc-a770-gpu-size-comparison.jpg" alt="meeting" width="640" height="296" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/new-computer-arc-a770-installed.jpg" alt="meeting" width="640" height="296" aria-hidden="true" />
				</Link>
				<Link href="/about/NewComputer">
					<Image loading="lazy" decoding="async" src="/images/myBuild/new-computer-build-complete.jpg" alt="meeting" width="640" height="648" aria-hidden="true" />
				</Link>
			</div>
		</>
  	);
}
