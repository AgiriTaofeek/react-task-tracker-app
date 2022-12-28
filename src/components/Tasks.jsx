import React from 'react';
import Task from './Task';

export default function Tasks({ tasksData, onDeleteTask, onToggleReminder }) {
  const task = tasksData.map((el) => (
    <Task
      key={el.id}
      taskData={el}
      onDeleteTask={onDeleteTask}
      onToggleReminder={onToggleReminder}
    />
  ));
  return <>{task}</>;
}
