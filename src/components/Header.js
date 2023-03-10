import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About Me</a></li>
               <li><a className="smoothscroll" href="#academic">Academic projects and experiences</a></li>
               <li><a className="smoothscroll" href="#skills">Skills</a></li>
               <li><a className="smoothscroll" href="#professional">Professional Experience</a></li>
               <li><a className="smoothscroll" href="#leadership">Leadership</a></li>
               <li><a className="smoothscroll" href="#teamwork_and_service">Teamwork and service</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.Description}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} ><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}