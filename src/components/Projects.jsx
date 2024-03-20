export default function Projects({ setAddProjectForm }) {
  return (
    <article className="flex-col  flex justify-center items-center">
      <img
        className=" h-32 w-18 object-contain"
        src="./assets/no-projects.png"
        alt=""
      />

      <h2 className="mt-5 text-stone-700 font-bold text-2xl">No project yet</h2>
      <p className="mt-2 text-stone-500 md:text-base text-center text-sm">
        Select a project or get started with a new one
      </p>
      <button
        onClick={() => setAddProjectForm("B")}
        className="  mt-8  md:px-3 py-2 md:text-base px-2 rounded-md text-sm text-stone-300 bg-stone-700  hover:bg-stone-800 hover:text-stone-50"
      >
        Create new project
      </button>
    </article>
  );
}
