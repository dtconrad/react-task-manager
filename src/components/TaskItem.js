const TaskItem = ({ task, onDelete, onToggleComplete }) => {
    return (
      <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          onClick={() => onToggleComplete(task.id)}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {task.text}
        </span>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '1rem' }}>
          Delete
        </button>
      </li>
    );
  };
  
  export default TaskItem;
  