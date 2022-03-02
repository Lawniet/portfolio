import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Icon } from "@iconify/react";
import ContactUs from "./Form";

class FormContact extends Component {
   /* constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
       handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Uma dissertação foi enviada: ' + this.state.value);
        event.preventDefault();
      } */
      
      render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
          }
        return (
            <section id="contact">
                <div className="col-md-12">
                    <h1 style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="polaroid">
                        <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <ContactUs/>
                  </div>
                </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        );
      }
}

export default FormContact;