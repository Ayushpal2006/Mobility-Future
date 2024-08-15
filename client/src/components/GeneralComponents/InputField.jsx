import React from "react";

export default function InputField(props) {
  return (
    <div className="input-group mb-3" id={props.styleId}>
      <span className="input-group-text" id="inputGroup-sizing-default">
        {props.title}
      </span>
      <input
        type={props.type ? props.type : "text"}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        name={props.name}
      />
    </div>
  );
}
