import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}><DeleteIcon/></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;

