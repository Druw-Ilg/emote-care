"use client";
import Image from "next/image";
import { Suspense, useState } from "react";
import { cardsWireframe } from "./ui/skeletons";
import Link from "next/link";
import { Spinner } from "./ui/utils";

export default function TherapistCard({ therapist }) {
  const [loading, setLoading] = useState(false);
  return (
    <Suspense fallback={cardsWireframe}>
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
        <p className="text-sm text-gray-500">
          {therapist.availability.join(", ")}
        </p>
        <Link
          href={`/therapist/${therapist.id}`}
          className="cursor-pointer mt-2 bg-[#bfd962] text-black px-4 py-2 rounded text-center hover:bg-[#bfd962b3]"
          onClick={() => setLoading(!loading)}
        >
          {loading ? <Spinner /> : <span>View Profile</span>}
        </Link>
      </div>
    </Suspense>
  );
}
