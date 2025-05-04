"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Numpad from "@/components/Numpad";
import Modal from "@/components/Modal";
import Time from "@/components/Time";
import PhotoSlider from "@/components/PhotoSlider";
import SeeEachOther from "@/components/SeeEachOther";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const correctPasscode = "221024";

  useEffect(() => {
    // Only run on the client
    if (typeof window !== "undefined") {
      const authorizedStatus = sessionStorage.getItem("isAuthorized");
      setIsAuthorized(authorizedStatus === "true");
    }
  }, []);

  const handlePasscodeSubmit = (enteredPasscode: string) => {
    if (enteredPasscode === correctPasscode) {
      setIsAuthorized(true);
      sessionStorage.setItem("isAuthorized", "true");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex justify-center bg-white">
      {!isAuthorized ? (
        <Numpad onSubmit={handlePasscodeSubmit} />
      ) : (
        <div className="grid grid-cols-2  gap-4 w-full p-4 max-w-[950px]">
          {/* First row - 2 boxes */}
          <div className="bg-mistyRose text-cusRose tablet:col-span-1 rounded-lg p-4 col-span-2 shadow-md">
            <h1 className="text-xl">We have been in love for</h1>
            <Time />
          </div>
          <div className="bg-mistyRose text-cusRose rounded-lg p-4 tablet:col-span-1 col-span-2 relative shadow-md">
            <h1 className="text-xl w-full mb-4">
              Let's see how committed you are to this relationship.
            </h1>
            <Link href="/tests">
              <button className="md:absolute bottom-2 right-2 bg-cusRose text-white rounded-md p-2 hover:bg-pink-200">
                Go to Questionnaire
              </button>
            </Link>
          </div>
          {/* Second row - 1 box spanning full width */}
          <div className=" col-span-2 shadow-md rounded-lg">
            <PhotoSlider />
          </div>
          <div className="bg-mistyRose text-cusRose tablet:col-span-2 rounded-lg p-4 col-span-2 shadow-md">
            <h1 className="text-xl">We will see each other in</h1>
            <SeeEachOther />
          </div>
        </div>
      )}
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </main>
  );
}
