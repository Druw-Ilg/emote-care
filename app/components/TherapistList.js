import TherapistCard from "./TherapistCard";
import { therapists } from "@/app/lib/data";
import { useContext } from "react";
import { TherapistContext } from "../context/TherapistContext";

export default function TherapistList() {
  const { filters } = useContext(TherapistContext);

  const filteredTherapists = therapists.filter((t) => {
    return (
      (!filters.specialization ||
        t.specialization === filters.specialization) &&
      (!filters.location || t.location === filters.location) &&
      (!filters.availability || t.availability === filters.availability)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {filteredTherapists.map((therapist) => (
        <TherapistCard key={therapist.id} therapist={therapist} />
      ))}
    </div>
  );
}
