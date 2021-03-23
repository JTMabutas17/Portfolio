import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="about-container">
          <img className="profile-picture" src="images/profile-picture.jpeg" />
          <div className="about-text-area">
            <h1>About Me</h1>
            <p>
              Hi, I'm Justin. I'm currently pursuing my Bachelor's degree in Computer Science from California State University, Long Beach. I am an experienced System Administrator with a demonstrated history of working in the computer software industry. I have practical experience working in a research lab by documenting and rewriting data science scripts, and working as a team leader to oversee the software development cycle of an Android Application.
                My personal projects include web development with ReactJS, game development in Unreal Engine, and Android App development. Reach out to me if you'd like any advise on these topics. <br />
              This website will include information about person projects I have worked on and also links to my social media accounts.
            </p>
          </div>
        </div>
      </section>
    );
  }
}