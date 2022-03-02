import React, { Component } from "react";
import {FaChevronUp} from 'react-icons/fa';
import ReactTooltip from "react-tooltip";

  class TopButton extends Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }

    render () {
        return  <button className='scroll' id="totop" data-for='mode' data-tip='Back to top'
                  onClick={ () => { this.scrollToTop(); }}>
                      
                        <span className='arrow-up' id="totoparrow">
                          <FaChevronUp />
                        </span>
                        <ReactTooltip id="mode" place="left" type="dark" effect="solid" getContent={(dataTip) => `${dataTip}`}/>
                    </button>;
                
     }
  } 

  export default TopButton;