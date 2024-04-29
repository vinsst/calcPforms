import React from "react";

import checkBox from "../assets/img/checkbox.svg";

function One() {
  return (
    <div>
      <div className="homeMain__right_formElement homeMain__right_formElement_steps">
        <div className="stepsList_circle stepsList_circle_1">1</div>
        <div className="stepsList_line stepsList_line_1"></div>
        <div className="stepsList_circle stepsList_circle_2">2</div>
        <div className="stepsList_line stepsList_line_2"></div>
        <div className="stepsList_circle stepsList_circle_3">3</div>
        <div className="stepsList_line stepsList_line_3"></div>
        <div className="stepsList_circle stepsList_circle_4">4</div>
        <div className="stepsList_line stepsList_line_4"></div>
        <div className="stepsList_circle stepsList_circle_5">5</div>
        <div className="stepsList_line stepsList_line_5"></div>
        <div className="stepsList_circle stepsList_circle_6">6</div>
        <div className="stepsList_line stepsList_line_6"></div>
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
    </div>
  );
}

export default One;
