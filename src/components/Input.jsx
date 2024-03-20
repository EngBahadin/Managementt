import React from "react";

const Input = React.forwardRef(
    ({ label, emptyContent, textarea, ...props }, ref) => {
        
        const classes =
          "border-b-2 border-solid focus:outline-none focus:border-stone-600 border-stone-300 bg-gray-200 w-full rounded";
 
        return (
          <menu>
            <label className="text-gray-500">{label}</label>
            {textarea ? (
              <textarea ref={ref} className={classes} {...props} />
            ) : (
              <input ref={ref} className={classes} {...props} />
            )}
            {emptyContent && (
              <p className="text-red-500 text-sm">Please fill the input</p>
            )}
          </menu>
        );
  }
);

export default Input;
