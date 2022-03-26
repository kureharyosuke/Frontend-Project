import React from "react";
import PropTypes from "prop-types";

const input = ({ type, value, placeholder, onChange }) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={onChange} />;
};

input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default input;
