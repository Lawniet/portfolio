import React, { Component } from "react";
import ReactLogo from "./ReactLogo";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                 &copy; 2022 {" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"} -  Powered by&nbsp;<ReactLogo />&nbsp;| Some rights reserved. 
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;