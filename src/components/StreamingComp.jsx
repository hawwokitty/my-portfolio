import React, { useState } from "react";
import { Modal, Frame, List } from "@react95/core";
import { ResizableBox } from "react-resizable";

export default function StreamingComp(props) {
  const showModal = props.show;
  const toggleShowModal = props.toggle;

  const [contentSize, setContentSize] = useState({
    width: 700,
    height: 550,
  });

  const handleResize = (event, { size }) => {
    setContentSize({
      width: size.width,
      height: size.height,
    });
  };

  const handleCloseModal = () => toggleShowModal(false);

  return (
    <>
      {showModal && (
        <Modal
          key="streaming-modal"
          width={`${contentSize.width + 5}px`}
          height={`${contentSize.height + 42}px`}
          icon={
            <img
              src="./public/twitch-no-bg.png"
              alt="Twitch Icon"
              style={{ width: "16px", height: "16px" }}
            />
          }
          title="My Twitch"
          defaultPosition={{
            x: 230,
            y: 20,
          }}
          onClose={handleCloseModal}
          onHelp={() => {
            console.log("Help!");
          }}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item onClick={handleCloseModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>V</u>iew
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item>idk</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>G</u>o
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item>???</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  F<u>a</u>vorites
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item>??</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>H</u>elp
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item>??</List.Item>
                </List>
              ),
            },
          ]}
        >
          {/* <ResizableBox
            width={contentSize.width}
            height={contentSize.height}
            minConstraints={[300, 200]}
            maxConstraints={[window.innerWidth, window.innerHeight]}
            onResize={handleResize}
            resizeHandles={["se"]}
          > */}
            <Frame
              bgColor="$material"
              boxShadow="$out"
              h="45px"
              w="100%"
              style={{ position: "relative" }} // Ensure positioning
            />
            <Frame
              bgColor="$material"
              boxShadow="$out"
              h="26px"
              w="100%"
              style={{ position: "relative" }} // Ensure positioning
            >
              <div className="address-bar">
                <p>Address</p>
                <Frame
                  bgColor="white"
                  boxShadow="$in"
                  h="20px"
                  w="100%"
                  style={{ position: "relative" }} // Ensure positioning
                ></Frame>
              </div>
            </Frame>
            <Frame
              w="100%"
              h="100%"
              bgColor="$material"
              boxShadow="$out"
              padding="$4"
            >
              <Frame h="100%" bgColor="white" boxShadow="$in" />
            </Frame>
          {/* </ResizableBox> */}
        </Modal>
      )}
    </>
  );
}
