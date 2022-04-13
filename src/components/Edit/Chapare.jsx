import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  inner: {
    height: 464,
    padding: "16px",
    borderRadius: 4,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    overflow: "scroll",
  },
  button: {
    display: "block",
    margin: "32px 0 0 auto",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    background: theme.palette.primary.light,
  },
}));

const Chapare = (props) => {
  const classes = useStyles();

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

  const textRetrieve = async () => {
    const chapareText = document.getElementById("chapareText");
    const chapareTextContent = chapareText.innerText;
    await navigator.clipboard.writeText(chapareTextContent);
    alert("クリップボードにコピーしました。");
  };

  return (
    <section className="section-wrap">
      <h3 className="section-title">チャパレ</h3>
      <div className="section-container gothic">
        <div id="chapareText" className={classes.inner}>
          <p>
            CCB{"<="}
            <br />
            1d100
            <br />
            :SAN-
            <br />
            RESB(x-y) [対抗]
            <br />
            choice[グー,チョキ,パー]
            <br />
            ーーーーーーーーーーーーー
            <br />
            {props.total.map((value, id) =>
              id <= 6 ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value}*5 {statusName[id]}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            ーーーーーーーーーーーーー
            <br />
            CCB{"<="}
            {"{SAN}"} 正気度ロール
            <br />
            CCB{"<="}
            {props.total[12]} 幸運
            <br />
            CCB{"<="}
            {props.total[11]} アイデア
            <br />
            CCB{"<="}
            {props.total[13]} 知識
            <br />
            ーーーーーーーーーーーーー
            <br />
            {props.combat.map((value, id) =>
              id <= 0 ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : value.total !== value.init ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            {props.threeMajor.map((value, id) => (
              <React.Fragment key={id}>
                CCB{"<="}
                {value.total} {value.name}
                <br />
              </React.Fragment>
            ))}
            {props.major.map((value, id) =>
              value.total !== value.init ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            {props.action.map((value, id) =>
              value.total !== value.init ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            {props.nego.map((value, id) =>
              value.total !== value.init ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            {props.intell.map((value, id) =>
              value.total !== value.init ? (
                <React.Fragment key={id}>
                  CCB{"<="}
                  {value.total} {value.name}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            ーーーーーーーーーーーーー
            <br />
            {props.total.map((value, id) =>
              id <= 7 ? (
                <React.Fragment key={id}>
                  {statusName[id]}={value}
                  <br />
                </React.Fragment>
              ) : (
                <React.Fragment key={id}></React.Fragment>
              )
            )}
            DB=
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
        <Button className={classes.button} onClick={() => textRetrieve()}>
          クリップボードにコピー
        </Button>
      </div>
    </section>
  );
};

export default Chapare;
