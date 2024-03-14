import axios from "axios";
import { useEffect, useState } from "react";
export default function Todo() {
  const [todos, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [target, setTarget] = useState(false);

  useEffect(() => {
    axios.get("/todo").then((response) => {
      setTodo(response.data);
    });
  }, []);

  async function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      title: "",
      completed: false,
    };
    try {
      const response = await axios.post("/todo", newTodo);
      const addedTodo = response.data;
      setTodo([...todos, addedTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
  async function editTodo(id, updatedTitle) {
    if (!updatedTitle) {
      setEdit(false);
      return;
    }
    try {
      console.log(updatedTitle);
      const response = await axios.put(`/todo/${id}`, { title: updatedTitle });
      const updatedTodo = response.data;
      setTodo(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
      setEdit(false);
      setTarget("");
    } catch (error) {
      console.log("Error editing todo:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      const response = await axios.delete(`/todo/${id}`);
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodo(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function completeTodo(id, todoCom) {
    try {
      const response = await axios.put(`/todo/${id}`, { completed: !todoCom });
      const updatedTodo = response.data;
      setTodo(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (error) {
      console.log("Error In Editing Todo:", error);
    }
  }
  return (
    <>
      <div className="flex justify-between text-white border-b-2 border-slate-800 ">
        <div className="text-4xl mx-4 mt-4">ToDo</div>
        <div>
          <button onClick={addTodo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-4 mt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      {todos?.length > 0 &&
        todos.map((todo) => (
          <div className="flex items-center h-12 shadow-md rounded-2xl my-4 mx-4 p-2 bg-slate-800 text-white">
            <div className="w-10 flex justify-center">
              <input
                type="checkbox"
                className="h-6 w-6 rounded-full "
                checked={todo.completed}
                onClick={() => completeTodo(todo._id, todo.completed)}
              />
            </div>
            <div className="flex justify-between w-full">
              {edit === todo._id ? (
                <>
                  <div
                    contentEditable
                    suppressContentEditableWarning={true}
                    className={
                      todo.completed
                        ? "w-full line-through text-2xl"
                        : "w-full text-2xl"
                    }
                    onInput={(e) => setTarget(e.target.textContent)}
                  >
                    {todo.title}
                  </div>
                  <button
                    name="save"
                    className="mx-2"
                    onClick={() => {
                      editTodo(todo._id, target);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <div
                    className={
                      todo.completed
                        ? "w-full line-through text-2xl"
                        : "w-full text-2xl"
                    }
                  >
                    {todo.title}
                  </div>
                  <button
                    name="edit"
                    className="mx-2"
                    onClick={() => setEdit(todo._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                </>
              )}
              <button className="mx-2" onClick={() => deleteTodo(todo._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
