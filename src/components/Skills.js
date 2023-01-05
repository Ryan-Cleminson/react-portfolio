import React, { Component } from 'react';
export default  class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="skills">
        <br></br>
        <br></br>
        <div className="row skill">
          <div className="header-col">
            <h1 style={{color: "#FFFFFF"}}><span>Skills</span></h1>
          </div>
          <div className='cols'>
          <div className="main-col">

            <div className="six columns tech bars">
              <h2 style={{color: "#FFFFFF", "padding-bottom":"50px", 'textAlign':'center'}}><span>Technical</span></h2>
              <ul className="tech_skills">{
                
                resumeData.technicalskills && resumeData.technicalskills.map((item) => {
                  return(
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
          <div className="main-col">
            <div className="six columns trans bars">
              <h2 style={{color: "#FFFFFF", "padding-bottom":"50px", 'textAlign':'center'}}><span>Transferable</span></h2>
              <ul className="trans_skills">{
                resumeData.transferableskills && resumeData.transferableskills.map((item) => {
                  return(
                    <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
}