import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../assets/css/CharaEdit.module.scss";
import {
  Chapare,
  Data,
  Status,
  Skill,
  Combat,
  ThreeMajor,
  Major,
  Action,
  Nego,
  Intell,
  Weapon,
  Pack,
  Memo,
} from "../components/Edit";
import { PrimaryButton } from "../components/UiKit";
import { saveChara } from "../reducks/charas/operations";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  menu: {
    margin: "60px 0 32px",
  },
  button: {
    background: theme.palette.primary.light,
  },
}));

const CharaEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let id = window.location.pathname.split("/edit")[1];

  if (id !== "") {
    id = id.split("/")[1];
  }

  const [name, setName] = useState(""),
    [person, setPerson] = useState(""),
    [height, setHeight] = useState(""),
    [work, setWork] = useState(""),
    [blood, setBlood] = useState(""),
    [age, setAge] = useState(""),
    [birthday, setBirthday] = useState(""),
    [gender, setGender] = useState(""),
    [color, setColor] = useState(""),
    [category, setCategory] = useState(""),
    [categories, setCategories] = useState([]),
    [skill, setSkill] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    [etc, setEtc] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    [tempo, setTempo] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    [san, setSan] = useState(""),
    [jobCurrent, setJobCurrent] = useState(""),
    [jobCalc, setJobCalc] = useState("0"),
    [jobSelect, setJobSelect] = useState(""),
    [jobFlag, setJobFlag] = useState(false),
    [interestCurrent, setInterestCurrent] = useState(""),
    [interestCalc, setInterestCalc] = useState(0),
    [interestAdd, setInterestAdd] = useState(""),
    [interestCorrect, setInterestCorrect] = useState(""),
    [interestFlag, setInterestFlag] = useState(false),
    [initSwitch, setInitSwitch] = useState(false),
    [combat, setCombat] = useState([
      {
        name: "回避",
        init: 0,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "キック",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "組み付き",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "こぶし",
        init: 50,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "頭突き",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "投擲",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "マーシャルアーツ",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "拳銃",
        init: 20,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "サブマシンガン",
        init: 15,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "ショットガン",
        init: 30,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "マシンガン",
        init: 15,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "ライフル",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [threeMajor, setThreeMajor] = useState([
      {
        name: "目星",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "聞き耳",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "図書館",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [major, setMajor] = useState([
      {
        name: "応急手当",
        init: 30,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "鍵開け",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "隠す",
        init: 15,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "隠れる",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "忍び歩き",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "写真術",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "精神分析",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "追跡",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "登攀",
        init: 40,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [action, setAction] = useState([
      {
        name: "運転（自動車）",
        init: 20,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "運転（二輪）",
        init: 20,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "機械修理",
        init: 20,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "重機械操作",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "乗馬",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "水泳",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "制作",
        sub: "",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "操縦",
        sub: "",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "跳躍",
        init: 25,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "電気修理",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "ナビゲート",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "変装",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [nego, setNego] = useState([
      {
        name: "言いくるめ",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "信用",
        init: 15,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "説得",
        init: 15,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "値切り",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "英語",
        init: 0,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "母国語",
        init: 0,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [intell, setIntell] = useState([
      {
        name: "クトゥルフ神話技能",
        init: 0,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "医学",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "オカルト",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "化学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "芸術",
        sub: "",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "経理",
        init: 10,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "考古学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "コンピューター",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "心理学",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "人類学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "生物学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "地質学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "電子工学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "天文学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "博物学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "物理学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "法律",
        init: 5,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "薬学",
        init: 1,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
      {
        name: "歴史",
        init: 20,
        job: 0,
        interest: 0,
        growth: 0,
        etc: 0,
        total: 0,
      },
    ]),
    [weapon, setWeapon] = useState([
      {
        name: "",
        success: "",
        damage: "",
        range: "",
        attack: "",
        bullet: "",
        durable: "",
        etc: "",
      },
      {
        name: "",
        success: "",
        damage: "",
        range: "",
        attack: "",
        bullet: "",
        durable: "",
        etc: "",
      },
      {
        name: "",
        success: "",
        damage: "",
        range: "",
        attack: "",
        bullet: "",
        durable: "",
        etc: "",
      },
    ]),
    [pack, setPack] = useState([
      {
        name: "",
        quantity: "",
        memo: "",
      },
      {
        name: "",
        quantity: "",
        memo: "",
      },
      {
        name: "",
        quantity: "",
        memo: "",
      },
    ]),
    [memo, setMemo] = useState(""),
    [chapareFlag, setChapareFlag] = useState(false);

  useEffect(() => {
    if (id !== "") {
      db.collection("charas")
        .doc(id)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          setName(data.name);
          setPerson(data.person);
          setHeight(data.height);
          setWork(data.work);
          setBlood(data.blood);
          setAge(data.age);
          setBirthday(data.birthday);
          setGender(data.gender);
          setColor(data.color);
          setCategory(data.category);
          setSkill(data.skill);
          setEtc(data.etc);
          setTempo(data.tempo);
          setTotal(data.total);
          setSan(data.san);
          setJobCurrent(data.jobCurrent);
          setJobCalc(data.jobCalc);
          setJobSelect(data.jobSelect);
          setJobFlag(data.jobFlag);
          setInterestCurrent(data.interestCurrent);
          setInterestCalc(data.interestCalc);
          setInterestAdd(data.interestAdd);
          setInterestCorrect(data.interestCorrect);
          setInterestFlag(data.interestFlag);
          setInitSwitch(data.initSwitch);
          setCombat(data.combat);
          setThreeMajor(data.threeMajor);
          setMajor(data.major);
          setAction(data.action);
          setNego(data.nego);
          setIntell(data.intell);
          setWeapon(data.weapon);
          setPack(data.pack);
          setMemo(data.memo);
        });
    } else {
      setName("");
      setPerson("");
      setHeight("");
      setWork("");
      setBlood("");
      setAge("");
      setBirthday("");
      setGender("");
      setColor("");
      setCategory([]);
      setSkill([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setEtc([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setTempo([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setSan("");
      setJobCurrent("");
      setJobCalc("0");
      setJobSelect("");
      setJobFlag(false);
      setInterestCurrent("");
      setInterestCalc(0);
      setInterestAdd("");
      setInterestCorrect("");
      setInterestFlag(false);
      setInitSwitch(false);
      setCombat([
        {
          name: "回避",
          init: 0,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "キック",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "組み付き",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "こぶし",
          init: 50,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "頭突き",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "投擲",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "マーシャルアーツ",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "拳銃",
          init: 20,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "サブマシンガン",
          init: 15,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "ショットガン",
          init: 30,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "マシンガン",
          init: 15,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "ライフル",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setThreeMajor([
        {
          name: "目星",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "聞き耳",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "図書館",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setMajor([
        {
          name: "応急手当",
          init: 30,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "鍵開け",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "隠す",
          init: 15,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "隠れる",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "忍び歩き",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "写真術",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "精神分析",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "追跡",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "登攀",
          init: 40,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setAction([
        {
          name: "運転（自動車）",
          init: 20,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "運転（二輪）",
          init: 20,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "機械修理",
          init: 20,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "重機械操作",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "乗馬",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "水泳",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "制作",
          sub: "",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "操縦",
          sub: "",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "跳躍",
          init: 25,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "電気修理",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "ナビゲート",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "変装",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setNego([
        {
          name: "言いくるめ",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "信用",
          init: 15,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "説得",
          init: 15,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "値切り",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "英語",
          init: 0,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "母国語",
          init: 0,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setIntell([
        {
          name: "クトゥルフ神話技能",
          init: 0,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "医学",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "オカルト",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "化学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "芸術",
          sub: "",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "経理",
          init: 10,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "考古学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "コンピューター",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "心理学",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "人類学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "生物学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "地質学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "電子工学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "天文学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "博物学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "物理学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "法律",
          init: 5,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "薬学",
          init: 1,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
        {
          name: "歴史",
          init: 20,
          job: 0,
          interest: 0,
          growth: 0,
          etc: 0,
          total: 0,
        },
      ]);
      setWeapon([
        {
          name: "",
          success: "",
          damage: "",
          range: "",
          attack: "",
          bullet: "",
          durable: "",
          etc: "",
        },
        {
          name: "",
          success: "",
          damage: "",
          range: "",
          attack: "",
          bullet: "",
          durable: "",
          etc: "",
        },
        {
          name: "",
          success: "",
          damage: "",
          range: "",
          attack: "",
          bullet: "",
          durable: "",
          etc: "",
        },
      ]);
      setPack([
        {
          name: "",
          quantity: "",
          memo: "",
        },
        {
          name: "",
          quantity: "",
          memo: "",
        },
        {
          name: "",
          quantity: "",
          memo: "",
        },
      ]);
      setMemo("");
    }
  }, [id]);

  useEffect(() => {
    db.collection("categories")
      .orderBy("order", "asc")
      .get()
      .then((snapshots) => {
        const list = [];
        snapshots.forEach((snapshot) => {
          const data = snapshot.data();
          list.push({
            id: data.id,
            name: data.name,
          });
        });
        setCategories(list);
      });
  }, []);

  useEffect(() => {
    if (jobCurrent > jobCalc) {
      setJobFlag(true);
    } else {
      setJobFlag(false);
    }
  }, [jobCurrent, jobCalc]);

  useEffect(() => {
    if (interestCurrent > interestCalc) {
      setInterestFlag(true);
    } else {
      setInterestFlag(false);
    }
  }, [interestCurrent, interestCalc]);

  useEffect(() => {
    const nextCombat = combat;
    nextCombat[0].init = total[3] * 2;
    nextCombat[0].total =
      nextCombat[0].init +
      nextCombat[0].job +
      nextCombat[0].interest +
      nextCombat[0].growth +
      nextCombat[0].etc;
    setCombat(nextCombat);

    const nextThreeMajor = threeMajor;
    setThreeMajor(nextThreeMajor);

    const nextMajor = major;
    setMajor(nextMajor);

    const nextAction = action;
    setAction(nextAction);

    const nextNego = nego;
    nextNego[5].init = total[7] * 5;
    nextNego[5].total =
      nextNego[5].init +
      nextNego[5].job +
      nextNego[5].interest +
      nextNego[5].growth +
      nextNego[5].etc;
    setNego(nextNego);

    const nextIntell = intell;
    setIntell(nextIntell);
  }, [total]);

  return (
    <main className={`${styles.edit} main`}>
      <div className="container">
        <div className="page-logo">
          <EditIcon />
        </div>
        <h2 className="page-title">編集ページ</h2>
        <Box className={classes.menu}>
          <ButtonGroup variant="contained" aria-label="large text button group">
            <Button
              className={classes.button}
              onClick={() =>
                dispatch(
                  saveChara(
                    id,
                    name,
                    person,
                    height,
                    work,
                    blood,
                    age,
                    birthday,
                    gender,
                    color,
                    category,
                    skill,
                    etc,
                    tempo,
                    total,
                    san,
                    jobCurrent,
                    jobCalc,
                    jobSelect,
                    jobFlag,
                    interestCurrent,
                    interestCalc,
                    interestAdd,
                    interestCorrect,
                    interestFlag,
                    initSwitch,
                    combat,
                    threeMajor,
                    major,
                    action,
                    nego,
                    intell,
                    weapon,
                    pack,
                    memo
                  )
                )
              }
            >
              保存する
            </Button>
            <Button
              className={classes.button}
              onClick={() => setChapareFlag(!chapareFlag)}
            >
              チャパレ
            </Button>
          </ButtonGroup>
        </Box>
        {chapareFlag && (
          <Chapare
            total={total}
            combat={combat}
            threeMajor={threeMajor}
            major={major}
            action={action}
            nego={nego}
            intell={intell}
          />
        )}
        <Data
          name={name}
          setName={setName}
          person={person}
          setPerson={setPerson}
          height={height}
          setHeight={setHeight}
          work={work}
          setWork={setWork}
          blood={blood}
          setBlood={setBlood}
          age={age}
          setAge={setAge}
          birthday={birthday}
          setBirthday={setBirthday}
          gender={gender}
          setGender={setGender}
          color={color}
          setColor={setColor}
          category={category}
          setCategory={setCategory}
          categories={categories}
          setCategories={setCategories}
        />
        <Status
          skill={skill}
          setSkill={setSkill}
          etc={etc}
          setEtc={setEtc}
          tempo={tempo}
          setTempo={setTempo}
          total={total}
          setTotal={setTotal}
          san={san}
          setSan={setSan}
          intell={intell}
        />
        <Skill
          jobCurrent={jobCurrent}
          setJobCurrent={setJobCurrent}
          jobCalc={jobCalc}
          setJobCalc={setJobCalc}
          jobSelect={jobSelect}
          setJobSelect={setJobSelect}
          jobFlag={jobFlag}
          interestCurrent={interestCurrent}
          setInterestCurrent={setInterestCurrent}
          interestCalc={interestCalc}
          setInterestCalc={setInterestCalc}
          interestAdd={interestAdd}
          setInterestAdd={setInterestAdd}
          interestCorrect={interestCorrect}
          setInterestCorrect={setInterestCorrect}
          interestFlag={interestFlag}
          initSwitch={initSwitch}
          setInitSwitch={setInitSwitch}
          total={total}
          combat={combat}
          threeMajor={threeMajor}
          major={major}
          action={action}
          nego={nego}
          intell={intell}
        />
        <Combat combat={combat} setCombat={setCombat} initSwitch={initSwitch} />
        <ThreeMajor
          threeMajor={threeMajor}
          setThreeMajor={setThreeMajor}
          initSwitch={initSwitch}
        />
        <Major major={major} setMajor={setMajor} initSwitch={initSwitch} />
        <Action action={action} setAction={setAction} initSwitch={initSwitch} />
        <Nego nego={nego} setNego={setNego} initSwitch={initSwitch} />
        <Intell intell={intell} setIntell={setIntell} initSwitch={initSwitch} />
        <Weapon weapon={weapon} setWeapon={setWeapon} />
        <Pack pack={pack} setPack={setPack} />
        <Memo memo={memo} setMemo={setMemo} />
        <div className={styles.edit_button}>
          <PrimaryButton
            label={"保存する"}
            onClick={() =>
              dispatch(
                saveChara(
                  id,
                  name,
                  person,
                  height,
                  work,
                  blood,
                  age,
                  birthday,
                  gender,
                  color,
                  category,
                  skill,
                  etc,
                  tempo,
                  total,
                  san,
                  jobCurrent,
                  jobCalc,
                  jobSelect,
                  jobFlag,
                  interestCurrent,
                  interestCalc,
                  interestAdd,
                  interestCorrect,
                  interestFlag,
                  initSwitch,
                  combat,
                  threeMajor,
                  major,
                  action,
                  nego,
                  intell,
                  weapon,
                  pack,
                  memo
                )
              )
            }
          />
        </div>
      </div>
    </main>
  );
};

export default CharaEdit;
