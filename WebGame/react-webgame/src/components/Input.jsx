import React from "react";
import PropTypes from "prop-types";

const input = ({ inputRef, type, name, value, placeholder, onChange }) => {
  return <input ref={inputRef} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />;
};

input.propTypes = {
  inputRef: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default input;
