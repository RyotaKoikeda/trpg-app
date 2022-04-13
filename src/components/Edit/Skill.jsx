import React, { useCallback, useEffect } from "react";
import styles from "./Skill.module.scss";
import { SelectBox, TextInput } from "../UiKit";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles({
  alert: {
    color: "#F0635F",
    marginLeft: 12,
    marginRight: -12,
  },
});

const Skill = (props) => {
  const classes = useStyles();

  const jobSelectList = [
    { id: 0, name: "" },
    { id: 1, name: "EDU✕20" },
    { id: 2, name: "EDU✕10+STR✕10" },
    { id: 3, name: "EDU✕10+CON✕10" },
    { id: 4, name: "EDU✕10+POW✕10" },
    { id: 5, name: "EDU✕10+DEX✕10" },
    { id: 6, name: "EDU✕10+APP✕10" },
    { id: 7, name: "EDU✕10+SIZ✕10" },
    { id: 8, name: "EDU✕10+INT✕10" },
  ];

  const inputJobSelect = useCallback(
    (event, id) => {
      props.setJobSelect(event);
    },
    [props.setJobSelect]
  );

  const inputInterestAdd = useCallback(
    (event) => {
      props.setInterestAdd(event.target.value);
    },
    [props.setInterestAdd]
  );

  const inputInterestCorrect = useCallback(
    (event) => {
      props.setInterestCorrect(event.target.value);
    },
    [props.setInterestCorrect]
  );

  const inputInitSwitch = (event) => {
    props.setInitSwitch(event.target.checked);
  };

  useEffect(() => {
    if (props.jobSelect === 1) {
      props.setJobCalc(props.total[7] * 20);
    } else if (props.jobSelect === 2) {
      props.setJobCalc(props.total[7] * 10 + props.total[0] * 10);
    } else if (props.jobSelect === 3) {
      props.setJobCalc(props.total[7] * 10 + props.total[1] * 10);
    } else if (props.jobSelect === 4) {
      props.setJobCalc(props.total[7] * 10 + props.total[2] * 10);
    } else if (props.jobSelect === 5) {
      props.setJobCalc(props.total[7] * 10 + props.total[3] * 10);
    } else if (props.jobSelect === 6) {
      props.setJobCalc(props.total[7] * 10 + props.total[4] * 10);
    } else if (props.jobSelect === 7) {
      props.setJobCalc(props.total[7] * 10 + props.total[5] * 10);
    } else if (props.jobSelect === 8) {
      props.setJobCalc(props.total[7] * 10 + props.total[6] * 10);
    } else {
      props.setJobCalc("0");
    }
  }, [props.jobSelect, props.total]);

  useEffect(() => {
    let jobTotal = 0;

    props.combat.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });

    props.threeMajor.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });

    props.major.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });

    props.action.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });

    props.nego.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });

    props.intell.map((value) => {
      jobTotal += parseInt(value.job, 10);
    });
    props.setJobCurrent(jobTotal);
  }, [
    props.combat,
    props.threeMajor,
    props.major,
    props.action,
    props.nego,
    props.intell,
  ]);

  useEffect(() => {
    let interestAdd = 0;
    let interestCorrect = 0;

    if (props.interestAdd) {
      interestAdd = parseInt(props.interestAdd, 10);
    } else {
      interestAdd = 0;
    }

    if (props.interestCorrect) {
      interestCorrect = parseInt(props.interestCorrect, 10);
    } else {
      interestCorrect = 0;
    }

    props.setInterestCalc(props.total[6] * 10 + interestAdd + interestCorrect);
  }, [props.interestAdd, props.interestCorrect, props.total]);

  useEffect(() => {
    let interestTotal = 0;

    props.combat.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.threeMajor.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.major.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.action.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.nego.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.intell.map((value) => {
      interestTotal += parseInt(value.interest, 10);
    });

    props.setInterestCurrent(interestTotal);
  }, [
    props.combat,
    props.threeMajor,
    props.major,
    props.action,
    props.nego,
    props.intell,
  ]);

  return (
    <section className={styles.skill}>
      <h3 className="section-title">技能</h3>
      <div className="section-container">
        <div className={styles.skill_wrap}>
          <div className={styles.skill_wrap_contents}>
            <div
              className={`${styles.skill_flex} ${
                props.jobFlag ? styles.skill_alert : ""
              }`}
            >
              {props.jobFlag && <ErrorOutlineIcon className={classes.alert} />}
              <div className={styles.skill__box}>
                <p className={styles.skill__box_left}>職業P</p>
                <div className={styles.skill__box_right}>
                  <p>
                    {props.jobCurrent} / {props.jobCalc}
                  </p>
                </div>
              </div>
              <div className={styles.skill__calc1}>
                <SelectBox
                  label={"能力値"}
                  required={false}
                  options={jobSelectList}
                  select={inputJobSelect}
                  value={props.jobSelect}
                />
              </div>
            </div>
            <div
              className={`${styles.skill_flex} ${
                props.interestFlag ? styles.skill_alert : ""
              }`}
            >
              {props.interestFlag && (
                <ErrorOutlineIcon className={classes.alert} />
              )}
              <div className={styles.skill__box}>
                <p className={styles.skill__box_left}>興味P</p>
                <div className={styles.skill__box_right}>
                  <p>
                    {props.interestCurrent} / {props.interestCalc}
                  </p>
                </div>
              </div>
              <div className={styles.skill__calc2}>
                <div className={styles.skill_flex}>
                  <p>追加</p>
                  <TextInput
                    fullWidth={true}
                    label={"追加"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.interestAdd}
                    type={"text"}
                    onChange={inputInterestAdd}
                  />
                </div>
                <div className={styles.skill_flex}>
                  <p>D補正</p>
                  <TextInput
                    fullWidth={true}
                    label={"D補正"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.interestCorrect}
                    type={"text"}
                    onChange={inputInterestCorrect}
                  />
                </div>
              </div>
            </div>
            <div className={styles.skill_init}>
              <FormControlLabel
                control={
                  <Switch
                    checked={props.initSwitch}
                    onChange={inputInitSwitch}
                  />
                }
                label="初期値の技能を非表示"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
