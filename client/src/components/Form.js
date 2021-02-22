import React from "react";

// This file exports the Input search box and FormBtn components

export function SearchBox(props) {
  return (
    <div className="form-group">
      <input type="search" className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#3D5A66", color: "azure" }} className="btn btn">
      {props.children}
    </button>
  );
}
