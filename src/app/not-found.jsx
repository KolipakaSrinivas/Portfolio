import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 mt-[55px] flex items-center flex-col justify-center">
      <h2 className="text-2xl font-bold text-white">Not Found</h2>
      <p className="text-[#ABB2BF]">Could not find requested resource</p>
      <Link
        href="/"
        className="text-blue-500 underline mb-5 hover:text-blue-400"
      >
        Return Home
      </Link>
    </div>
  );
}
