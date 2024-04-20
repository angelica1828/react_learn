import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        {console.log(props.mode)}
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#a8aebd" : "#e9ecef",
              }}
            ></textarea>
          </div>
          <button
            className="btn btn-info m-2"
            onClick={handleUpClick}
            style={{
              backgroundColor: props.mode === "dark" ? "#96bd00" : "",
              border: props.mode === "dark" ? "none" : "",
            }}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-info m-2"
            onClick={handleLoClick}
            style={{
              backgroundColor: props.mode === "dark" ? "#96bd00" : "",
              border: props.mode === "dark" ? "none" : "",
            }}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-info m-2"
            onClick={handleClear}
            style={{
              backgroundColor: props.mode === "dark" ? "#96bd00" : "",
              border: props.mode === "dark" ? "none" : "",
            }}
          >
            Clear Text
          </button>
          <button
            className="btn btn-info"
            onClick={copyToClipboard}
            style={{
              backgroundColor: props.mode === "dark" ? "#96bd00" : "",
              border: props.mode === "dark" ? "none" : "",
            }}
          >
            Copy to Clipboard
          </button>
        </form>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text === "" ? 0 : text.split(" ").length} words, {text.length}{" "}
          characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview"}
        </p>
      </div>
    </>
  );
}
