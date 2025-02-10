"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import QuizTest from "./questions";

export default function Questionnaire() {
  return (
    <div className="flex flex-col items-center pt-4 min-h-screen bg-gray-50 relative">
      <Link href="/">
        <button className="absolute flex items-center space-x-2 mb-4 text-cusRose left-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-cusRose">Back to Main Page</span>
        </button>
      </Link>
      <h1 className="text-2xl mb-6 mt-6 text-cusRose">Questionnaire</h1>
      <QuizTest />
    </div>
  );
}
