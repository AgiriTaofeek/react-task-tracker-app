import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Task({ taskData, onDeleteTask, onToggleReminder }) {
  return (
    <div
      className={`task ${taskData.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(taskData.id)}
    >
      <h3>
        {taskData.text}
        <FaTimes className="icon" onClick={() => onDeleteTask(taskData.id)} />
      </h3>
      <p>{taskData.day} </p>
    </div>
  );
}
