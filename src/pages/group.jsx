import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-01.svg";
import leftMonitor from "../assets/img/leftMonitor.png";
import arrowLeft from "../assets/img/arrow_left.svg";

import One from "../components/One.jsx";
import Two from "../components/Two.jsx";
import Three from "../components/Three.jsx";
import Four from "../components/Four.jsx";
import Five from "../components/Five.jsx";
import Six from "../components/Six.jsx";
import Seven from "../components/Seven.jsx";

function Group() {
  return (
    <body>
      <header class="homeHeader">
        <div class="homeHeader_container container">
          <div class="homeHeader_content content">
            <img src={logo} alt="" height="30px" />
          </div>
        </div>
      </header>
      <main className="homeMain">
        <div className="homeMain_left">
          <img src={leftMonitor} alt="" className="leftMonitor" />
        </div>
        <div className="homeMain_right">
          <div className="homeMain__right_container">
            <div className="homeMain__right_content">
              <div className="homeMain__right_formElement homeMain__right_formElement_h1">
                Request a Quote
              </div>
              <Seven />
              <div className="homeMain__right_formElement homeMain__right_formElement_backNext">
                <div className="homeMain__right_formElement_backNext_button">
                  <div className="back_button">
                    <img src={arrowLeft} alt="" className="back__button_arr" />
                    <span className="back__button_span">Back</span>
                  </div>
                </div>

                <div className="homeMain__right_formElement_backNext_button">
                  <div className="next_button">
                    <span className="next__button_span">Next</span>
                    <img src={arrowLeft} alt="" className="next__button_arr" />
                  </div>
                </div>
              </div>
              <div className="exit-request">
                <span>Exit / Request a call</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <footer class="homeFooter ">
        <div class="homeFooter_container">
          <div class="homeFooter_content content">
            <div class="homeFooter_block homeFooter__block_2">
              <span>© Copyright 2024 Logo. All rights reserved.</span>
            </div>
            <div class="homeFooter_block">Privacy Policy</div>
          </div>
          <div className="homeFooter_space"></div>
        </div>
      </footer> */}
    </body>
  );
}

export default Group;
