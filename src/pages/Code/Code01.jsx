import React, { useContext, useState } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdOutlineContentCopy, MdOutlineCheck } from "react-icons/md";
import { CgClose } from "react-icons/cg";

function Code01({ onCloseClick }) {
  const { theme } = useContext(ThemeContext);
  const codeStyle = theme === "dark" ? atomOneDark : atomOneLight;
  const codeString = `function Code01() {
    const codeString = "(num) => num + 1";
    return (
      <SyntaxHighlighter language="jsx" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
    );
  }`;

  const [copy, setCopy] = useState(false);
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className="rounded-[10px] overflow-hidden bg-[#BAC3CB] dark:bg-[#3a404d]">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2">
          {onCloseClick && (
            <button
              className="bg-red-500 rounded-full p-[5.5px]"
              onClick={onCloseClick}
              onMouseEnter={() => setIsCloseButtonHovered(true)}
              onMouseLeave={() => setIsCloseButtonHovered(false)}
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              {isCloseButtonHovered ? (
                <CgClose
                  style={{ width: "10px", height: "10px" }}
                  className="text-appWhiteHigh dark:text-appBlack"
                />
              ) : null}
            </button>
          )}
          <button
            className="bg-yellow-500 rounded-full p-2"
            style={{
              width: "20px",
              height: "20px",
            }}
          ></button>
          <button
            className="bg-green-500 rounded-full p-2"
            style={{
              width: "20px",
              height: "20px",
            }}
          ></button>
        </div>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1">
            <MdOutlineCheck />
            Copied!
          </button>
        ) : (
          <button
            onClick={handleCopy}
            className="py-1 inline-flex items-center gap-1"
          >
            <MdOutlineContentCopy />
            Copy code
          </button>
        )}
      </div>
      <div
        className="max-sm:text-[11px] overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#8790A0] dark:scrollbar-thumb-appWhiteDis scrollbar-track-[#FAFAFA] dark:scrollbar-track-[#282C34]"
        style={{ maxHeight: "445px" }}
      >
        <SyntaxHighlighter
          language="jsx"
          style={codeStyle}
          customStyle={{
            padding: "15px",
            overflow: "hidden",
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Code01;
