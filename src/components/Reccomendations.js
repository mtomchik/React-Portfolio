import React, { Component } from "react";
import recData from "../recData";
export default class Reccomendations extends Component {
  render() {
    let recData = this.props.recData;
    return (
      <section id="Reccomendations">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Reccomendations</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {recData.Reccomendations &&
                    recData.Reccomendations.map((item) => {
                      return (
                        <li key={item.description}>
                          <blockquote>
                            <p>{item.description}</p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
