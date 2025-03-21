import Image from "next/image";
import React from "react";

const StallDemo = () => {
  return (
    <div className="w-screen min-h-dvh relative overflow-hidden">
      {/* Board for the company name */}
      <div className="w-full h-[20vh] ">
        <div className="flex flex-col w-full items-center">
          <div className=" lg:w-[50vw] max-sm:w-[60vw] md:w-[60vw] lg:h-8 h-5 flex justify-between sm:landscape:w-[50vw]">
            <div className="h-full w-[3px] bg-black"></div>
            <div className="h-full w-[3px] bg-black"></div>
          </div>
          <div className="bg-gray-300 h-[10vh] lg:w-[65vw] max-sm:w-[80vw] md:w-[80vw] flex justify-center items-center sm:landscape:w-[70vw]">
            <div className="lg:text-6xl text-xl text-black">Company Name</div>
          </div>
        </div>
      </div>

      {/* This is the space for the company banner */}
      <div className="w-full h-[20vh] ">
        <div className="bg-gray-500 flex justify-center items-center h-full w-full">
          <div className="lg:text-3xl">Company Banner</div>
        </div>
      </div>

      {/* This is the space for the company mission statement */}
      <div className="h-[60vh] w-full  flex ">
        <div className="h-full lg:w-[75vw] md:w-[60vw] max-sm:w-[60vw] sm:landscape:w-[82vw]"></div>

        {/* in the following section there is a image of a man and a table */}
        <div className="h-full lg:w-[25vw] md:w-[40vw] relative flex flex-1 justify-center ">

            {/* Image of the avatar */}
          <div className="absolute z-1 bottom-0">
            <Image
              src={"/avatar.png"}
              alt="erv"
              height={220}
              width={230}
              className="lg:h-[52vh] md:h-[50vh] h-[60vh] max-sm:h-[37vh] sm:landscape:h-[45vh] sm:landscape:w-[10vw]"
            />
          </div>

          {/* Table Image as background */}
          <div className="absolute z-5 lg:bottom-[-65px] md:bottom-[-14vh] bottom-[-55px] sm:landscape:bottom-[-14vh]">
            <Image
              src={"/table.png"}
              alt="Table"
              width={500}
              height={100}
              className="object-fit lg:h-[70vh] h-[90vh] md:h-[80vh] max-sm:h-[50vh] sm:landscape:h-[70vh] sm:landscape:w-[40vh]"
            />
          </div>

          {/* Logo on the table */}
          <div className="absolute z-10 bottom-0 md:bottom-[12vh] max-sm:bottom-[8vh] sm:landscape:bottom-[7vh]">
            <Image
              src={"/opexn_logo.png"}
              width={120}
              height={50}
              alt="logo"
              className="object-fit lg:h-12 md:h-10 w-full max-sm:h-5 sm:landscape:h-[5vh] md:landscape:h-[4vh] md:landscape:w-[10vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallDemo;
