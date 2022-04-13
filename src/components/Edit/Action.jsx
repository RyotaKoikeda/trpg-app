import React from "react";
import { AddButton, SkillTable } from "../UiKit";

const Action = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">行動技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.action}
          setList={props.setAction}
          length={11}
          initSwitch={props.initSwitch}
        />
        <AddButton list={props.action} setList={props.setAction} />
      </div>
    </section>
  );
};

export default Action;
