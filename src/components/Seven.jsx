import React from "react";

function Seven() {
  return (
    <div>
      <div className="homeMain__right_formElement homeMain__right_formElement_steps">
        <div className="stepsList_circle stepsList__circle_painted">1</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">2</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">3</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">4</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">5</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">6</div>
        <div className="stepsList_line stepsList__circle_painted"></div>
        <div className="stepsList_circle stepsList__circle_painted">7</div>
      </div>
      <div className="homeMain__right_formElement homeMain__right_formElement_when">
        <span className="when_h1">Personal Information</span>
        <div className="homeMain__right_formElement">
          <div className="when_twoTables">
            <div className="when_table">
              <div className="when_span">First Name</div>
              <div className="when_tableHalf"></div>
            </div>
            <div className="when_table">
              <div className="when_span">Last Name</div>
              <div className="when_tableHalf"></div>
            </div>
          </div>
          <div className="when_twoTables when__twoTables_second">
            <div className="when_table">
              <div className="when_span">Email</div>
              <div className="when_tableHalf"></div>
            </div>
            <div className="when_table">
              <div className="when_span">Phone</div>
              <div className="when_tableHalf"></div>
            </div>
          </div>
        </div>

        <div className="homeMain__right_formElement_check_container">
          <div className="homeMain__right_formElement homeMain__right_formElement_check">
            <div className="homeMain__right_formElement_check_circle"></div>
            <span className="circle_span">Private Move</span>
          </div>
          <div className="homeMain__right_formElement homeMain__right_formElement_check">
            <div className="homeMain__right_formElement_check_circle"></div>
            <span className="circle_span">Relocation from work</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seven;
