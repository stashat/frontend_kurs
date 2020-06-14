import React from "react";

const Todos = (props) => {
  const todosList =
    props.todoItems.length > 0
      ? props.todoItems.map((el) => {
          return (
            <li className="collection-item" key={el.id}>
              {el.name}
            </li>
          );
        })
      : "Sve je zavrsneo";
  return <ul className="collection">{todosList}</ul>;
};

export default Todos;
