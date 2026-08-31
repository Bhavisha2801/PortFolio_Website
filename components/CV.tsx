"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CV() {
  return (
    <section className="md:px-8 lg:px-40 px-4" id="cv">
      <div className="container px-4 sm:px-8 py-12 mx-auto">
        {/* Section Heading */}
        <div className="mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            CV
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>

        {/* CV Preview */}
        <div className="w-full max-w-4xl mx-auto">
          <Link
            href="https://canva.link/7uy4ndu68iobqfq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
              <Image
                src="/images/image.png"
                height={1000}
                width={1000}
                className="w-full h-auto object-contain"
                alt="CV Preview"
              />
            </div>
          </Link>
        </div>

        {/* View CV Button */}
        <div className="flex justify-center mt-6">
          <Link
            href="https://canva.link/7uy4ndu68iobqfq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
          >
            View Full CV
          </Link>
        </div>
      </div>
    </section>
  );
};
