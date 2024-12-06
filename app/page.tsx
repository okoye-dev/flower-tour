"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startTour = () => {
    router.push("/tour");
  };

  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <p className="text-balance">
            Welcome, <br />{" "}
            <i className="text-purple-600 font-semibold">Marceline</i>, the
            Vampire Queen.
          </p>
          <p className="text-white/50">Your tour awaits.</p>
          <div className="bg-pink-900 mt-3 text-xs border-pink-700 text-red-200 border p-2 rounded-xl">
            Also, please don&apos;t suck the red out of our flowers.
          </div>
        </div>

        <button
          type="button"
          onClick={startTour}
          className="bg-pink-500 hover:bg-pink-600 duration-300 text-white py-3 px-6 rounded-2xl font-semibold w-fit"
        >
          Begin tour
        </button>
      </div>
    </div>
  );
}
