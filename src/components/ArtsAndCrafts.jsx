import React, { useState } from "react";
import { Modal, List } from "@react95/core";
import { Computer } from "@react95/icons";

export default function ArtsAndCrafts(props) {
  const showArtsAndCrafts = props.show;
  const toggleShowArtsAndCrafts = props.toggle;

  const handleCloseArtsAndCrafts = () => toggleShowArtsAndCrafts(false);
  return (
    <>
      {showArtsAndCrafts && (
        <Modal
          width="600px"
          height="700px"
          icon={<Computer variant="16x16_4" />}
          title="Arts & Crafts"
          defaultPosition={{
            x: 80,
            y: 5,
          }}
          onClose={handleCloseArtsAndCrafts}
          onHelp={() => {
            console.log("Help!");
          }}
          menu={[
            {
              name: "File",
              list: (
                <List width="200px">
                  <List.Item onClick={handleCloseArtsAndCrafts}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: "Edit",
              list: (
                <List width="200px">
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
          ]}
        />
      )}
    </>
  );
}
