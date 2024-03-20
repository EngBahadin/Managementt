import { useState } from "react";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectsForm";
import Project from "./components/Project";
import ProjectsSidebar from "./components/ProjectsSidebar";
function App() {
  const [addProjectForm, setAddProjectForm] = useState("A");
  const [indexOfProject, setIndexOfProject] = useState();
  const [projectList, setProjectList] = useState([]);
  return (
    <>
      <main className=" h-screen flex flex-row mt-10">
        <ProjectsSidebar
          addProjectForm={addProjectForm}
          setAddProjectForm={setAddProjectForm}
          indexOfProject={indexOfProject}
          setIndexOfProject={setIndexOfProject}
          projectList={projectList}
        />
        <section className=" basis-4/5 w-full mr-1 mt-12 ml-2">
          {addProjectForm === "A" && (
            <Projects setAddProjectForm={setAddProjectForm} />
          )}
          {addProjectForm === "B" && (
            <ProjectForm
              setAddProjectForm={setAddProjectForm}
              setProjectList={setProjectList}
              projectId={projectList.length}
            />
          )}
          {addProjectForm === "C" && (
            <Project
              setAddProjectForm={setAddProjectForm}
              setProjectList={setProjectList}
              projectList={projectList}
              projectId={indexOfProject}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
