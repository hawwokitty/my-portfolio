import React from "react";
// import { useState } from "react";
import { Modal, Frame } from "@react95/core";
import { Ie } from "@react95/icons";

export default function StreamingComp(props) {
  const showModal = props.show;
  const toggleShowModal = props.toggle;

  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
      {showModal && (
        <Modal
          key="streaming-modal"
          width="80%"
          height="70%"
          icon={<Ie variant="16x16_8" />}
          title="My Twitch"
          defaultPosition={{
            x: 20,
            y: 20,
          }}
          onClose={handleCloseModal}
          onHelp={() => {
            console.log("Help!");
          }}
        >
          {" "}
          <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
            <p>test</p>
          </Frame>
        </Modal>
      )}
    </>
  );
}
