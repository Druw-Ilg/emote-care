import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-50 left-10 right-10">
      <div className="text-center">
        <h2>Not Found</h2>
        <p>Sorry, we could not find your request.</p>
        <div className="mt-10">
          <Link
            href="/"
            className="bg-blue-500 p-2 rounded-sm hover:bg-blue-600"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
