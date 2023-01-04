import React, { Component } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    let resumeData = this.props.resumeData;

    if (this.props.resumeData) {
      var goal = resumeData.goals.map((goal)=>{

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--goals"
            date={goal.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            // SORT OUT THIS CLASS NAME TO BE DEPENDENT ON A VARIABLE
            icon={<i className={'fa fa-flag'}  style={{'font-size': '170%', 'margin-top':'27%', 'text-align':'center'}}></i>}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {goal.title}
            </h3>
            <h4
              className="vertical-timeline-element-company"
              style={{ textAlign: "left" }}
            >
              {goal.company}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {goal.subtitle}
            </h5>
          </VerticalTimelineElement>
        );
      });
    }
    const headerStyle = {
      'padding-top': '90px',
      'padding-bottom': '30px',
      'text-align':'center', 
      'color':'white'
    };

    return (
      <section id="Goals" className="Goals" style={{background:'#031114'}}>
            <h1 className="section-title" style={headerStyle}>
              Goals
            </h1>

        <div className="twelve columns">
          <div className="twelve columns">
            
          </div>
        </div>
        <div className="timeline">
          <VerticalTimeline>
            {goal}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fa fa-hourglass" style={{'font-size': '170%', 'margin-top':'27%', 'text-align':'center'}}/>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
