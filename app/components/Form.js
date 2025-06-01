"use client";
import React, { useState, useMemo } from "react";

export default function Form({ therapist }) {
  // Select TimeSlot
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDays = useMemo(
    () => therapist?.availability || [],
    [therapist]
  );
  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  return (
    <>
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        className="p-2 rounded border border-gray-300"
      >
        <option value="">Select a day</option>
        {availableDays.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      {selectedDay && (
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          <option value="">Select a time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
