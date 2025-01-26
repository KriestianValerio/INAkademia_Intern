const { forwardRef } = require("react");

const Textarea = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <textarea
          {...props}
          className={`${className} bg-[#D9D9D9] rounded-2xl p-2 px-4 placeholder:text-[#D9D9D9] placeholder:font-medium ${
            props.invalid ? "border-red-500 border" : "border-none"
          }`}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Textarea;
