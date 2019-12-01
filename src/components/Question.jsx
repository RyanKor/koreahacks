import React from "react";
import styled from "styled-components";

const MessageHeader = styled.div`
  background-image: linear-gradient(141deg, #5a0703 0, #84211c 100%);
`;

const Question = ({ title, text }) => (
  <article className="message is-dark">
    <MessageHeader className="message-header">
      <p>{title}</p>
    </MessageHeader>
    <div className="message-body">{text}</div>
  </article>
);

export default Question;
