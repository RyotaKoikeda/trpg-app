import React, { useCallback, useEffect, useState } from "react";
import styles from "./Data.module.scss";
import { TextInput, SelectBox } from "../UiKit";

const Data = (props) => {
  const inputName = useCallback(
    (event) => {
      props.setName(event.target.value);
    },
    [props.setName]
  );

  const inputPerson = useCallback(
    (event) => {
      props.setPerson(event.target.value);
    },
    [props.setPerson]
  );

  const inputHeight = useCallback(
    (event) => {
      props.setHeight(event.target.value);
    },
    [props.setHeight]
  );

  const inputWork = useCallback(
    (event) => {
      props.setWork(event.target.value);
    },
    [props.setWork]
  );

  const inputBlood = useCallback(
    (event) => {
      props.setBlood(event.target.value);
    },
    [props.setBlood]
  );

  const inputAge = useCallback(
    (event) => {
      props.setAge(event.target.value);
    },
    [props.seAge]
  );

  const inputBirthday = useCallback(
    (event) => {
      props.setBirthday(event.target.value);
    },
    [props.setBirthday]
  );

  const inputGender = useCallback(
    (event) => {
      props.setGender(event.target.value);
    },
    [props.setGender]
  );

  const inputColor = useCallback(
    (event) => {
      props.setColor(event.target.value);
    },
    [props.setColor]
  );

  return (
    <section className={styles.data}>
      <h3 className="section-title">キャラクターデータ</h3>
      <div className="section-container">
        <div className={styles.data_wrap}>
          <div className={styles.data_category}>
            <SelectBox
              label={"タグ"}
              required={true}
              options={props.categories}
              select={props.setCategory}
              value={props.category}
            />
          </div>
          <div className={styles.data_wrap_contents}>
            <div className={styles.data_list}>
              <p className={styles.data_list_label}>名前</p>
              <div className={styles.data_list_input}>
                <TextInput
                  fullWidth={true}
                  label={"名前"}
                  multiline={false}
                  required={false}
                  rows={1}
                  value={props.name}
                  type={"text"}
                  onChange={inputName}
                />
              </div>
            </div>
            <div className={styles.data_row}>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>一人称/二人称</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"一人称/二人称"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.person}
                    type={"text"}
                    onChange={inputPerson}
                  />
                </div>
              </div>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>身長</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"身長"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.height}
                    type={"text"}
                    onChange={inputHeight}
                  />
                </div>
              </div>
            </div>
            <div className={styles.data_row}>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>職業</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"職業"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.work}
                    type={"text"}
                    onChange={inputWork}
                  />
                </div>
              </div>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>血液型</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"血液型"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.blood}
                    type={"text"}
                    onChange={inputBlood}
                  />
                </div>
              </div>
            </div>
            <div className={styles.data_row}>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>年齢</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"年齢"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.age}
                    type={"text"}
                    onChange={inputAge}
                  />
                </div>
              </div>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>誕生日</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"誕生日"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.birthday}
                    type={"text"}
                    onChange={inputBirthday}
                  />
                </div>
              </div>
            </div>
            <div className={styles.data_row}>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>性別</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"性別"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.gender}
                    type={"text"}
                    onChange={inputGender}
                  />
                </div>
              </div>
              <div className={styles.data_list}>
                <p className={styles.data_list_label}>カラーコード</p>
                <div className={styles.data_list_input}>
                  <TextInput
                    fullWidth={true}
                    label={"カラーコード"}
                    multiline={false}
                    required={false}
                    rows={1}
                    value={props.color}
                    type={"text"}
                    onChange={inputColor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
