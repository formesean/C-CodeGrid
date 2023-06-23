import React from "react";

function About() {
  const divStyle =
    "m-4 max-xl:text-sm max-lg:text-xs hover:scale-105 rounded-[10px] border-2 border-appBlack dark:border-appWhiteHigh dark:text-appWhiteHigh leading-8 ease-in duration-300";

  return (
    <section className="p-16 pt-4 pb-20 max-xl:px-8 max-sm:px-0 flex h-screen">
      <div className="grid grid-cols-3 grid-rows-2 max-md:grid-cols-5 max-sm:grid-rows-3 gap-x-2">
        <div
          className={`row-span-1 col-span-2 max-md:col-span-3 max-sm:col-span-5 ${divStyle}`}
        >
          <p className="px-8 text-center flex justify-center items-center h-full">
            Welcome to C CodeGrid, your ultimate resource for university and
            entry-level C programming! Our project is a comprehensive
            compilation of C programming source codes designed to guide
            beginners through the fundamentals and advance their skills to the
            level of data structures and algorithms.
          </p>
        </div>
        <div
          className={`row-span-2 col-span-1 max-md:col-span-2 max-sm:row-span-1 max-sm:col-span-5 ${divStyle}`}
        >
          <div className="px-7 py-8 flex flex-col justify-center items-center h-full">
            Key Features:
            <p className="p-4 max-sm:p-2 text-center dark:text-appWhiteMd">
              <p className="py-2 max-sm:py-0">Extensive Code Library</p>
              <p className="py-2 max-sm:py-0">
                Beginner-Friendly Learning Paths
              </p>
              <p className="py-2 max-sm:py-0">Responsive Design</p>
            </p>
            <p className="text-center">
              Start your C programming journey with C CodeGrid. Let C CodeGrid
              be your guiding light to mastery.
            </p>
          </div>
        </div>
        <div
          className={`row-span-1 col-span-2 max-md:col-span-3 max-sm:col-span-5 ${divStyle}`}
        >
          <p className="px-8 text-center flex justify-center items-center h-full">
            With React, Vite, & Tailwind CSS, C CodeGrid offers an intuitive web
            app for seamless C programming exploration and learning. Elevate
            your understanding and proficiency in this powerful language,
            whether you're a student or an aspiring developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
