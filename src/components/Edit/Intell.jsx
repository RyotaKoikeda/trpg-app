import React from "react";
import { AddButton, SkillTable } from "../UiKit";

const Intell = (props) => {
  return (
    <section className="section-wrap">
      <h3 className="section-title">知識系技能</h3>
      <div className="section-container">
        <SkillTable
          list={props.intell}
          setList={props.setIntell}
          length={18}
          initSwitch={props.initSwitch}
        />
        <AddButton list={props.intell} setList={props.setIntell} />
      </div>
    </section>
  );
};

export default Intell;
