import React, { useState } from "react";
import preview from "../assets/preview.png";
import Code01 from "./Code/Code01";

const CodePreview = ({ onClick, index }) => (
  <>
    <img
      src={preview}
      alt="Preview"
      className="flex justify-center items-center w-full h-auto rounded-[10px]"
    />
    <p className="text-center py-2">Code {index + 1}</p>
  </>
);

const ExpandedCodeView = ({ onCloseClick, Component }) => (
  <Component onCloseClick={onCloseClick} />
);

function CodeGrid() {
  const [expandedDiv, setExpandedDiv] = useState(null);

  const handleClick = (index) => {
    if (index !== expandedDiv) {
      setExpandedDiv(index);
    }
  };

  const handleCloseClick = () => {
    setExpandedDiv(null);
  };

  const isExpanded = (index) => index === expandedDiv;

  const codeComponents = [
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
    Code01,
  ];

  return (
    <section className="px-16 pt-[16px] pb-16 overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-appWhiteDis scrollbar-track-transparent">
      <div className="grid grid-cols-5 gap-4">
        {codeComponents.map((Component, index) => (
          <div
            key={index}
            className={`m-2 border-2 border-appBlack rounded-[10px] dark:border-white dark:text-white p-[10px] hover:m-0 hover:cursor-pointer ease-in duration-300 ${
              isExpanded(index) ? "expanded" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {!isExpanded(index) ? (
              <CodePreview onClick={() => handleClick(index)} index={index} />
            ) : (
              <ExpandedCodeView
                onCloseClick={handleCloseClick}
                Component={Component}
              />
            )}
          </div>
        ))}
      </div>
      {expandedDiv !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10 ease-in duration-300"></div>
      )}
    </section>
  );
}

export default CodeGrid;
