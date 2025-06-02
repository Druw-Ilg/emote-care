"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { formWireframe } from "./ui/skeletons";

export default function TherapistProfile({ therapist }) {
  return (
    <Suspense fallback={formWireframe}>
      <section className="md:col-span-2 bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:min-w-100 md:min-h-80">
            <Image
              src={therapist.photo}
              alt={therapist.name}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{therapist.name}</h1>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Specialization:</strong> {therapist.specialization}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Location:</strong> {therapist.location}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <strong>Availability:</strong> {therapist.availability.join(", ")}
            </p>
            <p className="text-base leading-relaxed">
              {therapist.bio || (
                <p>This therapist doesn&apos;t have a bio yet.</p>
              )}
            </p>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
