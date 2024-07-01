import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import { Edit } from "./Edit";
// import EditIcon from '@mui/icons-material/Edit';

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

// import React, { useState } from "react";
// import "bootstrap/js/dist/button";
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';

// const Todolist = () => {
//   const [num, setNum] = useState(0);

//   const incNum = () => {
//     setNum(num + 1);
//   };

//   const decNum = () => {
//     if (num > 0) {
//       setNum(num - 1);
//     } else {
//       alert("Sorry, zero limit reacted");
//       setNum(0);
//     }
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <h1>{num}</h1>
//           <div className="btn_div">
//             <Button onClick={incNum} className="btn_green">
//               <AddIcon/>
//             </Button>
//             <Button onClick={decNum} className="btn_red">
//               <DeleteIcon/>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Todolist;

// Digital clock//
// import React from "react";
// import { Clock } from "digital-clock-react";

// function Todolist() {
//   return (
//     <div className="clock_div">
//       <Clock />
//     </div>
//   );
// }

// export default Todolist;
