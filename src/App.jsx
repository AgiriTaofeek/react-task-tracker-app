import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showTask, setShowTask] = useState(false);

  //* Fetch tasks from fake API
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  //* submit and add new task to the UI
  async function submitNewTask(newTask) {
    const res = await fetch(`http://localhost:3000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    setTasks([data, ...tasks]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const freshTask = { id, ...newTask };
  }

  //* Delete task
  async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((el) => el.id !== id));
  }

  //* Fetch a single task from the fake API
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  //* Toggle reminder task
  async function toggleReminderTask(id) {
    const taskToggled = await fetchTask(id);

    const updateTaskToggled = {
      ...taskToggled,
      reminder: !taskToggled.reminder,
    };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateTaskToggled),
    });

    const data = await res.json();
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, reminder: data.reminder } : el
      )
    );
  }

  function handleCLick() {
    setShowTask(!showTask);
  }

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" onAdd={handleCLick} showTask={showTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showTask && <AddTask onAddNewTask={submitNewTask} />}
                {tasks.length ? (
                  <Tasks
                    tasksData={tasks}
                    onDeleteTask={deleteTask}
                    onToggleReminder={toggleReminderTask}
                  />
                ) : (
                  'There is no tasks'
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
