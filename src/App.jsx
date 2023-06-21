import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./utils/ThemeContext";

import Preloader from "./components/Preloader";
import HomePage from "./pages/Home";
import CodeGrid from "./pages/CodeGrid";
import preview from "./assets/preview.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    const image = new Image();
    image.src = preview;

    image.onload = handleLoad;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <ThemeProvider>
          <div className="dark:bg-appBlack ease-in duration-300">
            <Navbar />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
