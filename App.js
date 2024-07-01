import React, { useState } from "react";
import Todolist from "./Todolist";
import "./index.css";
import AddIcon from '@mui/icons-material/Add';


const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((_arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listofitems}> <AddIcon/> </button>
          
          <ol>
            {Items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
