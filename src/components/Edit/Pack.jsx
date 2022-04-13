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
    width: 660,
    minWidth: 660,
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
    width: "15%",
    padding: "10px 16px",
  },
  value: {
    width: "11.5%",
    padding: "10px 16px",
  },
  blank: {
    width: "5%",
    padding: "10px 16px",
  },
  memo: {
    width: "33%",
    padding: "10px 16px",
  },
});

const Pack = (props) => {
  const classes = useStyles();

  const [statusKey, setStatusKey] = useState(0);

  const clickStatus = (id) => {
    setStatusKey(id);
  };

  const inputName = useCallback(
    (event) => {
      const list = [...props.pack];
      list[statusKey].name = event.target.value;
      props.setPack(list);
    },
    [props.setPack, statusKey]
  );

  const inputQuantity = useCallback(
    (event) => {
      const list = [...props.pack];
      list[statusKey].quantity = event.target.value;
      props.setPack(list);
    },
    [props.setPack, statusKey]
  );

  const inputMemo = useCallback(
    (event) => {
      const list = [...props.pack];
      list[statusKey].memo = event.target.value;
      props.setPack(list);
    },
    [props.setPack, statusKey]
  );

  const addPack = () => {
    const newObj = {
      name: "",
      quantity: "",
      memo: "",
    };
    const newList = [...props.pack, newObj];
    props.setPack(newList);
  };

  return (
    <section className="section-wrap">
      <h3 className="section-title">持ち物</h3>
      <div className="section-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.name}>名前</TableCell>
                <TableCell className={classes.blank}></TableCell>
                <TableCell className={classes.value}>個数</TableCell>
                <TableCell className={classes.memo}>メモ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.pack.map((value, id) => (
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
                      label={"名前"}
                      value={value.name}
                      type={"text"}
                      onChange={inputName}
                    />
                  </TableCell>
                  <TableCell className={classes.blank}></TableCell>
                  <TableCell
                    className={classes.value}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"個数"}
                      value={value.quantity}
                      type={"text"}
                      onChange={inputQuantity}
                    />
                  </TableCell>
                  <TableCell
                    className={classes.memo}
                    onClick={() => clickStatus(id)}
                  >
                    <TextInput
                      fullWidth={true}
                      multiline={false}
                      required={false}
                      rows={1}
                      label={"メモ"}
                      value={value.memo}
                      type={"text"}
                      onChange={inputMemo}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.button}>
          <IconButton onClick={() => addPack()}>
            <AddCircleOutlineIcon />
          </IconButton>
          <p className={classes.text} onClick={() => addPack()}>
            追加する
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pack;
