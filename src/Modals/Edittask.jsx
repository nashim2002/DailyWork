import React, { useEffect, useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Edittask = ({ modal, toggle, save, taskobj, updateTask }) => {
  const [taskName, setTaskname] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") setTaskname(value);
    else setDescription(value);
  };
  const handleSave = () => {
    let taskobj = {};
    taskobj["Name"] = taskName;
    taskobj["Description"] = description;
    save(taskobj);
  };
  useEffect(() => {
    setTaskname(taskobj.Name);
    setDescription(taskobj.Description);
  }, []);
  const handleUpdate = () => {
    let taskobj = {};
    taskobj["Name"] = taskName;
    taskobj["Description"] = description;
    updateTask(taskobj);
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label>Task Description</label>
              <textarea
                rows={5}
                className="form-control"
                value={description}
                onChange={handleChange}
                name="description"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>{" "}
          <Button onClick={toggle} color="secondary">
            cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default Edittask;
