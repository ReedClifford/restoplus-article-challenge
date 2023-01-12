const Buttons = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="border rounded-md px-4 py-2 z-50  hover:text-neutral-900 hover:bg-gradient-to-tr 
      from-neutral-300 to-slate-500 duration-500 ease-in-out "
    >
      {children}
    </button>
  );
};

export default Buttons;
