import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
 const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
// this ref which forwarded from the other component will be used with useImperativeHandle and access the showModal dialog ref is 
// referred to the dialog element  
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  // method="dialog" its to close the modal
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="rounded-lg p-1 md:p-3 sm:p-2  text-stone-300 bg-stone-700  hover:bg-stone-800 hover:text-stone-50">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")//the createPortal is used to locate the the code or this modal so here we located in modal-root
  );
});

export default Modal;
