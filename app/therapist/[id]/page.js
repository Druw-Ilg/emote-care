import React from "react";
import { therapists } from "@/app/lib/data";
import Link from "next/link";
import Form from "@/app/components/Form";
import TherapistProfile from "@/app/components/TherapistProfile";

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
        <TherapistProfile therapist={therapist} />

        <Form therapist={therapist} />
      </main>
    </div>
  );
}
