
"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var gap-5 max-w-6xl ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
       
        <CardItem translateZ="100" className="w-full mt-4">
                <Image
            src="/images/h1.jpg"
            alt="image"
            width={400}  
            height={200}
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h2 className="text-xl">The Grand London Resort and Spa</h2>
            <p>Westminster, London</p>
            <p>Starting from US$72</p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            2,345 Reviews
          </CardItem>
        </div>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
       
        <CardItem translateZ="100" className="w-full mt-4">
                <Image
            src="/images/h2.jpg"
            alt="image"
            width={400}  
            height={200}
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h2 className="text-xl">Barcelona City Suites Deluxe Hotel</h2>
            <p>Ciutat Vella, Barcelona</p>
            <p>Starting from US$72</p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            2,345 Reviews
          </CardItem>
        </div>
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
       
        <CardItem translateZ="100" className="w-full mt-4">
                <Image
            src="/images/h3.jpg"
            alt="image"
            width={400}  
            height={200}
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h2 className="text-xl">Times Square Premium Stay Hotel</h2>
            <p>Manhattan, New York</p>
            <p>Starting from US$72</p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            2,345 Reviews
          </CardItem>
        </div>
      </CardBody>
     
     
     
     
    </CardContainer>
  );
}
