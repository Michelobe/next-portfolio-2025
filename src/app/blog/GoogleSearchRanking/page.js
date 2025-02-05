"use client";

import Image from 'next/image';
import './GoogleSearchRanking.css';

export default function GoogleSearchRanking() {
    return (
		<div className="googleRank_container">
            
            <h1>How Google Search ranking works</h1>

            <h3>An in-depth analysis of how Googles complex ranking system works and components like Twiddlers and NavBoost that influence search results.</h3>

            <h6>Mario Fischer on August 13, 2024 at 9:00 am | Reading time: 31 minutes</h6>
            
            <p>It should be clear to everyone that the Google documentation leak and the public documents from antitrust hearings do not really tell us exactly how the rankings work.</p>

            <p>The structure of organic search results is now so complex not least due to the use of machine learning that even the Google employees who work on the ranking algorithms say they can no longer explain why a hit is at one or two. We do not know the weighting of the many signals and the exact interplay.</p>

            <p>Nevertheless, it is important to familiarize yourself with the structure of the search engine to understand why well-optimized pages do not rank or, conversely, why seemingly short and non-optimized results sometimes appear at the top of the rankings. The most important aspect is that you need to broaden your view of what is really important.</p>

            <p>All the information available clearly shows that. Anyone who is even marginally involved with ranking should incorporate these findings into their own mindset. You will see your websites from a completely different point of view and incorporate additional metrics into your analyses, planning and decisions.</p>

            <p>To be honest, it is extremely difficult to draw a truly valid picture of the systems structure. The information on the web is quite different in its interpretation and sometimes differs in terms, although the same thing is meant. </p>

            <p>An example: The system responsible for building a SERP that optimizes space use is called Tangram. In some Google documents, however, it is also referred to as Tetris, which is probably a reference to the well-known game.</p>

            <p>Over weeks of detailed work, I have viewed, analyzed, structured, discarded and restructured almost 100 documents many times.</p>

            <p>This article is not intended to be exhaustive or strictly accurate. It represents my best effort, to the best of my knowledge and belief, and a bit of Inspector Columbos investigative spirit. The result is what you see here.</p>

            <figure>
                <Image src="/images/blog/GoogleRanking/A-graphical-overview-of-how-Google-ranking-works.jpg" width="1380" height="795" alt="Google Search Ranking Diagram" />
                <figcaption>A graphical overview of how Google ranking works, created by the author</figcaption>
            </figure>




		</div> 
  	);
}
