import React, {useState, useRef} from 'react'

import meteorBackground from '../images/achievements/meteor.jpg'
import borosBackground from '../images/achievements/boros.jpg'
import tournamentBackground from '../images/achievements/tournament.jpg'
import dragonsBackground from '../images/achievements/dragons.jpg'

function Achievements(props) {
    const [setActive, setActiveState] = useState("");
    const [expandAchievement, expandAchievementState] = useState("");

    function toggleAchievement(e) {
        setActiveState(setActive === "" ? "active" : "");
        expandAchievementState(
            setActive === "active" ? "width: 100vw, height: 100vh":  "");
        console.log("Hello")
    }

    return (
        <section id="achievements">
            <div className="achievements-container">
                <div className="achievements-content">
                    <h1>Achievements</h1>
                    <div class="cards">
                        <div class="card" style={{backgroundImage: `url(${meteorBackground})`}} data-type="meteor" onClick={toggleAchievement}>
                            <h2>Meteor</h2>
                        </div>
                        <div class="card" style={{backgroundImage: `url(${borosBackground})`}} data-type="boros" onClick={toggleAchievement}>
                            <h2>Boros</h2>
                        </div>
                    </div>
                    <div className="cards">
                        <div class="card" style={{backgroundImage: `url(${tournamentBackground})`}} data-type="tournament" onClick={toggleAchievement}>
                            <h2>Tournament</h2>
                        </div>
                        <div class="card" style={{backgroundImage: `url(${dragonsBackground})`}} data-type="dragons" onClick={toggleAchievement}>
                            <h2>Dragons</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
