const { forwardRef } = require("react");

const Textarea = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <input
          {...props}
          className={`${className} bg-[#ffffff] rounded-full p-6 placeholder:text-slate-500 placeholder:font-medium h-10 ${
            props.invalid ? "border-red-500 border" : "border-none"
          }`}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Textarea;
