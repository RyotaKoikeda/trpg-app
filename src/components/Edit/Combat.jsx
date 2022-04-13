import React from "react";
import { AddButton, SkillTable } from "../UiKit";

const Combat = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">戦闘系技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.combat}
          setList={props.setCombat}
          length={11}
          initSwitch={props.initSwitch}
        />
        <AddButton list={props.combat} setList={props.setCombat} />
      </div>
    </section>
  );
};

export default Combat;
