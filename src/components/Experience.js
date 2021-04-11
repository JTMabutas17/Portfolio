import React, { Component } from 'react';
export default class Experience extends Component {
   render() {
      return (
         <section id="experience">
            <h1 className="experience-header">Experience</h1>
            <div className="experience-container">
               <img className="experience-picture" src="images/experience/experience-1.jpg" />
               <div className="experience-text-area">
                  <h2>Computer Science Graduate from CSU, Long Beach</h2>
                  <p>Relevant courses: Computer Security Principles, Data Structures and Algorithms, Computer Architecture, Operating Systems, Object Oriented Programming, Mobile App Development, Artificial Intelligence, Database Fundamentals, Distributed Systems, User Interface Design</p>
               </div>
            </div>
            <div className="experience-container">
               <img className="experience-picture" src="images/experience/experience-2.png" />
               <div className="experience-text-area">
                  <h2>Sorin Lab</h2>
                  <h5>System Administrator</h5>
                  <ul>
                     <li>Earned co-authorship on a biochemical research paper by writing and modifying data science scripts in Python and Mathematica for student researchers.</li>
                     <li>Prepared Linux desktops for lab usage by installing: Debian 9, research tools (Python libraries, Mathematica, OpenEye, etc.), and job-scheduling software.</li>
                     <li>Modified Shell, Python, and PHP scripts that monitor hard drive information for all desktops and servers to fit the needs of the professor.</li>
                  </ul>
               </div>
            </div>
            <div className="experience-container">
               <img className="experience-picture" src="images/experience/experience-3.png" />
               <div className="experience-text-area">
                  <h2>Long Beach Unified School District</h2>
                  <h5>Tech Aide & System Administrator</h5>
                  <ul>
                     <li>Created a spreadsheet to organize the school’s Chromebooks by including the important information of each device such as UID, location, status, etc. </li>
                     <li>Ensured minimal tech related issues occurred throughout the school by routinely checking device configurations and solving hardware and software issues.</li>
                     <li>Maintained the school’s website by updating the home page to reflect new events and removing outdated information.</li>
                  </ul>
               </div>
            </div>
         </section>
      );
   }
}