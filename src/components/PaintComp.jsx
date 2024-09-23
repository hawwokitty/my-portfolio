import React, { useState } from "react";
import { Modal, Frame, TitleBar } from "@react95/core";
import { Mspaint } from "@react95/icons";
// import { ResizableBox } from "react-resizable";

export default function PaintComp(props) {
  const showPaint = props.show;
  const toggleShowPaint = props.toggle;
  const handleShowHelp = props.onHelp;

  // Define the initial size of the resizable content
  // const [contentSize, setContentSize] = useState({
  //   width: window.innerWidth * 0.5 - 5, // Initial width 50% of screen
  //   height: window.innerHeight * 0.5 - 27, // Initial height 50% of screen
  // });

  // Handle the resize event to update the size
  // const handleResize = (event, { size }) => {
  //   setContentSize({
  //     width: size.width,
  //     height: size.height,
  //   });
  // };

  const handleClosePaint = () => toggleShowPaint(false);
  return (
    <>
      {showPaint && (
        <Modal
          className="resize"
          key="paint-modal"
          width="600px"
          height="500px"
          icon={<Mspaint variant="16x16_4" />}
          title="untitled - Paint (Not made by me)"
          dragOptions={{
            defaultPosition: {
              x: 500,
              y: 20
            }
          }} titleBarOptions={[<TitleBar.Help key="help" onClick={handleShowHelp} />, <TitleBar.Close key="close" onClick={handleClosePaint} />]}
        
        >
          {/* <ResizableBox
            width={contentSize.width} // Pass the updated size to ResizableBox
            height={contentSize.height}
            minConstraints={[300, 200]} // Minimum dimensions for resizing
            maxConstraints={[window.innerWidth, window.innerHeight]} // Max dimensions
            onResize={handleResize}
            resizeHandles={["se"]} // Resizable from bottom-right corner
          > */}
          <Frame h="100%" w="100%">
            <iframe
              src="https://jspaint.app"
              width="100%"
              height="100%"
            ></iframe>
          </Frame>
          {/* </ResizableBox> */}
        </Modal>
      )}
    </>
  );
}
