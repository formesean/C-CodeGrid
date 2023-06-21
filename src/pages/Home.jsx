import React from "react";
import Marquee from "react-fast-marquee";
import { Spotify } from "react-spotify-embed";

function Home() {
  const divStyle =
    "m-4 hover:scale-105 rounded-[10px] border-2 border-appBlack dark:border-appWhiteHigh ease-in duration-300";

  return (
    <section className="p-16 pt-4 max-sm:px-4 flex h-screen">
      <div className="grid grid-cols-4 grid-rows-2 max-lg:grid-rows-3 max-md:grid-rows-4 gap-x-2">
        <div className={`row-span-1 col-span-3 max-xl:col-span-5 ${divStyle}`}>
          <div className="flex flex-col justify-center items-center h-full">
            <Marquee autoFill={true} pauseOnHover={true} speed={75}>
              <h1 className="text-4xl max-lg:hidden text-center dark:text-appWhiteHigh">
                Master the C CodeGrid: Unlock the Secrets of University-Level
                Programming 👨‍💻 &nbsp;
              </h1>
            </Marquee>
            <p className="px-8 py-4 text-center max-md:text-xs max-sm:text-[10px] dark:text-appWhiteMd">
              Discover the art and science behind efficient algorithms, elegant
              data structures, and optimal coding practices. Join us on this
              transformative journey and elevate your C programming prowess to
              new heights.
            </p>
          </div>
        </div>
        <div
          className={`row-span-1 col-span-1 max-xl:col-span-2 max-md:col-span-5 ${divStyle}`}
        >
          <div className="flex justify-center items-center h-full p-[24px]">
            <Spotify
              link="https://open.spotify.com/track/65FftemJ1DbbZ45DUfHJXE?si=d5e41a7638fd4165"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div
          className={`row-span-2 col-span-2 max-xl:row-span-1 max-xl:col-span-1 max-lg:row-span-2 max-lg:col-span-2 max-md:row-span-1 max-md:col-span-5 ${divStyle}`}
        ></div>
        <div
          className={`row-span-2 col-span-2 max-xl:row-span-1 max-xl:col-span-1 max-lg:row-span-1 max-lg:col-span-2 max-md:col-span-5 ${divStyle}`}
        ></div>
      </div>
    </section>
  );
}

export default Home;
