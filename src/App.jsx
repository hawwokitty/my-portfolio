import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import StreamingComp from "./components/StreamingComp";
import ArtPrompt from "./components/ArtPrompt";

import { useState } from "react";

function App() {
  const [showPaint, toggleShowPaint] = useState(false);
  const [showStreaming, toggleShowStreaming] = useState(false);
  const [showHelp, toggleShowHelp] = useState(false);

  const handleOpenPaint = () => toggleShowPaint(true);
  const handleOpenStreaming = () => toggleShowStreaming(true);

  const handleShowHelp = () => toggleShowHelp(true);
  const handleCloseHelp = () => toggleShowHelp(false);

  return (
    <>
      <TaskBarComp />
      <Desktop openPaint={handleOpenPaint} openStreaming={handleOpenStreaming} />
      <PaintComp show={showPaint} toggle={toggleShowPaint} onHelp={handleShowHelp} />
      <StreamingComp show={showStreaming} toggle={toggleShowStreaming} />
      {showHelp && <ArtPrompt show={showHelp} toggle={handleCloseHelp}  />}
    </>
  );
}


export default App;
