import React from "react";
import PropTypes from "prop-types";

const input = ({ type, value, placeholder, onChange }) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={onChange} />;
};

input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOf[("text", "number", "password, email")].isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default input;
