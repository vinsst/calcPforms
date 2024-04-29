import React from "react";

function Three() {
  return (
    <div>
      <div className="homeMain__right_formElement homeMain__right_formElement_steps">
        <div className="stepsList_circle stepsList__circle_painted">1</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">2</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">3</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">4</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">5</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">6</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">7</div>
      </div>
      <div className="homeMain__right_formElement homeMain__right_formElement_when">
        <span className="when_h1">Moving To</span>
        <div className="when_twoTables">
          <div className="when_table">
            <div className="when_span">Country</div>
            <div className="when_tableHalf"></div>
          </div>
          <div className="when_table">
            <div className="when_span">City</div>
            <div className="when_tableHalf"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Three;
