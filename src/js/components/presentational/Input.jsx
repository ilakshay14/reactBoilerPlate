import React, { Component } from "react";
import PropTypes from "prop-types";

const Input = (props) => (
    <div className="form-group">
        <label htmlFor={props.label}>{props.text}</label>
        <input type={props.type}
            className="form-control"
            id={props.id}
            value={props.value}
            onChange={props.handleChange}
            required
        />
    </div>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;