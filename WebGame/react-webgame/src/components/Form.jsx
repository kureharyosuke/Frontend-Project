import React from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.propTypes = {};

export default Form;
