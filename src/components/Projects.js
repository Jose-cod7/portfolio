import React from 'react';
import {Card, Button } from "react-bootstrap" ;
import Popup from 'reactjs-popup';
import DataProjects from "./DataProjects.js";



const Projects = (props) => {
     return (
    <div className="wraper-projects">
        <h1 className="projects-title">PROJECTS</h1>
        <div className="projects-1">  

            { DataProjects.map(element => { 

                            return (
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" key={element.id} src={element.img}  />
                            
                                <Card.Body>
                                    <Card.Title>{element.title}  </Card.Title>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Project Info
                                    </button>                        
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel" >{element.projectName}</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    {element.tools}
                                                </p>
                                                <p>
                                                    {element.description}
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Understood</button>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card> 
                    ); 
                })
            } 
    </div>
</div>
)
}

export default Projects;
