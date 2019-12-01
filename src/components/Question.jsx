import React from "react";

const Question = ({ title, text, color }) => (
  <article className={`message ${color}`}>
    <div className="message-header">
      <p>{title}</p>
    </div>
    <div className="message-body">{text}</div>
  </article>
);

export default Question;
