import React, { useState } from "react";
import { Modal, Frame, TitleBar } from "@react95/core";
import { Mspaint } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function PaintComp(props) {
  const showPaint = props.show;
  const toggleShowPaint = props.toggle;
  const handleShowHelp = props.onHelp;

  const windowSmall = useWindowSize();
  

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;
  const handleClosePaint = () => toggleShowPaint(false);
  return (
    <>
      {showPaint && (
        <Modal
          className="resize"
          key="paint-modal"
          width="600px"
          height={windowSmall ? "400px" : "500px"}
          icon={<Mspaint variant="16x16_4" />}
          title="untitled - Paint (Not made by me)"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={handleShowHelp} />,
            // <TitleBar.Minimize />,
            <TitleBar.Close key="close" onClick={handleClosePaint} />,
          ]}
        >
          <Frame h="100%" w="100%" overflow="auto">
          {/* <div style={windowSmall ? ({ height: (window.innerHeight * 0.7), overflow:"auto" }) : null}> */}
            <iframe
              src="https://jspaint.app"
              width="100%"
              height="99%"
            ></iframe>
            {/* </div> */}
          </Frame>
        </Modal>
      )}
    </>
  );
}
