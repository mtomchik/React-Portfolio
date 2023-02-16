import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-halves cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" key={item.name}>
                      <div className="item-wrap">
                        <a href={`https://${item.url}`} >
                          <img
                            src={`./images/portfolio/${item.imgurl}.JPG`}
                            className="item-image"
                            alt= {item.description}
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}
                              </h5>
                              <p>{item.description}</p>
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
