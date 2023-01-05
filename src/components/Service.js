import React, { Component } from 'react';
export default class Service extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const itemStyles = {
      display: 'block',
	    margin: '5% auto 5% auto',
	    padding: '10px 10px 5px',
	    'text-align': 'center',
      boxShadow: '0px 2px 5px #000',
    };
    const imgStyles = {
      'padding-bottom':'10px',
	    'max-height':"300px",
    };
    return (
      <section id="teamwork_and_service">
        <div  className="row teamwork_and_service">
          <div className="header-col">
            <h1><span>teamwork and service</span></h1>
          </div>
          <div className="main-col">
            {
              resumeData.teamwork_and_service && resumeData.teamwork_and_service.map((item)=>{
                return(
                  <div className="item">
                      <div style={itemStyles} className="roles">
                        <img alt="" src={item.img} style={imgStyles}></img>
                        <h3 >{item.RoleName}</h3>
                        <p className="descriptiveinfo" >{item.Description}</p>
                        <p className="info" >{item.handles}</p>
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