import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText("");
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{backgroundColor: props.mode==='light'? 'grey':'white'}}
            ></textarea>
          </div>
          <button className="btn btn-info m-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-info m-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-info m-2" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-info" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
        </form>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in textbox above to preview"}</p>
      </div>
    </>
  );
}
