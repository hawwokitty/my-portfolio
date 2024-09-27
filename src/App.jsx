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

import { useState } from "react";

function App() {
  const [showPaint, toggleShowPaint] = useState(false);
  const [showStreaming, toggleShowStreaming] = useState(false);
  const [showHelp, toggleShowHelp] = useState(false);
  const [showArtsAndCrafts, toggleShowArtsAndCrafts] = useState(false);
  const [showResume, toggleShowResume] = useState(false);
  const [showContact, toggleShowContact] = useState(false);
  const [showCoding, toggleShowCoding] = useState(false);
  const [showRecycleBin, toggleShowRecycleBin] = useState(false);

  const handleOpenArtsAndCrafts = () => toggleShowArtsAndCrafts(true);
  const handleOpenPaint = () => toggleShowPaint(true);
  const handleOpenStreaming = () => toggleShowStreaming(true);
  const handleOpenResume = () => toggleShowResume(true);
  const handleOpenContact = () => toggleShowContact(true);
  const handleOpenCoding = () => toggleShowCoding(true);
  const handleOpenRecycleBin = () => toggleShowRecycleBin(true);

  const handleShowHelp = () => toggleShowHelp(true);
  const handleCloseHelp = () => toggleShowHelp(false);

  return (
    <>
      <WindowSizeProvider>
        <TaskBarComp
          openPaint={handleOpenPaint}
          openStreaming={handleOpenStreaming}
          openArts={handleOpenArtsAndCrafts}
          openResume={handleOpenResume}
          openContact={handleOpenContact}
          openCoding={handleOpenCoding}
        />
        <Desktop
          openPaint={handleOpenPaint}
          openStreaming={handleOpenStreaming}
          openArts={handleOpenArtsAndCrafts}
          openResume={handleOpenResume}
          openContact={handleOpenContact}
          openCoding={handleOpenCoding}
          openRecycleBin={handleOpenRecycleBin}
        />
        <PaintComp
          show={showPaint}
          toggle={toggleShowPaint}
          onHelp={handleShowHelp}
        />
        <StreamingComp show={showStreaming} toggle={toggleShowStreaming} />
        <ArtsAndCrafts
          show={showArtsAndCrafts}
          toggle={toggleShowArtsAndCrafts}
        />
        <Resume show={showResume} toggle={toggleShowResume} />
        <Contact show={showContact} toggle={toggleShowContact} />
        <Coding show={showCoding} toggle={toggleShowCoding} />
        <RecycleBin show={showRecycleBin} toggle={toggleShowRecycleBin} />
        {showHelp && <ArtPrompt show={showHelp} toggle={handleCloseHelp} />}
      </WindowSizeProvider>
    </>
  );
}

export default App;
