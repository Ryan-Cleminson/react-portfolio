import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="academic">
        <div className="row education">
          <div className="columns header-col">
            <h1><span>Academic projects and achievements</span></h1>
          </div>
          <div className="columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item">
                    <img className="four columns" alt="" src={item.Picture} style={{"height":"auto"}}></img>
                      <div className="eight columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p className="descriptiveinfo">{item.Achievements}</p>
                        <a href={item.link1}>{!(item.link1)?"":item.link1Name}</a>
                        <br/>
                        <a href={item.link2}>{!(item.link2)?"":item.link2Name}</a>
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