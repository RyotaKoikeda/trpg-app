import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
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
});

const AddButton = (props) => {
  const classes = useStyles();

  const addCombat = () => {
    const newObj = {
      name: "",
      init: 0,
      job: 0,
      interest: 0,
      growth: 0,
      etc: 0,
      total: 0,
    };
    const newList = [...props.list, newObj];
    props.setList(newList);
  };

  return (
    <div className={classes.button}>
      <IconButton onClick={() => addCombat()}>
        <AddCircleOutlineIcon />
      </IconButton>
      <p className={classes.text} onClick={() => addCombat()}>
        追加する
      </p>
    </div>
  );
};

export default AddButton;
