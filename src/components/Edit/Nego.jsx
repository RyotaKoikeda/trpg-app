import React from "react";
import { AddButton, SkillTable } from "../UiKit";

const Nego = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">交渉系技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.nego}
          setList={props.setNego}
          length={5}
          initSwitch={props.initSwitch}
        />
        <AddButton list={props.nego} setList={props.setNego} />
      </div>
    </section>
  );
};

export default Nego;
