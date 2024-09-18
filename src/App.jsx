import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import StreamingComp from "./components/StreamingComp";
import ArtPrompt from "./components/ArtPrompt";
import ArtsAndCrafts from "./components/ArtsAndCrafts";

import { useState } from "react";

function App() {
  const [showPaint, toggleShowPaint] = useState(false);
  const [showStreaming, toggleShowStreaming] = useState(false);
  const [showHelp, toggleShowHelp] = useState(false);
  const [showArtsAndCrafts, toggleShowArtsAndCrafts] = useState(false);

  const handleOpenArtsAndCrafts = () => toggleShowArtsAndCrafts(true);
  const handleOpenPaint = () => toggleShowPaint(true);
  const handleOpenStreaming = () => toggleShowStreaming(true);

  const handleShowHelp = () => toggleShowHelp(true);
  const handleCloseHelp = () => toggleShowHelp(false);

  return (
    <>
      <TaskBarComp />
      <Desktop openPaint={handleOpenPaint} openStreaming={handleOpenStreaming} openArts={handleOpenArtsAndCrafts} />
      <PaintComp show={showPaint} toggle={toggleShowPaint} onHelp={handleShowHelp} />
      <StreamingComp show={showStreaming} toggle={toggleShowStreaming} />
      <ArtsAndCrafts show={showArtsAndCrafts} toggle={toggleShowArtsAndCrafts} />
      {showHelp && <ArtPrompt show={showHelp} toggle={handleCloseHelp}  />}
    </>
  );
}


export default App;
