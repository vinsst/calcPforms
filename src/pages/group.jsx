import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-01.svg";
import leftMonitor from "../assets/img/leftMonitor.png";
import checkBox from "../assets/img/checkbox.svg";
import arrowLeft from "../assets/img/arrow_left.svg";

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
              <div className="homeMain__right_formElement homeMain__right_formElement_steps">
                <div className="stepsList_circle stepsList_circle_1">1</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_2">2</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_3">3</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_4">4</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_5">5</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_6">6</div>
                <div className="stepsList_line"></div>
                <div className="stepsList_circle stepsList_circle_7">7</div>
              </div>
              <div className="homeMain__right_formElement homeMain__right_formElement_when">
                <span className="when_h1">When will You move?</span>
                <div className="when_twoTables">
                  <div className="when_table">
                    <div className="when_span">Services</div>
                    <div className="when_tableHalf"></div>
                  </div>
                  <div className="when_table">
                    <div className="when_span">Preferred move date</div>
                    <div className="when_tableHalf"></div>
                  </div>
                </div>
              </div>
              <div className="homeMain__right_formElement homeMain__right_formElement_storageBox">
                <div className="homeMain__right_formElement_storageBox_checkbox">
                  <img src={checkBox} alt="" />
                </div>
                <div className="homeMain__right_formElement_storageBox_span">
                  Need storage services
                </div>
              </div>
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
