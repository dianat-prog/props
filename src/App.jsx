import React, { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

 
  // Función para agregar una nueva tarea
  const addTask = (taskText) => {
    if (!taskText.trim()) return; // Evitar agregar tareas vacías
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, // Obtener el siguiente ID
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Mantener las tareas previas y agregar la nueva
  };

  // Función para marcar una tarea como completada o no
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtrar y eliminar la tarea seleccionada
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;