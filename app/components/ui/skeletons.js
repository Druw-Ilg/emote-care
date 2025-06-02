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

const profileWireframe = () => {
  return (
    <>
      {/* Therapist Profile Section */}
      <div class="md:col-span-2 bg-gray-300 rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/2 min-h-[240px] bg-gray-700 rounded-xl"></div>

        <div class="flex-1 flex flex-col gap-2">
          <div class="h-8 w-3/4 bg-gray-500 rounded"></div>
          <div class="h-4 w-full bg-gray-500 rounded"></div>
          <div class="h-4 w-full bg-gray-500 rounded"></div>
          <div class="h-4 w-full bg-gray-500 rounded mb-2"></div>
          <div class="h-24 bg-gray-500 rounded"></div>
        </div>
      </div>
    </>
  );
};

const formWireframe = () => {
  return (
    <>
      {/* Booking Form Section  */}
      <div class="bg-gray-300 border border-blue-200 shadow rounded-2xl p-6 flex flex-col">
        <div class="h-6 w-2/3 bg-gray-500 rounded mb-2"></div>
        <div class="h-4 w-full bg-gray-500 rounded mb-4"></div>

        <div class="flex flex-col gap-4">
          <div class="h-10 bg-gray-500 rounded"></div>
          <div class="h-10 bg-gray-500 rounded"></div>
          <div class="h-10 bg-gray-500 rounded"></div>
          <div class="h-24 bg-gray-500 rounded"></div>
          <div class="h-10 bg-gray-500 rounded w-1/2 self-start"></div>
        </div>
      </div>
    </>
  );
};
export { cardsWireframe, profileWireframe, formWireframe };
