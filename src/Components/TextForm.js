import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //? Function to convert to uppercase
  const handleUPClick = () => {
    let newUpper = text.toUpperCase();
    setText(newUpper);
    props.showAlert("Converted to UpperCase!", "success");
  };

  //? Function to copy text
  const handleCopy = () => {
    let newCopy = document.getElementById("myBox");
    newCopy.select();
    navigator.clipboard.writeText(newCopy.value); //* Navigator Interface
    props.showAlert("Copied to Clipboard!", "success");
  };

  //? Function to remove white spaces
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  //? Clear text from the input areas
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  };

  //? Function to convert to lowercase
  const handleLOClick = () => {
    let newLower = text.toLowerCase();
    setText(newLower);
    props.showAlert("Converted to Lowercase!", "success");
  };

  //? Function to reverse the string
  const handleReverse = () => {
    if (text) {
      const newReverse = text.split(" ");
      let i = 0;
      let result = "";
      for (i = 0; i < newReverse.length; i++) {
        result = newReverse[i].split("").reverse().join("") + " " + result;
        setText(result);
      }
      props.showAlert("Text Reversed!", "success");
    }
  };

  //? Function to replace string with specified string
  const replaceText = (originalText, wordToReplace, newWord) => {
    const regex = new RegExp(wordToReplace, "g");
    return originalText.replace(regex, newWord);
  };
  const changeText = () => {
    const word = prompt("Enter the string from the string to replace.");
    const newWord = prompt("Enter the string to replace with.");
    setText((prevText) => replaceText(prevText, word, newWord));
    props.showAlert("Replaced Text!", "success");
  };

  //? Function to remove special character
  const removeSpecialChar = () => {
    const replace = text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(replace);
    props.showAlert("Special Character Removed!", "success");
  };

  //? Function to convert string into sentence
  const convertSentence = () => {
    let words = text.toLowerCase().split(" ");
    let sentenceCased = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    setText(sentenceCased.join(" "));
    props.showAlert("String converted to Sentence!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="container my-3">
          <h1 className="mb-2">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleUPClick}
            >
              Convert to UpperCase
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleLOClick}
            >
              Convert to LowerCase
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleRemoveSpace}
            >
              Remove White-Spaces
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleClear}
            >
              Clear Text
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={handleReverse}
            >
              Reverse Text
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={changeText}
            >
              Change Text
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={removeSpecialChar}
            >
              Remove Special Character
            </button>
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
                borderColor: props.mode === "dark" ? "white" : "black",
              }}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-2"
              onClick={convertSentence}
            >
              Convert to Sentence
            </button>
          </div>
        </div>
        <div className="container">
          <h1>Your Text Summary</h1>
          <p>
            <b>
              {
                text
                  .replace()
                  .split(/\s+/)
                  .filter((value) => value !== "").length
              }
            </b>{" "}
            words and <b>{text.trim().length}</b> characters
          </p>
          <p>
            <b>
              {0.08 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}
            </b>{" "}
            Minutes You Need to Read This{" "}
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview!!"}</p>
        </div>
      </div>
    </>
  );
}
