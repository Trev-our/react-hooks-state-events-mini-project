import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) { // onDelete prop received here
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.text)} // onDelete prop passed down to Task
        />
      ))}
    </div>
  );
}

export default TaskList;