import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
