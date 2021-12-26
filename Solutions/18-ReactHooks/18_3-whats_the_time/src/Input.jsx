import React from "react";

const Input = ({ value, type, onChange }) => {
  const handleChange = (e) => {
    onChange(type, e.target.value);
  };
  return (
    <>
      <label htmlFor={type}>{`${type}: `}</label>
      <input onChange={handleChange} value={value} type="text" />
    </>
  );
};

export default Input;
