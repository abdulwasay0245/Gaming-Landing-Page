import Image from "next/image";
import Navbar from "./component/Navbar";
import { orbitron } from "./component/fonts";



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white font-sans">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 mt-32 ml-14 text-center lg:text-left">
        
        <h2 className={`text-6xl font-medium leading-tight ${orbitron.className}`}>
          Let Your Mind <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Explore VR Game
          </span>
        </h2>
        <p className="text-gray-300 max-w-md">
          Whether you're a casual player or a competitive pro, we’ve got you covered with everything from action-packed blockbusters to hidden indie gems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-tr-xl rounded-bl-xl font-medium">
            Get started
          </button>
          <button className="flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-full">
            <span className="text-xl">▶</span> See Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
        <img
          src="/hero-image.png" // Make sure this image is in public/ folder
          alt="Girl with VR"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>

   <Navbar/>
  </div>
  );
}
