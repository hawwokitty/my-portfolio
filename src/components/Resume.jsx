import { useEffect, useState } from "react";
import {
  Modal,
  List,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
  Avatar,
  TitleBar
} from "@react95/core";
import { New16 } from "@react95/icons";

export default function Resume(props) {
  const showResume = props.show;
  const toggleShowResume = props.toggle;
  const handleCloseResume = () => {
    toggleShowResume(false);
  };
  return (
    <>
      {showResume && (
        <Modal
          width="400px"
          // height="650px"
          icon={<New16 variant="16x16_4" />}
          title="Resume"
          dragOptions={{
            defaultPosition: {
              x: 100,
              y: 20
            }
          }} titleBarOptions={[<TitleBar.Help key="help" onClick={() => {
            alert('Help!');
          }} />, <TitleBar.Close key="close" onClick={handleCloseResume} />]}
          // menu={[
          //   {
          //     name: (
          //       <>
          //         <u>F</u>ile
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="exit-item" onClick={handleCloseResume}>
          //           Exit
          //         </List.Item>
          //       </List>
          //     ),
          //   },
          //   {
          //     name: (
          //       <>
          //         <u>E</u>dit
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="copy-item">Copy</List.Item>
          //       </List>
          //     ),
          //   },
          // ]}
        >
          <Tabs defaultActiveTab="About">
            <Tab title="About">
              <h3>Hi, I'm Kitty</h3>
              <Avatar src="./profilbilde.jpg" alt="" size="140px"/>

              <p>a Junior Fullstack Developer</p>
              <Fieldset legend="About me">
                <p>
                  During my time at Get, I’ve developed specialized expertise in
                  JavaScript and C#, building on a strong foundation in web
                  development from both my academic studies at USN and personal
                  projects. I have in-depth experience with web design using
                  HTML and CSS, and I also possess a working knowledge of SQL,
                  Linux, Java, e-commerce, and information security.
                </p>
              </Fieldset>
            </Tab>
            <Tab title="Education">
              <Fieldset legend="Programming">
                <Checkbox readOnly checked={false}>
                <b>IT- developer training</b> at Get Academy (2024 - now)
                </Checkbox>
                <Checkbox readOnly checked>
                <b>One year study in information processing</b> at The University of
                  Southeast Norway (Achieved 2023)
                </Checkbox>
              </Fieldset>
              <Fieldset legend="Bachelor">
                <Checkbox readOnly checked>
                  <b>Bachelor in Asian and Middle Eastern Studies, Field: Chinese
                  with China studies</b> at The University of Oslo (Achieved 2021)
                </Checkbox>
              </Fieldset>
            </Tab>
            <Tab title="Experience">
              <Fieldset legend="Manager and Organizer">
                <Checkbox readOnly checked={false}>
                <b>Yugicon</b>, a voluntary cosplay Organization, where a one-day
                  conference is organized annually with about 100 participants
                  (2016 - now)
                </Checkbox>
                <Checkbox readOnly checked={false}>
                <b>Mega Minecraft Battle Royale</b>, a gaming event held once a month
                  (2022 - now)
                </Checkbox>
              </Fieldset>
            </Tab>
            <Tab title="Skills">
              <Fieldset legend="Personal Skills">
                <Checkbox readOnly checked>
                  Teamwork
                </Checkbox>
                <Checkbox readOnly checked>
                  Leadership
                </Checkbox>
                <Checkbox readOnly checked>
                  Creative
                </Checkbox>
                <Checkbox readOnly checked>
                  Curious
                </Checkbox>
                <Checkbox readOnly checked>
                  Honest
                </Checkbox>
                <Checkbox readOnly checked>
                  Accommodating
                </Checkbox>
                <Checkbox readOnly checked>
                  Empathetic
                </Checkbox>
                <Checkbox readOnly checked>
                  Adaptable
                </Checkbox>
              </Fieldset>
              <Fieldset legend="Programming Skills">
                <ul>
                  <li className="resume-skills">HTML</li>
                  <ProgressBar percent={97} width="200px" />
                  <li className="resume-skills">CSS</li>
                  <ProgressBar percent={74} width="200px" />
                  <li className="resume-skills">JavaScript</li>
                  <ProgressBar percent={88} width="200px" />
                  <li className="resume-skills">C#</li>
                  <ProgressBar percent={60} width="200px" />
                  <li className="resume-skills">SQL</li>
                  <ProgressBar percent={69} width="200px" />
                  <li className="resume-skills">React</li>
                  <ProgressBar percent={62} width="200px" />
                </ul>
              </Fieldset>
              <Fieldset legend="Languages (speaking, not programming)">
                <ul>
                  <li className="resume-skills">Norwegian</li>
                  <ProgressBar percent={100} width="200px" />
                  <li className="resume-skills">English</li>
                  <ProgressBar percent={98} width="200px" />
                  <li className="resume-skills">Chinese</li>
                  <ProgressBar percent={56} width="200px" />
                </ul>
              </Fieldset>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}