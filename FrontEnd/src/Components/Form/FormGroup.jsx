const { Label } = require("flowbite-react");

function FormGroupLabel({ children }) {
  return (
    <>
      <label className='font-medium text-[#292929]'>{children}</label>
    </>
  );
}

function FormGroup({ children, className = "" }) {
  return (
    <>
      <div className={`grid gap-2 ${className} w-full`}>{children}</div>
    </>
  );
}

export function FormFeedback({ children }) {
  return (
    <>
      <p className='text-red-500 text-xs relative -top-1'>{children}</p>
    </>
  );
}

FormGroup.Label = FormGroupLabel;
export default FormGroup;
