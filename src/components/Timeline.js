import React from 'react'
import {ReactComponent as WorkIcon} from "/home/pepe/my-portfolio/src/images/work.svg";
import {ReactComponent as SchoolIcon} from "/home/pepe/my-portfolio/src/images/school.svg";
import DatatimeLine from "./DataTimeline.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; //Timeline plugin
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
    let workIconStyles = {background: "#D4873E"};
    let schoolIconStyles = {background: "#364AF1"};

    return (
        <div className="timeline-body">
            <h1 className="title">Timeline</h1>
            <VerticalTimeline>
                {
                   DatatimeLine.map(element => {
                       let isWorkIcon = element.icon === "work";
                       let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

                       return (
                            <VerticalTimelineElement  key= {element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={ isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}>
                                <h3 className="vertical-timeline-element-title"> {element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>
                                 {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}href="/">{element.buttonText}</a>)}
                            </VerticalTimelineElement>
                       )
                   })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;