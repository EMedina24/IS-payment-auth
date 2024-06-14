
"use client";
import Image from "next/image";
import { HostedForm } from 'react-acceptjs';
import { useState } from "react";
import{ authData} from "./authorize.net";

export default function Home() {


  const handleSubmit = (response:any) => {
    console.log('Received response:', response);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Image skincare payment authorization
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
             Please click pay and fill out the form below to authorize payment for your Image Skincare products.
            </p>
            <div className="flex md:mt-4 mt-6">
          
              <HostedForm buttonClassName="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded" authData={authData} onSubmit={handleSubmit} />
           
           
              <a target="_blank" className="text-blue-500 inline-flex items-center ml-4" href="https://imageskincare.com">
               Return to Image Skincare
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
