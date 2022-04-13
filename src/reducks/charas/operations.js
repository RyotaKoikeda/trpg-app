import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase";
import { fetchCharasAction, deleteCharasAction } from "./actions";

const charasRef = db.collection("charas");

export const deleteChara = (id) => {
  return async (dispatch, getState) => {
    charasRef
      .doc(id)
      .delete()
      .then(() => {
        const prevCharas = getState().charas.list;
        const nextCharas = prevCharas.filter((chara) => chara.id !== id);
        dispatch(deleteCharasAction(nextCharas));
      });
  };
};

export const fetchCharas = (category) => {
  return async (dispatch) => {
    let query = charasRef.orderBy("updated_at", "desc");
    query = category !== "" ? query.where("category", "==", category) : query;
    query.get().then((snapshots) => {
      const charaList = [];
      snapshots.forEach((snapshot) => {
        const chara = snapshot.data();
        charaList.push(chara);
      });
      dispatch(fetchCharasAction(charaList));
    });
  };
};

export const saveChara = (
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
) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      name: name,
      person: person,
      height: height,
      work: work,
      blood: blood,
      age: age,
      birthday: birthday,
      gender: gender,
      color: color,
      category: category,
      skill: skill,
      etc: etc,
      tempo: tempo,
      total: total,
      san: san,
      jobCurrent: jobCurrent,
      jobCalc: jobCalc,
      jobSelect: jobSelect,
      jobFlag: jobFlag,
      interestCurrent: interestCurrent,
      interestCalc: interestCalc,
      interestAdd: interestAdd,
      interestCorrect: interestCorrect,
      interestFlag: interestFlag,
      initSwitch: initSwitch,
      combat: combat,
      threeMajor: threeMajor,
      major: major,
      action: action,
      nego: nego,
      intell: intell,
      weapon: weapon,
      pack: pack,
      memo: memo,
      updated_at: timestamp,
    };

    if (id === "") {
      const ref = charasRef.doc();
      id = ref.id;
      data.id = id;
      data.created_at = timestamp;
    }

    return charasRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push("/"));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};
