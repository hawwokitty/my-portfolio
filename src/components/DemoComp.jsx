import React, { useState } from "react";
import { Modal, Frame, List, Dropdown, TitleBar } from "@react95/core";
import {
  ArrowLeft,
  ArrowRight,
  Explore,
  Mplayer10,
  Printer,
  Mmsys113,
  Ie,
} from "@react95/icons";

export default function DemoComp(props) {
  const showDemoComp = props.show;
  const toggleShowDemoComp = props.toggle;
  const urlToShow = props.url;
  const videoUrl = props.video;

  const handleCloseDemoComp = () => toggleShowDemoComp(false);

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showDemoComp && (
        <Modal
          className="resize"
          key="demo-modal"
          width="90%"
          height="90%"
          icon={<Ie variant="16x16_8" />}
          title="Demo"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseDemoComp} />,
          ]}
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
                  <List.Item key="exit-item" onClick={handleCloseDemoComp}>
                    Exit
                  </List.Item>
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
                  <List.Item key="copy-item">Copy</List.Item>
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
                  <List.Item key="idk-item-1">idk</List.Item>
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
                  <List.Item key="idk2-item-2">???</List.Item>
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
                  <List.Item key="idk2-item-3">??</List.Item>
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
                  <List.Item key="idk2-item-4">??</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            key="streaming-frame-1"
            bgColor="$material"
            boxShadow="$out"
            h="45px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="streaming-icons">
              <div className="streaming-icon" key="back-icon">
                <ArrowLeft variant="32x32_4" style={{ height: "25px" }} />
                <span>Back</span>
              </div>
              <div className="streaming-icon" key="forward-icon">
                <ArrowRight variant="32x32_4" style={{ height: "25px" }} />
                <span>Forward</span>
              </div>
              <div className="streaming-icon" key="search-icon">
                <Explore variant="32x32_4" style={{ height: "25px" }} />
                <span>Search</span>
              </div>
              <a
                href="https://www.youtube.com/@hawwokitty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="youtube-icon">
                  <Mplayer10 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Youtube</span>
                </div>
              </a>
              <a
                href="https://www.twitch.tv/hawwokitty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="twitch-icon">
                  <Mmsys113 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Twitch</span>
                </div>
              </a>
              <div className="streaming-icon" key="print-icon">
                <Printer variant="32x32_4" style={{ height: "25px" }} />
                <span>Print</span>
              </div>
            </div>
          </Frame>
          <Frame
            key="streaming-frame-2"
            bgColor="$material"
            boxShadow="$out"
            h="30px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="address-bar">
              <span style={{ padding: "5px" }}>Address</span>
              <Dropdown options={[urlToShow]} />
            </div>
          </Frame>
          <Frame
            key="streaming-frame-3"
            w="100%"
            h="100%"
            bgColor="$material"
            boxShadow="$out"
            padding="$4"
            overflow="auto"
          >
            {videoUrl ? (
              <video key={videoUrl} controls autoplay width="100%">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe src={urlToShow} width="100%" height="100%"></iframe>
            )}
          </Frame>
        </Modal>
      )}
    </>
  );
}
