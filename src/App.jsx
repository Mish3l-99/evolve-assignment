import { useEffect, useState } from "react";
import {
  BsBookmarkCheck,
  BsCheck2Circle,
  BsFillRecordCircleFill,
} from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([
    {
      main: "work hard!",
      completed: false,
    },
    {
      main: "win!",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const addNew = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      setTasks((tasks) => [{ main: newTask, completed: false }, ...tasks]);
    }
    setNewTask("");
  };

  const deleteTask = (tsk) => {
    var filteredArray = tasks.filter((t) => {
      return t.main !== tsk;
    });
    setTasks(filteredArray);
  };

  const completeTask = (tsk) => {
    var newTasks = [];

    tasks.map((t, i) => {
      if (t.main === tsk) {
        if (t.completed) {
          newTasks.push({ main: t.main, completed: false });
        } else {
          newTasks.push({ main: t.main, completed: true });
        }
      } else {
        newTasks.push(t);
      }
    });

    setTasks(newTasks);
  };

  // useEffect(() => {
  //   tasks.reverse();
  // }, [tasks]);

  return (
    <div className="w-full py-4">
      <div className="w-full px-4 flex justify-center items-center">
        <div className="box">
          <div className="flex items-center gap-x-2">
            <BsBookmarkCheck />
            <h1>What is your plan ?!</h1>
          </div>
          <form action="" className="w-full flex items-center gap-x-4">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              plcaeholder="write a task here..."
            />
            <button
              onClick={(e) => addNew(e)}
              className="bg-blue-900 px-3 py-1 rounded flex items-center gap-x-2"
            >
              <AiOutlineAppstoreAdd />
              Add
            </button>
          </form>
          {/* tasks are here */}
          <div className="flex flex-col w-full gap-y-2">
            {tasks.length > 0 ? (
              tasks.map((t, i) => (
                <div key={i} className="task">
                  <span>
                    <BsFillRecordCircleFill
                      size={12}
                      className="text-slate-800"
                    />
                  </span>
                  <p className="flex-1">{t.main}</p>
                  <div className="flex items-center gap-x-2">
                    <BsCheck2Circle
                      onClick={() => completeTask(t.main)}
                      className={t.completed ? "text-green-500" : ""}
                    />
                    <FaTrash
                      onClick={() => deleteTask(t.main)}
                      size={14}
                      className="hover:text-red-600"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>No tasks added yet !</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
