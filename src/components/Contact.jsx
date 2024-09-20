import { useEffect, useState } from "react";
import { Modal, List, Frame } from "@react95/core";
import { Dialer1 } from "@react95/icons";

export default function Contact(props) {
    const showContact = props.show;
    const toggleShowContact = props.toggle;
    const handleCloseContact = () => {
      toggleShowContact(false);
    };
    return (
      <>
        {showContact && (
          <Modal
            width="400px"
            height="200px"
            icon={<Dialer1 variant="16x16_4"/>}
            title="Contact"
            defaultPosition={{
              x: 30,
              y: 5,
            }}
            onClose={handleCloseContact}
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
                  <List width="200px" className="dropdown-menu">
                    <List.Item key="exit-item" onClick={handleCloseContact}>
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
                  <List width="200px" className="dropdown-menu">
                    <List.Item key="copy-item">Copy</List.Item>
                  </List>
                ),
              },
            ]}
          >
           <Frame w="100%" h="100%" bgColor="white" boxShadow="$in" >
            <p>Let's get in touch!</p>
            <p>Email me at: <a href="mailto:hawwokitty@outlook.com">hawwokitty@outlook.com</a></p>
            <p>Or find me on any of my social medias:</p>
           </Frame>
          </Modal>
        )}
      </>
    );
  }
  