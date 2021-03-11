import React from 'react'
import profile_picture from '../images/profile_picture.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <img className="profile-picture" src={profile_picture} />\
                <div className="about-text-area">
                    <h1>Hero Name: Caped Baldy</h1>
                    {/* This is from Wikipedia: https://onepunchman.fandom.com/wiki/Saitama */}
                    <p>Saitama (サイタマ, Saitama) is the main protagonist of the series and the titular One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle.</p>
                </div>
            </div>
        </section>
    )
}

export default About
