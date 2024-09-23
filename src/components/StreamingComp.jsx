import React, { useState } from "react";
import { Modal, Frame, List, Dropdown, TitleBar } from "@react95/core";
import {
  ArrowLeft,
  ArrowRight,
  Explore,
  Mplayer10,
  Printer,
  Mmsys113,
} from "@react95/icons";
// import { ResizableBox } from "react-resizable";
import Trailer from "./Trailer";

export default function StreamingComp(props) {
  const showModal = props.show;
  const toggleShowModal = props.toggle;

  const [contentSize, setContentSize] = useState({
    width: 700,
    height: 550,
  });

  // const handleResize = (event, { size }) => {
  //   setContentSize({
  //     width: size.width,
  //     height: size.height,
  //   });
  // };

  const handleCloseModal = () => toggleShowModal(false);

  return (
    <>
      {showModal && (
        <Modal
          className="resize"
          key="streaming-modal"
          width={`${contentSize.width + 5}px`}
          height={`${contentSize.height + 42}px`}
          icon={
            <img
              src="./twitch-no-bg.png"
              alt="Twitch Icon"
              style={{ width: "16px", height: "16px" }}
            />
          }
          title="My Twitch"
          dragOptions={{
            defaultPosition: {
              x: 60,
              y: 20
            }
          }}
          titleBarOptions={[<TitleBar.Help key="help" onClick={() => {
            alert('Help!');
          }} />, <TitleBar.Close key="close" onClick={handleCloseModal} />]}
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
                  <List.Item key="exit-item" onClick={handleCloseModal}>
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
                  <List.Item key="idk-item">idk</List.Item>
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
                  <List.Item key="idk2-item">???</List.Item>
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
                  <List.Item key="idk3-item">??</List.Item>
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
                  <List.Item key="idk4-item">??</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            bgColor="$material"
            boxShadow="$out"
            h="45px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="streaming-icons">
              <div className="streaming-icon" key="back">
                <ArrowLeft variant="32x32_4" style={{ height: "25px" }} />
                <span>Back</span>
              </div>
              <div className="streaming-icon" key="forward">
                <ArrowRight variant="32x32_4" style={{ height: "25px" }} />
                <span>Forward</span>
              </div>
              <div className="streaming-icon" key="search">
                <Explore variant="32x32_4" style={{ height: "25px" }} />
                <span>Search</span>
              </div>
              <a
                href="https://www.youtube.com/@hawwokitty"
                target="_blank"
                key="youtube"
              >
                <div className="streaming-icon">
                  <Mplayer10 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Youtube</span>
                </div>
              </a>
              <a
                href="https://www.twitch.tv/hawwokitty"
                target="_blank"
                key="twitch"
              >
                <div className="streaming-icon">
                  <Mmsys113 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Twitch</span>
                </div>
              </a>
              <div className="streaming-icon" key="print">
                <Printer variant="32x32_4" style={{ height: "25px" }} />
                <span>Print</span>
              </div>
            </div>
          </Frame>
          <Frame
            bgColor="$material"
            boxShadow="$out"
            h="30px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="address-bar">
              <span style={{ padding: "5px" }}>Address</span>
              {/* <Frame
                bgColor="white"
                boxShadow="$in"
                h="20px"
                w="100%"
                style={{ position: "relative", padding: "5px" }} // Ensure positioning
              > */}
              <Dropdown options={["https://www.twitch.tv/hawwokitty"]} />
              {/* https://www.twitch.tv/hawwokitty */}
              {/* </Frame> */}
            </div>
          </Frame>
          <Frame
            w="100%"
            h="100%"
            bgColor="$material"
            boxShadow="$out"
            padding="$4"
          >
            <Frame h="100%" bgColor="white" boxShadow="$in">
              <div className="twitch-page">
                <img
                  src="Twitch_logo.png"
                  alt="Twitch logo"
                  style={{ height: "50px" }}
                />
                <Trailer />
              </div>
            </Frame>
          </Frame>
        </Modal>
      )}
    </>
  );
}
