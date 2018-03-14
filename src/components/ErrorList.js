import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="card bg-danger text-white errors">
      <div className="card-header">
        <h3 className="card-title">Errors</h3>
      </div>
      <ul className="list-group">
        {errors.map((error, i) => {
          return (
            <li key={i} className="list-group-item text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
