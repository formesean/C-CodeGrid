import React from "react";

function Preloader() {
  let circle =
    "h-2 w-2 bg-transparent rounded-full border border-2 border-black";
  let letter = "text-lg text-appBlack font-semibold mr-1";

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`${letter} animate-bounce`}>l</div>
      <div className={`${letter} animate-bounce200`}>o</div>
      <div className={`${letter} animate-bounce`}>a</div>
      <div className={`${letter} animate-bounce200`}>d</div>
      <div className={`${letter} animate-bounce`}>i</div>
      <div className={`${letter} animate-bounce200`}>n</div>
      <div className={`${letter} animate-bounce`}>g</div>
      <div className={`${circle} mr-1 animate-bounce`}></div>
      <div className={`${circle} mr-1 animate-bounce200`}></div>
      <div className={`${circle} animate-bounce400`}></div>
    </div>
  );
}

export default Preloader;
