import { useState } from "react";
//.import the tasks.json file
import tasksData from "../backend/tasks.json";
import { Task } from "./task";

export class TaskManager {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  loadTasks(): void {
    this.tasks = tasksData.map(
      (t: {
        id: number;
        checked: boolean;
        title: string;
        description: string;
        deadline: string | number | Date;
      }) =>
        new Task(t.id, t.checked, t.title, t.description, new Date(t.deadline))
    );
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

export function TaskRegion() {
  const taskmng = new TaskManager();
  useState(taskmng.loadTasks());

  return (
    <div style={{ padding: "10px" }}>
      <ul style={{ padding: 0, margin: 0 }}>
        {taskmng.getAllTasks().map((t) => (
          <li
            key={t.id}
            style={{
              listStyleType: "none",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.5",
            }}
          >
            <input
              type="checkbox"
              checked={t.checked}
              onChange={(e) => t.handleCheckboxChange(e.target.checked)}
              style={{ marginBottom: "6px" }}
            />
            <strong>{t.title}</strong>
            <span>{t.description}</span>
            <small>Deadline: {t.deadline.toDateString()}</small>
          </li>
        ))}
      </ul>

      <button style={{ marginTop: "10px" }}>Add Task</button>
    </div>
  );
}
