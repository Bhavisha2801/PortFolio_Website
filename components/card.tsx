"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="md:px-8 lg:px-40 px-4" id="cv">
      <div className="container px-4 sm:px-8 py-8 mx-auto">
        <div className="flex flex-wrap">
          <div className="">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              CV
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500"></p>
        </div>
        <CardContainer className="inter-var w-full px-4 sm:px-8 lg:px-40">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-full h-100 rounded-xl p-4 sm:p-6 border">
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <CardItem
                translateZ={0}
                as={Link}
                href="https://www.canva.com/design/DAE57UMe2jc/Lz-YlHlE2W9NLIXMTh_O1g/view?utm_content=DAE57UMe2jc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white mb-2 sm:mb-0 sm:mr-4"
              >
                See CV →
              </CardItem>
              <CardItem
                translateZ={0}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/Bhavisha2801" target="_blank">
                  GitHub
                </Link>
              </CardItem>
            </div>
            <Link
              href="https://www.canva.com/design/DAE57UMe2jc/Lz-YlHlE2W9NLIXMTh_O1g/view?utm_content=DAE57UMe2jc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="__blank"
            >
              <CardItem
                translateZ={0}
                className="w-full mt-4 h-100 md:h-90"
              >
                {/* Adjust height and width as needed */}
                <Image
                  src="/images/resume.png"
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </Link>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
