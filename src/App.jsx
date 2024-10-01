import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import StreamingComp from "./components/StreamingComp";
import ArtPrompt from "./components/ArtPrompt";
import ArtsAndCrafts from "./components/ArtsAndCrafts";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import WindowSizeProvider from "./components/WindowSizeContext";
import RecycleBin from "./components/RecycleBin";
import Credit from "./components/Credit";

import { useState } from "react";

function App() {
  const [showWindows, setShowWindows] = useState({
    paint: false,
    streaming: false,
    artsAndCrafts: false,
    resume: false,
    contact: false,
    coding: false,
    recycleBin: false,
    credit: false,
    help: false,
  });

  const toggleWindow = (windowName, isVisible) => {
    setShowWindows((prev) => ({
      ...prev,
      [windowName]: isVisible,
    }));
  };

  const handleOpenWindow = (windowName) => toggleWindow(windowName, true);
  const handleCloseHelp = () => toggleWindow("help", false);

  return (
    <>
      <WindowSizeProvider>
        <TaskBarComp
          openPaint={() => handleOpenWindow("paint")}
          openStreaming={() => handleOpenWindow("streaming")}
          openArts={() => handleOpenWindow("artsAndCrafts")}
          openResume={() => handleOpenWindow("resume")}
          openContact={() => handleOpenWindow("contact")}
          openCoding={() => handleOpenWindow("coding")}
          openCredit={() => handleOpenWindow("credit")}
        />
        <Desktop
          openPaint={() => handleOpenWindow("paint")}
          openStreaming={() => handleOpenWindow("streaming")}
          openArts={() => handleOpenWindow("artsAndCrafts")}
          openResume={() => handleOpenWindow("resume")}
          openContact={() => handleOpenWindow("contact")}
          openCoding={() => handleOpenWindow("coding")}
          openRecycleBin={() => handleOpenWindow("recycleBin")}
        />
        <PaintComp
          show={showWindows.paint}
          toggle={() => toggleWindow("paint", !showWindows.paint)}
          onHelp={() => toggleWindow("help", true)}
        />
        <StreamingComp
          show={showWindows.streaming}
          toggle={() => toggleWindow("streaming", !showWindows.streaming)}
        />
        <ArtsAndCrafts
          show={showWindows.artsAndCrafts}
          toggle={() => toggleWindow("artsAndCrafts", !showWindows.artsAndCrafts)}
        />
        <Resume
          show={showWindows.resume}
          toggle={() => toggleWindow("resume", !showWindows.resume)}
        />
        <Contact
          show={showWindows.contact}
          toggle={() => toggleWindow("contact", !showWindows.contact)}
        />
        <Coding
          show={showWindows.coding}
          toggle={() => toggleWindow("coding", !showWindows.coding)}
        />
        <Credit
          show={showWindows.credit}
          toggle={() => toggleWindow("credit", !showWindows.credit)}
        />
        <RecycleBin
          show={showWindows.recycleBin}
          toggle={() => toggleWindow("recycleBin", !showWindows.recycleBin)}
        />
        {showWindows.help && <ArtPrompt show={showWindows.help} toggle={handleCloseHelp} />}
      </WindowSizeProvider>
    </>
  );
}

export default App;
