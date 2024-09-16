import React, { useState, useEffect } from "react";
import { Modal, Fieldset, Tabs, Tab } from "@react95/core";
import { HelpBook } from "@react95/icons";

export default function ArtPrompt(props) {
  const [palette, setPalette] = useState([]);
  const showHelp = props.show;
  const handleCloseHelp = props.toggle;

  // Function to fetch color palette from the Express backend
  const fetchPalette = async () => {
    try {
      const response = await fetch("https://portfolio-server-gamma-inky.vercel.app/api/palette"); // Fetch from the backend server
      const data = await response.json();

      // Check if the data contains the result array
      if (data.result) {
        setPalette(data.result); // Set the palette with the RGB values array
      }
    } catch (error) {
      console.error("Error fetching color palette:", error);
    }
  };

  // Fetch color palette on component mount
  useEffect(() => {
    fetchPalette();
  }, []);

  return (
    <>
      {showHelp && (
        <Modal
          key="help-modal"
          icon={<HelpBook variant="16x16_4" />}
          title="What should I draw?"
          defaultPosition={{ x: 50, y: 20 }}
          onClose={handleCloseHelp}
          onHelp={() => {
            console.log("Help!");
          }}
          buttons={[
            {
              value: "Ok",
              onClick: handleCloseHelp,
            },
            {
              value: "Generate again",
              onClick: () => {
                fetchPalette(); // Fetch a new palette when clicked
              },
            },
          ]}
        >
          <Tabs width="350px" defaultActiveTab="Color Palette">
            <Tab title="Color Palette">
              <p>
                If you need ideas for what to draw, feel free to use the
                generated color palette:
              </p>
              <Fieldset legend="Generated Color Palette">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {palette.map((color, index) => (
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
                  ))}
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
            </Tab>
            <Tab title="Mood">
              <p>
                Here is a random emoji to determine the mood of your drawing, if
                you want:
              </p>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}
