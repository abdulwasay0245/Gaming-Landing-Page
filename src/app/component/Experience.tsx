'use client'
import { useEffect } from "react";
import Button from "./Button";
import { orbitron } from "./fonts";
import AOS from 'aos'
import 'aos/dist/aos.css';

/* eslint-disable @next/next/no-img-element */
export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },[])
    return (
      <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div data-aos = "fade-up" className="grid grid-cols-2 gap-4">
            <div className="rounded-tl-[100px] overflow-hidden">
              <img src="/Frame 7.png" alt="VR user 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-t-[100px] overflow-hidden">
              <img src="/Frame 8.png" alt="VR user 2" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 rounded-bl-[100px] overflow-hidden">
              <img src="/Frame 9.png" alt="VR user 3" className="w-full h-full object-cover" />
            </div>
          </div>
  
          {/* Text Content */}
          <div data-aos = "fade-in">
            <h2 className="text-4xl font-normal mb-4" style={orbitron.style}>
              <span className="text-[#d96cfb]">Experience</span>{" "}
              the world <br /> like never before
            </h2>
            <p className="text-gray-300 mb-6">
              At VR we create worlds where imagination becomes reality. <br />
              Our mission is to unlock new dimensions of gaming through
              immersive virtual experiences. From epic adventures to
              breathtaking visuals, we transport players to places they have
              only dreamed of.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md">
              Play now
            </button>
          </div>
        </div>
  
        {/* Footer section */}
        <div data-aos= "fade-up" className="mt-20 text-center">
          <h3 className="text-3xl font-semibold">
            Find Your perfect <span className="text-blue-400">VR</span>{" "}
            <span className="text-[#d96cfb]">Experience</span>
          </h3>
          <Button text="View more"/>
        </div>
      </section>
    );
  }
  