import React from "react";
import { SkillTable } from "../UiKit";

const ThreeMajor = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">三大探索技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.threeMajor}
          setList={props.setThreeMajor}
          length={2}
          initSwitch={props.initSwitch}
        />
      </div>
    </section>
  );
};

export default ThreeMajor;
