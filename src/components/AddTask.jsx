import React, { useState } from 'react';

export default function AddTask({ onAddNewTask }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  function onSubmitAllData(e) {
    e.preventDefault();
    if (!text) {
      alert('please new task');
      return;
    }
    onAddNewTask({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className="add-form" onSubmit={onSubmitAllData}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          id="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day-time">Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          id="day-time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          id="reminder"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <button className="btn btn-block">Save Task</button>
    </form>
  );
}
