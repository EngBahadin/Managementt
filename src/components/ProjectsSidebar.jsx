import Button from "./Button";

export default function ProjectsSidebar({
  addProjectForm,
  setAddProjectForm,
  indexOfProject,
  setIndexOfProject,
  projectList,
}) {
  return (
    <>
      <section className="flex gap-10 flex-col items-center basis-2/5 md:basis-1/5 bg-stone-950  rounded-tr-xl">
        <h1 className="mt-14 text-xs md:text-xl sm:text-base font-bold text-stone-50">
          YOUR PROJECTS
        </h1>
        <button
          onClick={() => setAddProjectForm("B")}
          className=" p-1 md:p-3 sm:p-2 rounded-md md:text-md text-sm text-stone-300 bg-stone-700  hover:bg-stone-800 hover:text-stone-50"
        >
          + Add Project
        </button>
        <div className="flex flex-col gap-2">
          <Button
            setAddProjectForm={setAddProjectForm}
            projectList={projectList}
            setIndexOfProject={setIndexOfProject}
            indexOfProject={indexOfProject}
            addProjectForm={addProjectForm}
          />
        </div>
      </section>
    </>
  );
}
