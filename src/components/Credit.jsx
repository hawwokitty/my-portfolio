import { Modal, List, Frame, TitleBar, Tooltip } from "@react95/core";
import { User } from "@react95/icons";

export default function Credit(props) {
  const showCredit = props.show;
  const toggleShowCredit = props.toggle;
  const handleCloseCredit = () => {
    toggleShowCredit(false);
  };

  // Define the default position
  const screenW = window.innerWidth * 0.04; // Initial width 50% of screen
  const screenH = -20;
  return (
    <>
      {showCredit && (
        <Modal
          width="400px"
        //   height="200px"
          icon={<User variant="16x16_4" />}
          title="Credit"
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
            <TitleBar.Close key="close" onClick={handleCloseCredit} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="exit-item" onClick={handleCloseCredit}>
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
          <Frame w="100%" h="100%" bgColor="white" boxShadow="$in">
            <div className="contact-info">
              <p>
                This website is designed to capture the nostalgic essence of a
                Windows 95 desktop, and I couldn't have achieved that without
                the amazing{" "}
                <a
                  href="https://github.com/React95/React95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React95 library
                </a>
                . This incredible open-source project provided the essential
                components and styling necessary to bring this retro-inspired
                interface to life.
              </p>
              <p>
                I am also proud to share that I had the privilege of directly
                contributing to the React95 library. My work has been officially
                merged into the project, granting me the title of an official
                contributor! This was a unique and exciting opportunity to give
                back to the open-source community, and to further enhance the
                very tools that power this website.
              </p>
            </div>
          </Frame>
        </Modal>
      )}
    </>
  );
}
