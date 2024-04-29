import React from "react";

import minus from "../assets/img/minus.svg";
import plus from "../assets/img/plus.svg";

function CalcItem() {
  return (
    <div>
      <div className="calc__right_layer3">
        <div className="calc__right_layer3_el">Armchair Armchair</div>
        <div className="calc__right_layer3_el">0.8</div>
        <div className="calc__right_layer3_el calc__right_layer3_el_plus">
          <img src={minus} alt="" className="minus" />
          <div className="calc__right_layer3_el_plus_number">0</div>
          <img src={plus} alt="" className="plus" />
        </div>
      </div>
    </div>
  );
}

export default CalcItem;
