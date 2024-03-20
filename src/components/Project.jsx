
import Tasks from "./Tasks";

export default function Project({
  setAddProjectForm,
  setProjectList,
  projectList,
  projectId,
}) {
  
  const { title, description, date } = projectList[projectId];
  
  const formattedDate = new Date(date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );



  function handleDeleteProject() {
    setProjectList(() => {
      const newList = [...projectList];
      newList.splice(projectId, 1);
      setAddProjectForm("A");
      return newList;
    });
  }

  return (
    <article>
      <header className="grid px-5 gap-4">
        <title className="flex justify-between ">
          <h1 className=" md:text-4xl text-xl font-bold">{title}</h1>
          <button
            onClick={handleDeleteProject}
            className=" md:text-xl text-md hover:text-red-500"
          >
            Delete
          </button>
        </title>
        <p className="text-gray-400">{formattedDate}</p>
        <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
      </header>
      <hr className="h-[1.5px] my-4 bg-gray-300" />
      <footer className="grid px-5 gap-y-7">
        <h2 className="font-bold text-xl text-gray-800">Tasks</h2>


        <Tasks
          projectId={projectId}
          setProjectList={setProjectList}
          projectList={projectList}
        />

        {!projectList[projectId].tasks.length && (
          <p className="md:text-md text-sm">This project does not have any tasks yet.</p>
        )}
      </footer>
    </article>
  );
}
