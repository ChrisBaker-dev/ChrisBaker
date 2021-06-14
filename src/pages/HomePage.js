import React from 'react';

import ProfileImage from '../images/profile-img.jpg'

import Carousel from '../components/Carousel';

function HomePage(props) {

    return (
        <section className='index'>
            <img src={ProfileImage} className='profile-img'></img>
            <div className='profile-info'>
                <h3 className='profile-info-style'>Hello, I'm Christopher Baker.</h3>
                <h5 className='profile-info-style'>I am currently studying to become a full stack web developer</h5>
                <p className='profile-info-style'>css</p>
            </div>
            <div className='skills-left'>
                <p className='skills-style'>html</p>
                <p className='skills-style'>css</p>
                <p className='skills-style'>ruby</p>
                <p className='skills-style'>rails</p>
                <p className='skills-style'>node</p>
                <p className='skills-style'>git</p>
            </div>
            <div className='skills-right'>
                <p className='skills-style'>java</p>
                <p className='skills-style'>javascript</p>
                <p className='skills-style'>python</p>
                <p className='skills-style'>sql</p>
                <p className='skills-style'>react</p>
            </div>
        </section>

    );

}

export default HomePage;