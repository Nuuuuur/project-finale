import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "../index.css";
const TaskForm = () => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [date, setLoad] = useState("");
  const [description, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const task = { title, date, description };

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_TASK", payload: json });
    }
  };

  return (
    <div className="form-container">
      <form className="create" onSubmit={handleSubmit}>
        <div className="add-new">
          <h3>Add a New Tasks</h3>
        </div>
        <div className="container-form">
          <label>Task Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes("title") ? "error" : ""}
          />

          <label>date </label>
          <input
            type="Date"
            onChange={(e) => setLoad(e.target.value)}
            value={date}
            className={emptyFields.includes("date") ? "error" : ""}
          />

          <label>Description</label>
          <div className="description-area">
            <textarea
              type="text"
              onChange={(e) => setReps(e.target.value)}
              value={description}
              className={emptyFields.includes("description") ? "error" : ""}
            />
          </div>

          <button>Add Task</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
