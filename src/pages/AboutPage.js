import React from 'react';

import ChrisFire from '../images/chrisFirefighter.jpeg';
import LeavingUSA from '../images/leaving-usa.jpeg';
import KnightedVentures from '../images/knighted-ventures.jpeg';
import ProfileImage from '../images/profile-img.jpg';
import Lax from '../images/lax.jpeg';

function AboutPage(props) {

    return (
        <main className="about-me-layout">
            <img className="profileImage" src={ProfileImage} alt="Profile Image" />
            <section className="topDescription">
            <h4>Where I am now.</h4>
            <p>
                Hello, I am Christopher Baker, a web developer student at Coder Academy's intensive program
                in Brisbane Queensland. I joined this program in order to further develop my software technical
                abilities, skills and I enjoy the challenge of an intensive program. Outside of software, I enjoy playing lacrosse,
                video games and helping out my community. Currently, I sit as the President of the Queensland Lacrosse Association,
                we oversee all of the Lacrosse development happening within Queensland, and I am a volunteer rural firefighter with the 
                Bellthorpe Rural Fire Brigade.
            </p>
            </section>
            <section className="aboutTimelineLeft">
            <div className="polaroid">
                <img
                className="polaroidImage"
                src={Lax}
                alt="chrisFirefighter"
                />
                <h5 className="polaroidDate"><b>2018 - Lacrosse water break</b></h5>
            </div>
            <p>
                I joined the UQ Lacrosse Club in 2016 as they were first forming. After the first season, I stepped up
                to become the Men's Head Coach and Vice President of the club. After two more years I became the President of the Club
                helped drive growth to until we were the largest lacrosse club in Queensland. In January of 2020, I became the
                President of the Queensland Lacrosse Association and I now help oversee all lacrosse development around Queensland.
            </p>
            </section>
            <section className="aboutTimelineRight">
            <div className="polaroid">
                <img
                className="polaroidImage"
                src={LeavingUSA}
                alt="chrisFirefighter"
                />
                <h5 className="polaroidDate"><b>Dec 2014 - Moving to Australia</b></h5>
            </div>
            <p>
                On December 24th, 2014 I moved to Australia as a dual citizen. I made this move to challenge myself as a person
                and direct more focus into my future within software. One of the toughest decisions I have made but one that I would 
                make again.
            </p>
            </section>
            <section className="aboutTimelineLeft">
            <div className="polaroid">
                <img
                className="polaroidImage"
                src={KnightedVentures}
                alt="chrisFirefighter"
                />
                <h5 className="polaroidDate"><b>Nov 2014 - Goodbye breakfast with Knighted Ventures</b></h5>
            </div>
            <p>
                I left my job as a Supervisor with Khighted Ventures in Petaluma California prior to moving to Australia.
                I had began my journey with KV two and a half years prior, being hired as a banker. I quickly took on leadership roles,
                before being promoted to Supervisor in a little over a year. At the time, I was the youngest Supervisor in the company.
                KV taught me many valuable lessons about leadership and identifying strengths within an individual. 
            </p>
            </section>
            <section className="aboutTimelineRight">
            <div className="polaroid">
                <img
                className="polaroidImage"
                src={ChrisFire}
                alt="chrisFirefighter"
                />
                <h5 className="polaroidDate"><b>May 2013 - Graduated Fire Academy</b></h5>
            </div>
            <p>
                In early 2019, I decided to enter into a fire academy after finishing pre-requisits as an Emergency Medical Technitian.
                This academy was an intesive program, 5 days a week from 8am - 5pm, and would teach me to be mentally disciplined in order to react in various situations.
                In May of 2019, I graduated from the Santa Rosa Junior College Fire Academy with distinctions as a Squad Leader.
                
            </p>
            </section>
        </main>

    );

}

export default AboutPage;