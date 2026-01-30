"use client";

import Link from "next/link";
import { Home, ArrowLeft, ImageOff, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center justify-center bg-gray-50/50 p-4">
      <div className="relative mb-12">
        <div className="relative z-10 w-64 h-64 bg-white rounded-3xl shadow-xl flex items-center justify-center -rotate-6 border border-gray-100">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
          </div>

          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center shadow-inner">
            <ImageOff className="w-10 h-10 text-blue-500" />
          </div>
        </div>

        <div className="absolute top-10 -left-6 z-20 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg -rotate-12">
          <span className="text-white text-3xl font-bold">?</span>
        </div>

        <div className="absolute bottom-10 -right-6 z-20 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg rotate-12 border border-gray-100">
          <Search className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-6">

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>

        <p className="text-gray-500 text-lg">
          The project you are looking for doesn't exist or has been moved. Let's get you back to your workspace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-all border border-gray-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
