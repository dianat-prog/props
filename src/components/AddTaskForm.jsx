//Crearemos un input que recoja el valor y añada las tarea al resto de tareas
import React, { useState } from "react";
import styles from './AddTaskForm.module.css'

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText(""); // Limpiar el input después de agregar la tarea
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className={styles.button} type="submit">Agregar</button>
    </form>
  );
};

export default AddTaskForm;

