import React, { useCallback } from "react";
import { TextInput } from "../UiKit";

const Memo = (props) => {
  const inputMemo = useCallback(
    (event) => {
      props.setMemo(event.target.value);
    },
    [props.setMemo]
  );

  return (
    <section className="section-wrap">
      <h3 className="section-title">メモ</h3>
      <div className="section-container">
        <TextInput
          fullWidth={true}
          multiline={true}
          required={false}
          rows={20}
          label={"メモ"}
          value={props.memo}
          type={"text"}
          onChange={inputMemo}
        />
      </div>
    </section>
  );
};

export default Memo;
