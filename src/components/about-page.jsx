import React from "react";
import ReactMarkdown from "react-markdown";
import text from "../../Content/about-page.md";

const me = () => (
  <div className="page">
    <ReactMarkdown children={text}></ReactMarkdown>
  </div>
);

export default me;
