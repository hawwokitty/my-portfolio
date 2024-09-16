import React, { useState } from "react";
import { Pbrush1, MsawtAwtIcon, Explorer108, Gcdef100 } from "@react95/icons";

export default function Desktop(props) {
  const handleOpenPaint = props.openPaint;
  const handleOpenStreaming = props.openStreaming;
  const [activeIcon, setActiveIcon] = useState(null);
  const handleOpenCoding = props.openCoding;
  const handleOpenTrash = props.openTrash;

  const handleToggleIcon = (iconId) => {
    setActiveIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <div className="desktop-icons">
      <div
        className={activeIcon === 1 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(1)}
        onDoubleClick={handleOpenTrash}
      >
        <Explorer108 variant="32x32_4" />
        <p>Trash</p>
      </div>
      <div
        className={activeIcon === 2 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(2)}
        onDoubleClick={handleOpenPaint}
      >
        <Pbrush1 variant="32x32_4" />
        <p>Paint</p>
      </div>
      <div
        className={activeIcon === 3 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(3)}
        onDoubleClick={handleOpenCoding}
      >
        <MsawtAwtIcon variant="32x32_4" />
        <p>Coding</p>
      </div>
      <div
        className={activeIcon === 4 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(4)}
        onDoubleClick={handleOpenStreaming}
      >
        <Gcdef100 variant="32x32_4" />
        <p>Streaming</p>
      </div>
    </div>
  );
}
