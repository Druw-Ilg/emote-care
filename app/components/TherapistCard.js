"use client";
import Image from "next/image";
import { Suspense } from "react";
import { cardsWireframe } from "./ui/skeletons";
import Link from "next/link";

export default function TherapistCard({ therapist }) {
  return (
    <Suspense callback={cardsWireframe}>
      <div className="bg-[#fafafa] rounded-2xl shadow p-4 flex flex-col">
        <Image
          src={therapist.photo}
          alt={therapist.name}
          width={400}
          height={300}
          className="rounded-xl bg-center object-cover mb-2 max-h-77"
        />
        <h3 className="text-lg font-semibold">{therapist.name}</h3>
        <p className="text-sm text-gray-500">{therapist.specialization}</p>
        <p className="text-sm text-gray-500">{therapist.location}</p>
        <p className="text-sm text-gray-500">{therapist.availability}</p>
        <Link
          href={`/therapist/${therapist.id}`}
          className="cursor-pointer mt-2 bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
        >
          View Profile
        </Link>
      </div>
    </Suspense>
  );
}
