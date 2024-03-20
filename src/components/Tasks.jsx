import { useRef, useState } from "react";

export default function Tasks({ projectList, setProjectList, projectId }) {
  const taskRef = useRef(null);
  const [taskEmpty, setTaskEmpty] = useState(false);
  let editFlag = false;
  let editIndex = null;

  async function handleAddTask() {
    if (!taskRef.current.value) setTaskEmpty(true);
    else {
      if (editFlag) {
        projectList[projectId].tasks[editIndex] = taskRef.current.value;
        editFlag = false;
        setProjectList((prev) => [...prev]);
      } else {
        await setProjectList((prev) => {
          const updatedProjects = [...prev];
          updatedProjects[projectId] = {
            ...updatedProjects[projectId],
            tasks: [...updatedProjects[projectId].tasks, taskRef.current.value],
          };
          return updatedProjects;
        });
      }
    }
    taskRef.current.value = "";
  }

  function handleDeleteTask(index) {
    setProjectList(() => {
      const newList = [...projectList];
      newList[projectId] = {
        ...newList[projectId],
        tasks: [...newList[projectId].tasks],
      };
      newList[projectId].tasks.splice(index, 1);
      return newList;
    });
  }

  function handleEditTask(index) {
    taskRef.current.value = projectList[projectId].tasks[index];
    editFlag = true;
    editIndex = index;
  }

  return (
    <>
      <label>
        <input
          onChange={() => {
            setTaskEmpty(false);
          }}
          required
          className="mr-4 w-2/4 p-1 rounded focus:outline-none bg-gray-200"
          type="text"
          ref={taskRef}
        />

        <button onClick={handleAddTask} className="hover:text-blue-500">
          Add Task
        </button>
        {taskEmpty && <p className="text-red-500 text-sm">Please add a Task</p>}
      </label>

      <div className="w-4/5 bg-stone-100 grid gap-2">
        {projectList[projectId].tasks.map((task, taskIndex) => (
          <div key={taskIndex} className="flex justify-between px-3 py-1">
            <p className=" text-blue-800 md:text-base text-xs ">
              {taskIndex + 1 + "- " + task}
            </p>
            <div className="flex items-center">
              <button
                onClick={() => {
                  handleEditTask(taskIndex);
                }}
                className="text-slate-950 hover:text-green-600 mx-4 md:text-base text-xs"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDeleteTask(taskIndex);
                }}
                className=" text-slate-950 hover:text-red-600 md:text-base text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
