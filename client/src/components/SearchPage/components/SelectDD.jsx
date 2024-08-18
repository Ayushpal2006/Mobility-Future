import React from "react";

export default function SelectDD(props) {
  function redirectToHandle() {
    props.func(props.name);
  }
  return (
    <div>
      <label htmlFor={props.name} className="amsterdam">
        <h3>{props.title}</h3>
      </label>

      <select name={props.name} id={props.name} onChange={redirectToHandle}>
        <option defaultValue="any">Any</option>
        {props.arr.map((obj) => {
          return <option value={obj.value}>{obj.name}</option>;
        })}
      </select>
    </div>
  );
}
