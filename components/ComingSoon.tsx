"use client";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-600 dark:text-gray-400">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
          {title} Page Coming Soon
        </h1>
        <p className="text-lg md:text-xl opacity-80">
          We&apos;re working on something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
