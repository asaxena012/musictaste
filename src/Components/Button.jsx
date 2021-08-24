import React from "react";

const styles = {
  margin: "1rem",
  padding: "1.5rem 0.8rem",
  cursor: "pointer",
  backgroundColor: "#e63946",
  outline: "none",
  border: "none",
  borderRadius: "0.6rem",
  fontSize: "1.2rem",
  minWidth: "fit-content",
  color: "#f1faee",
  boxShadow: "2px 4px 24px -3px rgba(0,0,0,0.5)"
};

const Button = ({ text, clickHandler }) => {
  return (
    <button style={styles} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
