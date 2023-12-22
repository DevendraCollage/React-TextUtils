import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const { color, backgroundColor } = useSelector((state) => state.theme);

  const myStyle = {
    color,
    backgroundColor,
  };

  return (
    <div>
      <h1 className="my-3">About Us</h1>
      <p>
        <b>TextUtils</b> is a commonly used term in the field of computer
        science and software development, referring to a set of utility
        functions or tools designed to manipulate and analyze text data
        efficiently. These utilities are often employed in various applications,
        including natural language processing (NLP), data preprocessing, text
        mining, and information retrieval. The goal of TextUtils is to simplify
        the handling of textual data and provide developers with the tools they
        need to perform common tasks. <br />
        The most eminent features of the website are as follow:
      </p>

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              style={myStyle}
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              Is is a <i>Simple Text Analyzer</i> , which mutilates your text,
              but in a tender way
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              It is a completely <i>free</i> to use. Use as much as you want!
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              It is compatible with all of your <i>favorite</i> browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
