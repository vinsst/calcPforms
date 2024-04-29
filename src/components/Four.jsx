import React from "react";

import houseFull from "../assets/img/houseFull.svg";
import housePart from "../assets/img/housePart.svg";
import box from "../assets/img/box.svg";
import boxK from "../assets/img/boxK.svg";

function Four() {
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
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">5</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">6</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">7</div>
      </div>
      <div className="homeMain__right_formElement homeMain__right_formElement_when">
        <span className="when_h1">What are you moving?</span>
        <div className="when_twoTables">
          <div className="when_table">
            <div className="when_tableHalf when__tableHalf_four">
              <img
                src={houseFull}
                alt=""
                className="when__tableHalf_four_img"
              />
              <span className="when__tableHalf_four_span">
                Complete household
              </span>
            </div>
          </div>
          <div className="when_table">
            <div className="when_tableHalf when__tableHalf_four">
              <img
                src={housePart}
                alt=""
                className="when__tableHalf_four_img"
              />
              <span className="when__tableHalf_four_span">
                Part of household
              </span>
            </div>
          </div>
        </div>
        <div className="when_twoTables when__twoTables_four">
          <div className="when_table">
            <div className="when_tableHalf when__tableHalf_four">
              <img src={box} alt="" className="when__tableHalf_four_img" />
              <span className="when__tableHalf_four_span">Few Pieces</span>
            </div>
          </div>
          <div className="when_table">
            <div className="when_tableHalf when__tableHalf_four">
              <img src={boxK} alt="" className="when__tableHalf_four_img" />
              <span className="when__tableHalf_four_span">
                Some boxes or luggage
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
