import React, { useCallback, useState } from "react";
import { TextInput } from "../UiKit";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
  table: {
    minWidth: 1164,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0 6px",
  },
  text: {
    fontSize: 18,
    cursor: "pointer",
    "&:hover": {
      color: "#888",
    },
  },
  name: {
    width: "13%",
    padding: "8px 16px",
  },
  value: {
    width: "10%",
    padding: "8px 16px",
  },
  etc: {
    padding: "8px 16px",
  },
});

const Weapon = (props) => {
  const classes = useStyles();

  const [statusKey, setStatusKey] = useState(0);

  const clickStatus = (id) => {
    setStatusKey(id);
  };

  const inputName = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].name = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputSuccess = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].success = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputDamage = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].damage = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputRange = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].range = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputAttack = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].attack = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputBullet = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].bullet = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputDurable = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].durable = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const inputEtc = useCallback(
    (event) => {
      const list = [...props.weapon];
      list[statusKey].etc = event.target.value;
      props.setWeapon(list);
    },
    [props.setWeapon, statusKey]
  );

  const addWeapon = () => {
    const newObj = {
      name: "",
      success: "",
      damage: "",
      range: "",
      attack: "",
      bullet: "",
      durable: "",
      etc: "",
    };
    const newList = [...props.weapon, newObj];
    props.setWeapon(newList);
  };

  return (
    <section className="section-wrap">
      <h3 className="section-title">??????/??????</h3>
      <div className="section-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.name}>??????</TableCell>
                <TableCell></TableCell>
                <TableCell className={classes.value}>?????????</TableCell>
                <TableCell className={classes.value}>???????????????</TableCell>
                <TableCell className={classes.value}>??????</TableCell>
                <TableCell className={classes.value}>????????????</TableCell>
                <TableCell className={classes.value}>?????????</TableCell>
                <TableCell className={classes.value}>??????</TableCell>
                <TableCell className={classes.ext}>?????????</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.weapon.map((value, id) => (
                <TableRow key={id}>
                  <TableCell
                    className={classes.name}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"??????"}
                      value={value.name}
                      type={"text"}
                      onChange={inputName}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"?????????"}
                      value={value.success}
                      type={"text"}
                      onChange={inputSuccess}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"???????????????"}
                      value={value.damage}
                      type={"text"}
                      onChange={inputDamage}
                    />
                  </TableCell>
                  <TableCell onClick={() => clickStatus(id)}>
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"??????"}
                      value={value.range}
                      type={"text"}
                      onChange={inputRange}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"????????????"}
                      value={value.attack}
                      type={"text"}
                      onChange={inputAttack}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"?????????"}
                      value={value.bullet}
                      type={"text"}
                      onChange={inputBullet}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"??????"}
                      value={value.durable}
                      type={"text"}
                      onChange={inputDurable}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.etc}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"?????????"}
                      value={value.etc}
                      type={"text"}
                      onChange={inputEtc}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.button}>
          <IconButton onClick={() => addWeapon()}>
            <AddCircleOutlineIcon />
          </IconButton>
          <p className={classes.text} onClick={() => addWeapon()}>
            ????????????
          </p>
        </div>
      </div>
    </section>
  );
};

export default Weapon;
