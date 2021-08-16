import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import DataProjects from "./DataProjects.js";
import Modal from "./ModalProjects";

const Projects = () => {
  const [selectedElement, setSelectedElement] = useState("");
  const handleClick = (element) => {
    console.log(element);
    setSelectedElement(element);
  };

  return (
    <div className="wraper-projects">
      <h1 id="PORTFOLIO" className="projects-title">
        PROJECTS
      </h1>
      ;
      <div className="projects-1">
        {DataProjects.map((element) => {
          return (
            <Card className="project-card" key={element.id}>
              <Card.Img variant="top" src={element.img} />

              <Card.Body>
                <Card.Title>{element.title} </Card.Title>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleClick(element)}
                >
                  Project Info
                </button>
                <Modal
                  title={selectedElement.projectName}
                  description={selectedElement.description}
                  tools={selectedElement.tools}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

//changes this modal to a new component.

export default Projects;
