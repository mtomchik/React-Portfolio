import React, { Component } from "react";
import projectData from "../projectData";

export default class Porfolio extends Component {
  render() {
    let projectData = this.props.projectData;
    return (
      <section id="projects">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="projects-wrapper"
              className="bgrid-halves bgrid-halves cf"
            >
              {projectData.projects &&
                projectData.projects.map((item) => {
                  return (
                    <div className="columns projects-item" key={item.name}>
                      <div className="item-wrap">
                        <a href={`https://${item.url}`}>
                          <img
                            src={`./images/projects/${item.imgurl}.JPG`}
                            className="item-image"
                            alt={item.description}
                          />
                          <div className="overlay">
                            <div className="projects-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}, https://${item.url}</p>
                              <button href={`https://${item.url}`} />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
