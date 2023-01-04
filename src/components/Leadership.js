import React, { Component } from 'react';
export default class Leadership extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="leadership">
          <div className="main-col">
            <h1><span>Leadership</span></h1>
            {
              resumeData.leadership && resumeData.leadership.map((item)=>{
                return(
                  <div className="row item">
                      <div className="roles">
                        <h3 >{item.RoleName}</h3>
                        <p className="descriptiveinfo" >
                        {item.Description}
                        </p>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </section>
    );
  }
}