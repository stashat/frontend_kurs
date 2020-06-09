import React from "react";
export const Users = (props) => {
  console.log(props);
  return <h1>{props.match.params.id}</h1>;
};
