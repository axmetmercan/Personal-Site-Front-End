import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function ProjectCard(props) {
  

  return (
    <div
      style={{ maxWidth: "600px", minHeight: "250px" }}
      className="project-card m-3 d-none d-sm-block"
    >
      <ScrollAnimation animateIn="slide-in-left">
        <div
          className="d-flex flex-row border rounded-2 align-items-center card-color shadow border-5 p-2 "
          style={{ maxWidth: "600px", minHeight: "250px" }}
        >
          <div className="col-4  rounded-2 p-1  ">
            <img className="rounded-circle img-fluid"  src={props.project.project_picture}></img>
          </div>
          <div className="col-8  rounded-2 p-4">
            <div className="fs-3">{props.project.title}</div>
            <div>
              {props.project.description}
            </div>
            <div className="text-center">
              <a className="text btn btn-info text-decoration-none" target="_blank" href={props.project.referance_link}>
                Linkto
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
