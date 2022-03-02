import React, { Component } from "react";
//import Typical from "react-typical";
import Switch from "react-switch";
//import {  Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu, 
  NavBtn
} from './StyledElements';
  

class Navbar extends Component {

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    return (
        <>
      <Nav id="navbar">
        <Bars />
  
        <NavMenu className="col-md-12" style={{ color: 'orange' }}>
        <NavLink  activeStyle={{ color: 'black' }}>
            <a href="#home">Home</a>
          </NavLink>
          <NavLink >
            <a href="#about">About</a>
          </NavLink>
          <NavLink  >
          <a href="#resume">Experience</a>
          </NavLink>
          <NavLink>
          <a href="#portfolio">Projects</a>
          </NavLink>
          <NavLink>
          <a href="#skills">Skills</a>
          </NavLink>
          <NavLink>
          <a href="#contact">Contact</a>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        <a href=" " data-for='mode' data-tip='Switch to '>
            <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#F7F7F7"
            onColor="#000000"
            className="react-switch mx-auto"
            width={45}
            height={20}
            uncheckedIcon={
                <span
                className="iconify"
                data-icon="bi:brightness-high-fill"
                data-inline="false"
                style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "3px",
                    color: "#353239",
                }}
                ></span>
            }
            checkedIcon={
                <span
                className="iconify"
                data-icon="bi:brightness-high"
                data-inline="false"
                style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "2px",
                    color: "#fff",
                }}
                ></span>
            }
            id="icon-switch"
            />
            </a>
            <ReactTooltip id="mode" place="left" type="dark" effect="solid" getContent={(dataTip) => `${dataTip} ${document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"} mode`}/>
        </NavBtn>
      </Nav>
    </>
    );
  }
}

export default Navbar;