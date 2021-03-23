import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      return (
         <React.Fragment>
            <section id="home">
               <header>
                  <div className="banner-text">
                     <h1 className="responsive-headline">Justin Mabutas</h1>
                     <hr />
                     <h3>
                        CSULB Computer Science Graduate<br />
                        Currently searching for Software Developer Roles
                     </h3>
                  </div>

                  <p className="scrolldown">
                     <a className="smoothscroll" href="#about"><i class="glyphicon glyphicon-chevron-down"></i></a>
                  </p>

               </header>
            </section>
         </React.Fragment>
      );
   }
}