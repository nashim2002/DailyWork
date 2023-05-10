import React, { useEffect, useState } from "react";
import CreateList from "../Modals/CreateList";
import Card from "./Card";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTasklist] = useState([]);
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTasklist(obj);
    }
  }, []);
  // const toggle = () => {
  //   setModal(!modal);
  // };
  const saveTask = (taskobj) => {
    let tempList = taskList;
    tempList.push(taskobj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTasklist(tempList);
    setModal(false);
  };
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };
  const toggle = () => setModal(!modal);
  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center ">
        <h3 style={{ color: "#033570" }}>To-Do List</h3>
        <button onClick={() => setModal(!modal)} className="btn btn-info">
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            taskobj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateList modal={modal} toggle={toggle} save={saveTask} />
    </>
  );
};

export default TodoList;
