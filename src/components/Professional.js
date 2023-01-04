import React, { Component } from 'react';
export default  class Professional extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="professional">
        <br></br>
        <br></br>
        <div className="row work">
          <div className="columns header-col">
              <h1><span>PROFESSIONAL EXPERIENCE/PROJECTS</span></h1>
          </div>

          <div className="columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.RoleName}</h3>
                        <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span> <em className="date">{item.StartDate} - {item.EndDate}</em></p>
                        <p className="descriptiveinfo">
                        {item.Description}
                        </p>
                      </div>

                  </div>

                )
              })
            }
          </div> 
        </div>
      </section>
    );
  }
}