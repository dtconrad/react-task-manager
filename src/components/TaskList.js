import React from 'react';
import TaskItem from './TaskItem'; // Import TaskItem component

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
