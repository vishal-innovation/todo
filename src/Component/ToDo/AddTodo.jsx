import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateTodoItem } from "../../Store/Action/todo";
import TodoList from "./TodoList";

function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");
  const editItem = useSelector((state) => state.todoReducer.editItem);
  const [isEditable, setIsEditable] = useState(false);

  const inputHandler = (e) => {
    let item = e.target.value;
    setNewItem(item);
    !item && setIsEditable(false);
  };

  const submitHandler = () => {
    if (isEditable) {
      dispatch(updateTodoItem({ item: newItem, key: editItem.key }));
    } else {
      dispatch(addItem(newItem));
    }

    setNewItem("");
    setIsEditable(false);
  };

  useEffect(() => {
    if (editItem) {
      setNewItem(editItem.name);
      setIsEditable(true);
      inputRef.current.focus();
    }
  }, [editItem]);

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              style={{ borderRadius: ".75rem", backgroundColor: " #eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  My Todo
                </p>
                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input
                          ref={inputRef}
                          type="text"
                          className="form-control form-control-lg me-3"
                          value={newItem}
                          placeholder="Type task name"
                          onChange={inputHandler}
                        />
                        <div>
                          <button
                            className="btn btn-primary"
                            onClick={submitHandler}
                          >
                            {`${isEditable ? "Update" : "Add"}`}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddTodo;
