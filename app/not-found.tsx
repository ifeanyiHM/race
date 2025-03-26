import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center dark:bg-gray-900">
      <h1 className="text-8xl font-bold text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          Go Home
        </button>
      </Link>
    </div>
  );
}
