import React, { useState, useEffect } from "react";
import { Modal, Fieldset, Tabs, Tab, TitleBar } from "@react95/core";
import { HelpBook } from "@react95/icons";
import { Hourglass } from "react95";
import { useWindowSize } from "./WindowSizeContext";

export default function ArtPrompt(props) {
  const [palette, setPalette] = useState([]);
  const [emoji, setEmoji] = useState();
  const [loading, setLoading] = useState(false);
  const showHelp = props.show;
  const handleCloseHelp = props.toggle;

  const windowSmall = useWindowSize();

  // Function to fetch color palette from the vercel backend
  const fetchPalette = async () => {
    try {
      const response = await fetch(
        "https://portfolio-server-gamma-inky.vercel.app/api/palette"
      ); // Fetch from the backend server
      const data = await response.json();

      // Check if the data contains the result array
      if (data.result) {
        setPalette(data.result); // Set the palette with the RGB values array
      }
      setLoading(true);
    } catch (error) {
      console.error("Error fetching color palette:", error);
    }
  };

  // Fetch color palette on component mount
  useEffect(() => {
    fetchPalette();
  }, []);

  // Function to fetch emoji from api
  const fetchEmoji = async () => {
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/random"); // fetch a random emoji from the api
      const data = await response.json();
      if (data && data.htmlCode) {
        // Check for the correct structure
        setEmoji(data.htmlCode[0]); // Set the emoji using the first HTML code in the array
        // console.log(data.htmlCode[0]);
      }
    } catch (error) {
      console.error("Error fetching emoji", error);
    }
  };

  // Fetch color palette on component mount
  useEffect(() => {
    fetchEmoji();
  }, []);

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showHelp && (
        <Modal
          key="help-modal"
          icon={<HelpBook variant="16x16_4" />}
          title="What should I draw?"
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
            <TitleBar.Close key="close" onClick={handleCloseHelp} />,
          ]}
          buttons={[
            {
              value: "Ok",
              onClick: handleCloseHelp,
            },
            {
              value: "Generate palette again",
              onClick: () => {
                fetchPalette(); // Fetch a new palette when clicked
              },
            },
            {
              value: "Generate emoji again",
              onClick: () => {
                fetchEmoji(); // Fetch a new emoji when clicked
              },
            },
          ]}
        >
          <Tabs width="400px" defaultActiveTab="Color Palette">
            <Tab title="Color Palette">
            <div style={windowSmall ? ({ height: (window.innerHeight * 0.7), overflow:"auto" }) : null}>
                <p>
                  If you need ideas for what to draw, feel free to use the
                  generated color palette:
                </p>
                <Fieldset legend="Generated Color Palette">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {loading ? (
                      palette.map((color, index) => (
                        <div
                          key={index}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            style={{
                              backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, // Use the RGB values for the color
                              width: "20px",
                              height: "20px",
                              margin: "5px",
                              border: "1px solid #000",
                            }}
                          ></div>
                          <p>{`RGB(${color[0]}, ${color[1]}, ${color[2]})`}</p>
                        </div>
                      ))
                    ) : (
                      <Hourglass size={32} style={{ margin: 20 }} />
                    )}
                  </div>
                </Fieldset>
                <h4>How to use palette</h4>
                <ul>
                  <li>Click the color you want to replace</li>
                  <li>Click "Colors" in the menu above</li>
                  <li>Click "Edit colors..."</li>
                  <li>Click "Define Custom Colors"</li>
                  <li>Click an empty custom color</li>
                  <li>Enter the RGB values</li>
                  <li>Click "Add To Custom Colors"</li>
                  <li>Click "Ok"</li>
                  <li>Do this for all the colors</li>
                </ul>
              </div>
            </Tab>
            <Tab title="Mood">
              <p>
                Here is a random emoji to determine the mood of your drawing, if
                you want:
              </p>
              <h1 dangerouslySetInnerHTML={{ __html: emoji }}></h1>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}
