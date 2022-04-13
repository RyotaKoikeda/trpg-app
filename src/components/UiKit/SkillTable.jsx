import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "../UiKit";
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
    padding: "8px 0",
    textAlign: "center",
  },
  headBody: {
    width: "6.4%",
    padding: "8px 0",
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
    padding: "6px",
    fontSize: 16,
    textAlign: "center",
    borderLeft: "1px solid #fff",
    background: "#ffcd83",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    gap: 12,
  },
});

const SkillTable = (props) => {
  const classes = useStyles();

  const [statusKey, setStatusKey] = useState(0),
    [changeLabel, setChangeLabel] = useState(""),
    [changeKey, setChangeKey] = useState(""),
    [changeValue, setChangeValue] = useState("");

  const clickStatus = (id) => {
    setStatusKey(id);
  };

  const inputName = useCallback(
    (event) => {
      const list = [...props.list];
      list[statusKey].name = event.target.value;
      props.setList(list);
      setChangeLabel("name");
      setChangeKey(statusKey);
      setChangeValue(event.target.value);
    },
    [props.setList, statusKey]
  );

  const inputSub = useCallback(
    (event) => {
      const list = [...props.list];
      list[statusKey].sub = event.target.value;
      props.setList(list);
      setChangeLabel("sub");
      setChangeKey(statusKey);
      setChangeValue(event.target.value);
    },
    [props.setList, statusKey]
  );

  const inputInit = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.list];
        list[statusKey].init = parseInt(event.target.value, 10);
        props.setList(list);
        setChangeLabel("init");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.list];
        list[statusKey].init = 0;
        props.setList(list);
      }
    },
    [props.setList, statusKey]
  );

  const inputJob = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.list];
        list[statusKey].job = parseInt(event.target.value, 10);
        props.setList(list);
        setChangeLabel("job");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.list];
        list[statusKey].job = 0;
        props.setList(list);
      }
    },
    [props.setList, statusKey]
  );

  const inputInterest = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.list];
        list[statusKey].interest = parseInt(event.target.value, 10);
        props.setList(list);
        setChangeLabel("interest");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.list];
        list[statusKey].interest = 0;
        props.setList(list);
      }
    },
    [props.setList, statusKey]
  );

  const inputGrowth = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.list];
        list[statusKey].growth = parseInt(event.target.value, 10);
        props.setList(list);
        setChangeLabel("growth");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.list];
        list[statusKey].growth = 0;
        props.setList(list);
      }
    },
    [props.setList, statusKey]
  );

  const inputEtc = useCallback(
    (event) => {
      if (!isNaN(event.target.value)) {
        const list = [...props.list];
        list[statusKey].etc = parseInt(event.target.value, 10);
        props.setList(list);
        setChangeLabel("etc");
        setChangeKey(statusKey);
        setChangeValue(event.target.value);
      }
      if (event.target.value === "") {
        const list = [...props.list];
        list[statusKey].etc = 0;
        props.setList(list);
      }
    },
    [props.setList, statusKey]
  );

  useEffect(() => {
    const list = [...props.list];
    list.map((value, id) => {
      list[id].total =
        list[id].init +
        list[id].job +
        list[id].interest +
        list[id].growth +
        list[id].etc;
    });
    props.setList(list);
  }, [changeLabel, changeKey, changeValue]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headTitle}></TableCell>
            <TableCell className={classes.headBody}>初期値</TableCell>
            <TableCell className={classes.headBody}>職業P</TableCell>
            <TableCell className={classes.headBody}>興味P</TableCell>
            <TableCell className={classes.headBody}>成長</TableCell>
            <TableCell className={classes.headBody}>その他</TableCell>
            <TableCell className={classes.headBody}>合計</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((value, id) =>
            id <= props.length ? (
              props.initSwitch &&
              value.job === 0 &&
              value.interest === 0 &&
              value.growth === 0 &&
              value.etc === 0 ? (
                <div key={id}></div>
              ) : (
                <TableRow key={id}>
                  <TableCell
                    className={`${classes.cellTitle} ${classes.flex}`}
                    onClick={() => clickStatus(id)}
                  >
                    {value.name}
                    {value.name === "制作" ||
                    value.name === "操縦" ||
                    value.name === "芸術" ? (
                      <div className={classes.input}>
                        <TextInput
                          fullWidth={true}
                          multiline={false}
                          required={false}
                          rows={1}
                          value={value.sub}
                          type={"text"}
                          onChange={inputSub}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                  <TableCell className={classes.cellBody}>
                    {value.init}
                  </TableCell>
                  <TableCell
                    className={classes.cellBody}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      value={value.job}
                      type={"text"}
                      onChange={inputJob}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.cellBody}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      value={value.interest}
                      type={"text"}
                      onChange={inputInterest}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.cellBody}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      value={value.growth}
                      type={"text"}
                      onChange={inputGrowth}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.cellBody}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      value={value.etc}
                      type={"text"}
                      onChange={inputEtc}
                    />
                  </TableCell>
                  <TableCell className={classes.cellBody}>
                    {value.total}
                  </TableCell>
                </TableRow>
              )
            ) : props.initSwitch &&
              value.name === "" &&
              value.init === 0 &&
              value.job === 0 &&
              value.interest === 0 &&
              value.growth === 0 &&
              value.etc === 0 ? (
              <div key={id}></div>
            ) : (
              <TableRow key={id}>
                <TableCell
                  className={classes.cellTitle}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.name}
                    type={"text"}
                    onChange={inputName}
                  />
                </TableCell>
                <TableCell
                  className={classes.cellBody}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.init}
                    type={"text"}
                    onChange={inputInit}
                  />
                </TableCell>
                <TableCell
                  className={classes.cellBody}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.job}
                    type={"text"}
                    onChange={inputJob}
                  />
                </TableCell>
                <TableCell
                  className={classes.cellBody}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.interest}
                    type={"text"}
                    onChange={inputInterest}
                  />
                </TableCell>
                <TableCell
                  className={classes.cellBody}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.growth}
                    type={"text"}
                    onChange={inputGrowth}
                  />
                </TableCell>
                <TableCell
                  className={classes.cellBody}
                  onClick={() => clickStatus(id)}
                >
                  <TextInput
                    fullWidth={true}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={value.etc}
                    type={"text"}
                    onChange={inputEtc}
                  />
                </TableCell>
                <TableCell className={classes.cellBody}>
                  {value.total}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
