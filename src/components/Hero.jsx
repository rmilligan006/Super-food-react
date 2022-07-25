import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:6xl lg:text-7xl font-bold">
            Super <span className="text-orange-400">Foods</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:6xl lg:text-7xl font-bold">
            <span className="text-orange-400">Delivered</span> To You
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" picture of food"
          className="w-full max-h-[500px] "
        />
      </div>
    </div>
  );
};

export default Hero;
