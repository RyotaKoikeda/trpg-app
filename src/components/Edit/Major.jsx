import React from "react";
import { AddButton, SkillTable } from "../UiKit";

const Major = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">探索技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.major}
          setList={props.setMajor}
          length={8}
          initSwitch={props.initSwitch}
        />
        <AddButton list={props.major} setList={props.setMajor} />
      </div>
    </section>
  );
};

export default Major;
