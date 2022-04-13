import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/CharaList.module.scss";
import { CharaCard } from "../components/Charas";
import { SelectBox } from "../components/UiKit";
import { fetchCharas } from "../reducks/charas/operations";
import { getCharas } from "../reducks/charas/selectors";
import { db } from "../firebase";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MuiPagination from "@material-ui/lab/Pagination";

const CharaList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const charas = getCharas(selector);

  const [category, setCategory] = useState(""),
    [categories, setCategories] = useState([]),
    [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCharas(category));
  }, [category]);

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
    dispatch(fetchCharas(category));
    db.collection("current")
      .doc("lXJwlYAczC1J96SvvNnw")
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setCategory(data.id);
      });
  }, []);

  const handleCategory = useCallback(
    (event) => {
      setCategory(event);
      db.collection("current").doc("lXJwlYAczC1J96SvvNnw").set({ id: event });
    },
    [setCategory]
  );

  return (
    <main className={`${styles.list} main`}>
      <div className="container">
        <div className="page-logo">
          <FormatListBulletedIcon />
        </div>
        <h2 className="page-title">リスト一覧</h2>
        <div className={styles.list_category}>
          <SelectBox
            label={"タグ"}
            required={true}
            options={categories}
            select={handleCategory}
            value={category}
          />
        </div>
        <ul className={styles.list__list}>
          {charas.length > 0 &&
            charas.map((chara, id) => (
              <CharaCard key={chara.id} id={id} chara={chara} page={page} />
            ))}
        </ul>
        <div className={styles.list_page}>
          <MuiPagination
            count={Math.floor(charas.length / 20) + 1}
            color="primary"
            onChange={(e, page) => setPage(page)}
            page={page}
          />
        </div>
      </div>
    </main>
  );
};

export default CharaList;
