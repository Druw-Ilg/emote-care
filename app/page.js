"use client";
import React, { useState } from "react";
import { TherapistContext } from "./context/TherapistContext";
import FilterBar from "./components/FilterBar";
import TherapistList from "./components/TherapistList";

export default function Home() {
  const [filters, setFilters] = useState({
    specialization: "",
    location: "",
    availability: "",
  });

  return (
    <TherapistContext.Provider value={{ filters, setFilters }}>
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Find Your Therapist</h1>
        <FilterBar />
        <TherapistList />
      </main>
    </TherapistContext.Provider>
  );
}
