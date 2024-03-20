export default function Button({
  setIndexOfProject,
  projectList,
  setAddProjectForm,
  indexOfProject,
  AddProjectForm,
}) {
  const hoverClasses =
    " bg-stone-500 text-white md:w-52 sm:w-40 w-24 rounded md:h-7  hover:text-yellow-100 hover:bg-stone-600";
    const classes= hoverClasses+" bg-stone-900"
    
  function handleTask(index) {
    setIndexOfProject(index);
    setAddProjectForm("C");
  }
  return (
    <>
      {projectList.map((row, rowIndex) => (
        <button
          key={rowIndex}
          className={
            indexOfProject === rowIndex && AddProjectForm === "C"
              ? hoverClasses
              : classes
          }
          onClick={() => {
            handleTask(rowIndex);
          }}
        >
          {row.title}
        </button>
      ))}
    </>
  );
}
