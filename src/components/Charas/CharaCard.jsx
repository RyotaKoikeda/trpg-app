import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { deleteChara } from "../../reducks/charas/operations";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

const dateToString = (date) => {
  return (
    date.getFullYear() +
    "." +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "." +
    ("00" + date.getDate()).slice(-2)
  );
};

const useStyles = makeStyles({
  update: {
    alignSelf: "flex-end",
    textAlign: "right",
    "&>p": {
      fontSize: 12,
    },
  },
});

const CharaCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return props.id <= props.page * 20 - 1 && props.page * 20 - 20 <= props.id ? (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItem>
        <ListItemText
          primary={`${props.chara.name}: ${props.chara.color}`}
          secondary={`職業: ${props.chara.work}`}
          onClick={() => dispatch(push("/edit/" + props.chara.id))}
        />
        <ListItemText
          className={classes.update}
          secondary={`最終更新日: ${dateToString(
            props.chara.updated_at.toDate()
          )}`}
          onClick={() => dispatch(push("/edit/" + props.chara.id))}
        />
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              dispatch(deleteChara(props.chara.id));
              handleClose();
            }}
          >
            削除する
          </MenuItem>
        </Menu>
      </ListItem>
      <Divider />
    </List>
  ) : (
    <></>
  );
};

export default CharaCard;
