import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/Top.module.scss";
import { PrimaryButton, TextInput } from "../components/UiKit";
import { push } from "connected-react-router";
import { signIn, signOut } from "../reducks/users/operations";
import { getIsSignedIn } from "../reducks/users/selectors";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import WidgetsIcon from "@material-ui/icons/Widgets";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 48,
    gap: 22,
  },
  button: {
    background: theme.palette.primary.light,
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <main className={`${styles.top} main`}>
      <div className="container">
        {!isSignedIn && (
          <>
            <div className="page-logo">
              <LockIcon />
            </div>
            <h2 className="page-title">サインイン</h2>
            <div className={styles.top__signin}>
              <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
              />
              <TextInput
                fullWidth={true}
                label={"パスワード"}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={"password"}
                onChange={inputPassword}
              />
              <div className={styles.top__signin_button}>
                <PrimaryButton
                  label={"サインイン"}
                  onClick={() => dispatch(signIn(email, password))}
                />
              </div>
            </div>
          </>
        )}
        {isSignedIn && (
          <>
            <div className="page-logo">
              <WidgetsIcon />
            </div>
            <h2 className="page-title">メニュー</h2>
            <Box className={classes.menu}>
              <Button
                className={classes.button}
                onClick={() => dispatch(push("/edit"))}
              >
                編集
              </Button>
              <Button
                className={classes.button}
                onClick={() => dispatch(push("/list"))}
              >
                リスト
              </Button>
              <Button
                className={classes.button}
                onClick={() => dispatch(signOut())}
              >
                サインアウト
              </Button>
            </Box>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
