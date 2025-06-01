"use client";
import { useContext } from "react";
import { TherapistContext } from "../context/TherapistContext";

export default function FilterBar() {
  const { filters, setFilters } = useContext(TherapistContext);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 shadow rounded-xl">
      <select
        name="specialization"
        value={filters.specialization}
        onChange={handleChange}
        className="p-2 rounded border"
      >
        <option value="">Specialization</option>
        <option value="Anxiety">Anxiety</option>
        <option value="Depression">Depression</option>
        <option value="Relationships">Relationships</option>
      </select>
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="p-2 rounded border"
      >
        <option value="">Location</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Online">Online</option>
      </select>
      <select
        name="availability"
        value={filters.availability}
        onChange={handleChange}
        className="p-2 rounded border"
      >
        <option value="">Availability</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </div>
  );
}
