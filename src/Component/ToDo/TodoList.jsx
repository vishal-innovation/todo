import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoItem } from "../../Store/Action/todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todoReducer.TaskList);

  const editItem = (index, item) => {
    dispatch(editTodoItem({ name: item, key: index }));
  };

  return (
    <>
      {taskList.map((itemName, index) => (
        <div key={itemName} className="card p-2 m-1">
          <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
              <p className="lead fw-normal mb-0">{itemName}</p>
            </li>
            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
              <div className="d-flex flex-row justify-content-end mb-1">
                <button
                  className="btn btn-info mx-2"
                  onClick={() => editItem(index, itemName)}
                >
                  Edit
                </button>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default TodoList;
