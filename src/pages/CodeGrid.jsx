import React, { useState, lazy, Suspense } from "react";
import preview from "../assets/preview.png";

const CodePreview = React.memo(({ onClick, index }) => (
  <>
    <img
      src={preview}
      alt="Preview"
      className="flex justify-center items-center w-full h-auto rounded-[10px]"
    />
    <p className="text-center py-2">Code {index + 1}</p>
  </>
));

const Code01 = lazy(() => import("./Code/Code01"));
const Code02 = lazy(() => import("./Code/Code01"));
const Code03 = lazy(() => import("./Code/Code01"));

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

  const codeComponents = [Code01, Code02, Code03];

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
              <Suspense
                fallback={
                  <div className="flex justify-center items-center m-0">
                    Loading...
                  </div>
                }
              >
                <ExpandedCodeView
                  onCloseClick={handleCloseClick}
                  Component={Component}
                />
              </Suspense>
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
