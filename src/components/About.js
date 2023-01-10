import React, { Component } from 'react';
export default class About extends Component {
   render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
               <a href={'resume/Ryan Cleminson Resume.pdf'}>
                  <button>Download Resume</button>
               </a>
            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               {/* <h5 style={{color:"#fff"}}>My Present</h5> */}
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               {/* <h5 style={{color:"#fff"}}>My Past</h5> */}
               <p>
               {
                 resumeData.aboutme2
               }
               </p>
               {/* <h5 style={{color:"#fff"}}>My Future</h5> */}
               <p>
               {
                 resumeData.aboutme3
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       					<span>{resumeData.contact}</span>
                     <br></br>
       				   <span>{resumeData.address}</span>
                     <br></br>
                     <span>{resumeData.website}</span>
       				</p>
                  
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
  }
}