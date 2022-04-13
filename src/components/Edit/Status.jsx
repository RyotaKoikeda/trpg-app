import React, { useCallback, useEffect, useState } from "react";
import styles from "./Status.module.scss";
import { TextInput, SelectBox } from "../UiKit";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 1164,
  },
  headTitle: {
    width: "10%",
    padding: "3px 0",
    textAlign: "center",
  },
  headBody: {
    width: "6.4%",
    padding: "3px 0",
    textAlign: "center",
    borderLeft: "1px solid #fff",
  },
  cellTitle: {
    width: "10%",
    padding: "12px 0",
    background: "#ffcd83",
    textAlign: "center",
  },
  cellBody: {
    width: "6.4%",
    padding: "4px 6px",
    fontSize: 16,
    textAlign: "center",
    borderLeft: "1px solid #fff",
    background: "#ffcd83",
    "&>.MuiInputBase-input": {
      background: "#fff",
    },
  },
});

const Status = (props) => {
  const classes = useStyles();

  const [statusKey, setStatusKey] = useState(0),
    [changeLabel, setChangeLabel] = useState(""),
    [changeKey, setChangeKey] = useState(""),
    [changeValue, setChangeValue] = useState("");

  const statusName = [
    "STR",
    "CON",
    "POW",
    "DEX",
    "APP",
    "SIZ",
    "INT",
    "EDU",
    "HP",
    "MP",
    "SAN",
    "アイデア",
    "幸運",
    "知識",
  ];

  const skillSelect1 = [
    { id: 0, name: 0 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
    { id: 11, name: 11 },
    { id: 12, name: 12 },
    { id: 13, name: 13 },
    { id: 14, name: 14 },
    { id: 15, name: 15 },
    { id: 16, name: 16 },
    { id: 17, name: 17 },
    { id: 18, name: 18 },
  ];

  const skillSelect2 = [
    { id: 0, name: 0 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
    { id: 11, name: 11 },
    { id: 12, name: 12 },
    { id: 13, name: 13 },
    { id: 14, name: 14 },
    { id: 15, name: 15 },
    { id: 16, name: 16 },
    { id: 17, name: 17 },
    { id: 18, name: 18 },
  ];

  const skillSelect3 = [
    { id: 0, name: 0 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
    { id: 11, name: 11 },
    { id: 12, name: 12 },
    { id: 13, name: 13 },
    { id: 14, name: 14 },
    { id: 15, name: 15 },
    { id: 16, name: 16 },
    { id: 17, name: 17 },
    { id: 18, name: 18 },
    { id: 19, name: 19 },
    { id: 20, name: 20 },
    { id: 21, name: 21 },
  ];

  const clickStatus = (id) => {
    setStatusKey(id);
  };

  const inputSkill = useCallback(
    (event, id) => {
      const list = [...props.skill];
      list[id] = parseInt(event, 10);
      props.setSkill(list);
      setChangeLabel("skill");
      setChangeKey(id);
      setChangeValue(event);
    },
    [props.setSkill, props.skill]
  );

  const inputEtc = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.etc];
        list[statusKey] = parseInt(event.target.value, 10);
        props.setEtc(list);
        setChangeLabel("etc");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.etc];
        list[statusKey] = 0;
        props.setEtc(list);
      }
    },
    [props.setEtc, statusKey]
  );

  const inputTempo = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.tempo];
        list[statusKey] = parseInt(event.target.value, 10);
        props.setTempo(list);
        setChangeLabel("tempo");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.tempo];
        list[statusKey] = 0;
        props.setTempo(list);
      }
    },
    [props.setTempo, statusKey]
  );

  const inputSan = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        props.setSan(event.target.value);
      }
    },
    [props.setSan]
  );

  useEffect(() => {
    props.setSkill(
      props.skill.map((value, id) =>
        id === 8
          ? Math.round(
              (props.skill[1] +
                props.etc[1] +
                props.tempo[1] +
                props.skill[5] +
                props.etc[5] +
                props.tempo[5]) /
                2
            )
          : id === 9
          ? props.skill[2] + props.etc[2] + props.tempo[2]
          : id === 10
          ? (props.skill[2] + props.etc[2] + props.tempo[2]) * 5
          : id === 11
          ? (props.skill[6] + props.etc[6] + props.tempo[6]) * 5
          : id === 12
          ? (props.skill[2] + props.etc[2] + props.tempo[2]) * 5
          : id === 13
          ? (props.skill[3] + props.etc[3] + props.tempo[3]) * 5
          : value
      )
    );
  }, [changeLabel, changeKey, changeValue]);

  useEffect(() => {
    const list = [...props.total];
    props.skill.map((value, id) => {
      list[id] = value + props.etc[id] + props.tempo[id];
    });
    props.setTotal(list);
  }, [props.skill, props.etc, props.tempo]);

  return (
    <section className={styles.status}>
      <h3 className="section-title">ステータス</h3>
      <div className="section-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.headTitle}></TableCell>
                {statusName.map((value, id) => (
                  <TableCell className={classes.headBody} key={id}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.cellTitle}>能力値</TableCell>
                {props.skill.map((value, id) =>
                  id <= 5 ? (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      <SelectBox
                        id={id}
                        label={"能力値"}
                        required={false}
                        options={skillSelect1}
                        select={inputSkill}
                        value={value}
                      />
                    </TableCell>
                  ) : id === 6 ? (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      <SelectBox
                        id={id}
                        label={"能力値"}
                        required={false}
                        options={skillSelect2}
                        select={inputSkill}
                        value={value}
                      />
                    </TableCell>
                  ) : id === 7 ? (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      <SelectBox
                        id={id}
                        label={"能力値"}
                        required={false}
                        options={skillSelect3}
                        select={inputSkill}
                        value={value}
                      />
                    </TableCell>
                  ) : (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      {value}
                    </TableCell>
                  )
                )}
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellTitle}>その他増減</TableCell>
                {props.etc.map((value, id) =>
                  id <= 7 ? (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      <TextInput
                        fullWidth={true}
                        label={"その他"}
                        multiline={false}
                        required={false}
                        rows={1}
                        value={value}
                        type={"text"}
                        onChange={inputEtc}
                      />
                    </TableCell>
                  ) : (
                    <TableCell
                      className={classes.cellBody}
                      key={id}
                      onClick={() => clickStatus(id)}
                    >
                      0
                    </TableCell>
                  )
                )}
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellTitle}>一時的増減</TableCell>
                {props.tempo.map((value, id) => (
                  <TableCell
                    className={classes.cellBody}
                    key={id}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      label={"一時的"}
                      multiline={false}
                      required={false}
                      rows={1}
                      value={value}
                      type={"text"}
                      onChange={inputTempo}
                    />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className={classes.cellTitle}>合計</TableCell>
                {props.total.map((value, id) => (
                  <TableCell className={classes.cellBody} key={id}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.status__bottom}>
          <div className={styles.status__bottom_box}>
            <p>現在SAN値:</p>
            <div className={styles.status__bottom_box_input}>
              <TextInput
                fullWidth={true}
                multiline={false}
                required={false}
                rows={1}
                value={props.san}
                type={"text"}
                onChange={inputSan}
              />
            </div>
            <p>/{99 - props.intell[0].total}</p>
          </div>
          <div className={styles.status__bottom_box}>
            <p>不定領域:</p>
            <p>{Math.round(props.san * 0.8)}</p>
          </div>
          <div className={styles.status__bottom_box}>
            <p>ダメージボーナス:</p>
            <p>
              {props.total[0] + props.total[5] <= 12
                ? 0
                : props.total[0] + props.total[5] <= 16
                ? "-1d4"
                : props.total[0] + props.total[5] <= 24
                ? 0
                : props.total[0] + props.total[5] <= 32
                ? "1d4"
                : props.total[0] + props.total[5] <= 40
                ? "1d6"
                : 0}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
