import React from "react";

const cardsWireframe = () => {
  return (
    //  Wireframe for Therapist Card Component
    <div className="w-[300px] h-[460px] bg-[#fafafa] rounded-2xl shadow p-4 flex flex-col gap-2">
      <div className="w-full h-[300px] bg-gray-500 rounded-xl"></div>
      <div className="w-3/4 h-5 bg-gray-500 rounded"></div>
      <div className="w-2/3 h-4 bg-gray-400 rounded"></div>
      <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
      <div className="w-2/3 h-4 bg-gray-400 rounded"></div>
      <div className="mt-2 w-1/2 h-10 bg-gray-500 rounded"></div>
    </div>
  );
};

export { cardsWireframe };
