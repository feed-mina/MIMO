import React, { useEffect, useState, useRef } from "react";
import classes from "./FileInput.module.css";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();
  // const [value, setValue] = useState();
  const handleChange = (e) => {
    console.log(e.target.files);
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };
  // useEffect(() => {
  //   if (inputRef.current) {
  //     console.log(inputRef);
  //   }
  // }, []);

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);
  return (
    <div>
      <div className="previewimg">
        <img src={preview} alt="미리  보기" />
        <div className={classes.actions}>
          <input
            className={classes.filebutton}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            ref={inputRef}
          />{" "}
        </div>

        {value && <button onClick={handleClearClick}>지우기</button>}
      </div>{" "}
    </div>
  );
}

export default FileInput;
