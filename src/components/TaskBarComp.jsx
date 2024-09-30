import { useState } from "react";
import { Modal, TaskBar, List } from "@react95/core";
import {
  Gcdef100,
  FolderExe2,
  MsawtAwtIcon,
  Mspaint,
  Wordpad,
  HelpBook,
  Computer3,
  Awfxcg321304,
  Winpopup3,
  MsDos,
  Awfxcg321303,
  Grpconv100,
} from "@react95/icons";

function TaskBarComp(props) {
  const handleOpenPaint = props.openPaint;
  const handleOpenStreaming = props.openStreaming;
  const handleOpenCoding = props.openCoding;
  const handleOpenArtsAndCrafts = props.openArts;
  const handleOpenResume = props.openResume;
  const handleOpenContact = props.openContact;
  const handleOpenCredit = props.openCredit;
  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={
                <img
                  src="./github-logo.png"
                  alt="Github"
                  style={{
                    width: "32px",
                    marginLeft: "-20px",
                    marginRight: "10px",
                  }}
                  />
                }
                onClick={() => window.open("https://github.com/hawwokitty/my-portfolio", "_blank")}
            >
              Source Code
            </List.Item>
            <List.Item icon={<FolderExe2 variant="32x32_4" />}>
              Programs
              <List width={"200px"}>
                <List.Item
                  icon={<Winpopup3 variant="16x16_4" />}
                  onClick={handleOpenArtsAndCrafts}
                >
                  Arts & Crafts
                </List.Item>
                <List.Item
                  icon={<MsawtAwtIcon variant="16x16_4" />}
                  onClick={handleOpenCoding}
                >
                  Coding
                </List.Item>
                <List.Item
                  icon={<Awfxcg321304 variant="16x16_4" />}
                  onClick={handleOpenContact}
                >
                  Contact
                </List.Item>
                <List.Item
                  icon={<Mspaint variant="16x16_4"/>}
                  onClick={handleOpenPaint}
                >
                  Paint
                </List.Item>
                <List.Item
                  icon={<Wordpad variant="16x16_4" />}
                  onClick={handleOpenResume}
                >
                  Resume
                </List.Item>
                <List.Item
                  icon={<Gcdef100 variant="16x16_4" />}
                  onClick={handleOpenStreaming}
                >
                  Streaming
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<Awfxcg321303 variant="32x32_4" />} onClick={handleOpenCredit}>
              Credit
            </List.Item>
            <List.Item icon={<MsDos variant="32x32_32" />}>
              MS-DOS Prompt
            </List.Item>

            {/* <List.Item icon={<FolderFile variant="32x32_4" />}>
              Documents
            </List.Item> */}
            {/* <List.Item icon={<Settings variant="32x32_4" />}>
              Settings
              <List width={"200px"}>
                <List.Item icon={<FolderSettings variant="16x16_4" />}>
                  Control Panel
                </List.Item>
                <List.Item icon={<FolderPrint variant="16x16_4" />}>
                  Printers
                </List.Item>
              </List>
            </List.Item> */}
            {/* <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item> */}
            <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>

            {/* <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item> */}
            <List.Divider />
            <List.Item icon={<Computer3 variant="32x32_4" />}>
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  );
}

export default TaskBarComp;
