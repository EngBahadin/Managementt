import { useRef } from "react";
import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function ProjectForm({
  setAddProjectForm,
  setProjectList,
  projectId,
}) {
  const [titleEmpty, setTitleEmpty] = useState(false); // to know if the input is empty
  const [descEmpty, setDescEmpty] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const modal = useRef();

  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function handleInputChange() {
    // if the user wrote something is the input change the states
    setTitleEmpty(false);
    setDescEmpty(false);
    setDateEmpty(false);
  }

  function handleSetContent() {
    const titleValue = titleRef.current.value;
    const descValue = descRef.current.value;
    const dateValue = dateRef.current.value;

    if (
      titleValue.trim() === "" &&
      descValue.trim() === "" &&
      dateValue.trim() === ""
    ) {
      modal.current.open();
      console.log("yes");
      return;
    }
    if (!titleValue) {
      setTitleEmpty(true);
    }
    if (!descValue) {
      setDescEmpty(true);
    }
    if (!dateValue) {
      setDateEmpty(true);
    }

    if (titleValue && descValue && dateValue) {
      setProjectList((prev) => [
        ...prev,
        {
          id: projectId,
          title: titleValue,
          description: descValue,
          date: dateValue,
          tasks: [],
        },
      ]);
      setAddProjectForm("A");
    }
  }
// in this modal we referenced it with the modal ref
  return (
    <>
      <article>
        <Modal ref={modal} buttonCaption="Okay">
          <h2 className="text-xl font-bold text-stone-700 my-4">
            Invalid Input
          </h2>
          <p className="text-stone-600 mb-4">
            Oops ... looks like you forgot to enter the values.
          </p>
          <p className="text-stone-600 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </Modal>

        <article className="flex justify-end">
          <button
            onClick={() => setAddProjectForm("A")}
            className="py-2 px-5 text-stone-500 hover:text-stone-900"
          >
            Cancel
          </button>
          <button
            onClick={handleSetContent}
            className="rounded-lg py-2 px-5 text-stone-300 bg-stone-700  hover:bg-stone-800 hover:text-stone-50"
          >
            Save
          </button>
        </article>
        <article className="flex flex-col gap-y-3">
          <Input
            label="TITLE"
            ref={titleRef}
            onChange={handleInputChange}
            type="text"
            emptyContent={titleEmpty}
          />
          <Input
            label="DESCRIPTION"
            ref={descRef}
            onChange={handleInputChange}
            type="text"
            emptyContent={descEmpty}
            textarea
          />
          <Input
            label="DUE DATE"
            ref={dateRef}
            onChange={handleInputChange}
            type="date"
            emptyContent={dateEmpty}
          />
        </article>
      </article>
    </>
  );
}
