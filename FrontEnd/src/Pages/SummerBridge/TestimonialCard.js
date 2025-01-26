import React from "react";

const TestimonialCard = ({ name, profile, course, university, testimonial }) => {
  return (
    <div className="flex-shrink-0 w-full bg-[#D9D9D9] shadow-md rounded-xl p-6 lg:flex-grow lg:max-w-lg">
      <div className="flex items-center mb-4">
        <img alt='' src={profile} className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0"/>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">
            Peserta{" "}
            <span className="text-red-500 font-semibold">{course}</span>,{" "}
            {university}
          </p>
        </div>
      </div>
      <div className="overflow-y-auto max-h-36">
        <p className="text-gray-700 text-sm leading-relaxed">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;