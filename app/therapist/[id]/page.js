import React from "react";
import { therapists } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import NoTherapist from "@/app/components/notherapist";

export default async function TherapistProfilePage(props) {
  const params = await props.params;
  const id = params.id;

  const therapist = therapists.find((t) => t.id === id);

  if (!therapist) return <p className="p-4">Therapist not found.</p>;

  return (
    <div className="mx-10">
      {/* A breadcrumb to facilitate navigation */}
      <nav className="ml-20">
        <ol className="flex ">
          <li className="hover:text-gray-500 mr-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-gray-400">
            <span> / </span>
            {therapist.name}
          </li>
        </ol>
      </nav>
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={therapist.photo}
              alt={therapist.name}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">{therapist.name}</h1>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Specialization:</strong> {therapist.specialization}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Location:</strong> {therapist.location}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Availability:</strong> {therapist.availability}
              </p>
              <p className="text-base leading-relaxed">
                {therapist.bio || (
                  <p>This therapist doesn&apos;t have a bio yet.</p>
                )}
              </p>
            </div>
          </div>
        </section>

        <aside className="bg-blue-50 border border-blue-100 shadow-md rounded-2xl p-6">
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

            <input
              type="date"
              name="date"
              className="p-2 rounded border border-gray-300"
            />

            <textarea
              placeholder="What would you like to discuss?"
              className="p-2 rounded border border-gray-300"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </form>
        </aside>
      </main>
    </div>
  );
}
