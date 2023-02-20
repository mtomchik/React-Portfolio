import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {personalData.socialLinks &&
                personalData.socialLinks.map((item) => {
                  return (
                    <li key={item.url}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
