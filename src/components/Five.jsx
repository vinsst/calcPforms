import React from "react";

import search from "../assets/img/search.svg";
import arrUp from "../assets/img/arrUp.svg";
import family from "../assets/img/family.svg";
import familyNoFrame from "../assets/img/familyNoFrame.svg";
import CalcItem from "../components/CalcItem.jsx";

function Three() {
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
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">6</div>
        <div className="stepsList_line"></div>
        <div className="stepsList_circle">7</div>
      </div>
      <div className="homeMain__right_formElement homeMain__right_formElement_when">
        <span className="when_h1">What are you moving?</span>
        <div className="when_search">
          <span className="when__search_el">Search</span>
          <img src={search} alt="" className="when__search_el" />
        </div>
        <div className="calc_content">
          <div className="calc__left">
            <img
              src={arrUp}
              alt=""
              className="arrUp calc__left_el"
              height="40px"
            />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={family} alt="" className="family calc__left_el" />
            <img src={arrUp} alt="" className="arrDown" height="40px" />
          </div>
          <div className="calc__right">
            <div className="calc__right_layer1">
              <div className="calc__right_layer1_famRoom">
                <img src={familyNoFrame} alt="" className="familyNoFrame" />
                <span className="calc__right_layer1_famRoom_span">
                  Family Room
                </span>
              </div>
              <div className="calc__right_layer1_btn">
                <span>Didn't find an item?</span>
              </div>
            </div>
            <div className="calc__right_layer2">
              <div className="calc__right_layer2_1">Item</div>
              <div className="calc__right_layer2_2">Volume</div>
              <div className="calc__right_layer2_3">Amount</div>
            </div>
            <CalcItem />
            <CalcItem />
            <CalcItem />
            <CalcItem />
            <CalcItem />
          </div>
        </div>
        <div className="when_table_five">
          <div className="when_span">Describe what you’re Moving</div>
          <div className="when_tableHalf"></div>
        </div>
      </div>
    </div>
  );
}

export default Three;
