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
              className="bgrid-thirds s-bgrid-half cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" key={item.name}>
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img
                            src={`../images/portfolio/${item.imgurl}.jpg`}
                            className="item-image"
                            alt="example image"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5 href={`htpps://${item.url}`}>{item.name}
                              <link href={`htpps://${item.url}`} /> </h5>
                              <p>{item.description}</p>
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
