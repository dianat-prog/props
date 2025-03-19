//Aquí tendremos cada una de las tareas con las funcionalidades de `borrar` y `marcar como completada`. 
import React from "react";
import styles from "./Task.module.css";  


const Task = ({ id, text, completed, toggleTaskCompletion, deleteTask }) => {
  if (text === undefined) {
    console.error("Error: El texto de la tarea no está definido.");
    return null;
  }

  return (
    <div className={styles.container}>
        <li
            className={`${styles.taskItem} ${completed ? styles.completed : ""}`} 
            onClick={() => toggleTaskCompletion(id)} >
            {text}
            <button
                onClick={(event) => {
                event.stopPropagation(); // Evita que se active el toggle al eliminar
                deleteTask(id);
                }}
                className={styles.deleteButton}
                >
                Eliminar
            </button>
        </li>
    </div>
  );
};

export default Task;
