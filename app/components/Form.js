"use client";
import React, { useState, useMemo, Suspense } from "react";
import { formWireframe } from "./ui/skeletons";

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
    <Suspense fallback={formWireframe}>
      <aside className="bg-green-50 border border-blue-100 shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">
          Book a Session
        </h2>
        <p className="text-sm text-blue-700 mb-4">
          You&apos;re one step closer to improving your mental wellbeing. Take
          the first step today.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 rounded border border-gray-300"
          />
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
          <textarea
            placeholder="What would you like to discuss?"
            className="p-2 rounded border border-gray-300"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-[#bfd962] cursor-pointer text-black py-2 rounded hover:bg-[#bfd962b3]"
          >
            Confirm Booking
          </button>
        </form>
      </aside>
    </Suspense>
  );
}
