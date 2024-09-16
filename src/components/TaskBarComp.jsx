import { useState } from "react";
import { Modal, TaskBar, List } from "@react95/core";
import {
  WindowsExplorer,
  ReaderClosed,
  FolderExe2,
  FolderExe,
  MicrosoftExchange,
  MsDos,
  MicrosoftNetwork,
  FolderFile,
  Settings,
  FolderSettings,
  FolderPrint,
  FileFind,
  HelpBook,
  LoaderBat,
  Computer3,
} from "@react95/icons";

function TaskBarComp() {
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);
  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          onClose={closeFirst}
          width="300px"
          height="200px"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{
            x: 50,
            y: 50,
          }}
          width="300px"
          height="200px"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          onClose={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
            <List.Item icon={<FolderExe2 variant="32x32_4" />}>
              Programs
              <List width={"200px"}>
                <List.Item icon={<FolderExe variant="16x16_4" />}>
                  Accessories
                </List.Item>
                <List.Item icon={<FolderExe variant="16x16_4" />}>
                  StartUp
                </List.Item>
                <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
                  Microsoft Exchange
                </List.Item>
                <List.Item icon={<MsDos variant="16x16_32" />}>
                  MS-DOS Prompt
                </List.Item>
                <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
                  The Microsoft Network
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
                  Windows Explorer
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<FolderFile variant="32x32_4" />}>
              Documents
            </List.Item>
            <List.Item icon={<Settings variant="32x32_4" />}>
              Settings
              <List width={"200px"}>
                <List.Item icon={<FolderSettings variant="16x16_4" />}>
                  Control Panel
                </List.Item>
                <List.Item icon={<FolderPrint variant="16x16_4" />}>
                  Printers
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item>
            <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>
            <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item>
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
