import { useEffect, useState } from "react";
import {
  Modal,
  List,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
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
          height="650px"
          icon={<New16 variant="16x16_4" />}
          title="Resume"
          defaultPosition={{
            x: 80,
            y: 5,
          }}
          onClose={handleCloseResume}
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
                  <List.Item key="exit-item" onClick={handleCloseResume}>
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
          <Tabs defaultActiveTab="About">
            <Tab title="About">
              <h3>Hi, I'm Kitty</h3>
              <hr />
              <p>Junior Fullstack Developer</p>
              <Fieldset legend="About me">
                <p>
                  During my time at Get, I have become specialized in JavaScript
                  and C#, in addition to having a solid background from previous
                  experiences with web development as a hobby and studies at
                  USN. I have in-depth knowledge of web design with HTML and
                  CSS, and I also have basic knowledge in SQL, Linux, Java,
                  e-commerce, and information security
                </p>
              </Fieldset>
            </Tab>
            <Tab title="Education">
              <Fieldset legend="Programming">
                <Checkbox readOnly checked={false}>
                  IT- developer training at Get Academy (2024 - now)
                </Checkbox>
                <Checkbox readOnly checked>
                  One year study in information processing at The University of
                  Southeast Norway (Achieved 2023)
                </Checkbox>
              </Fieldset>
              <Fieldset legend="Bachelor">
                <Checkbox readOnly checked>
                  Bachelor in Asian and Middle Eastern Studies, Field: Chinese
                  with China studies at The University of Oslo (Achieved 2021)
                </Checkbox>
              </Fieldset>
            </Tab>
            <Tab title="Experience">
              <Fieldset legend="Manager and Organizer">
                <Checkbox readOnly checked={false}>
                  Yugicon, a voluntary cosplay Organization, where a one-day
                  conference is organized annually with about 100 participants
                  (2016 - now)
                </Checkbox>
                <Checkbox readOnly checked={false}>
                  Mega Minecraft Battle Royale, a gaming event held once a month
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
                  <ProgressBar percent={63} width="200px" />
                  <li className="resume-skills">React</li>
                  <ProgressBar percent={71} width="200px" />
                </ul>
              </Fieldset>
              <Fieldset legend="Languages (speaking, not programming)">
                <ul>
                  <li className="resume-skills">Norwegian</li>
                  <ProgressBar percent={100} width="200px" />
                  <li className="resume-skills">Egnlish</li>
                  <ProgressBar percent={98} width="200px" />
                  <li className="resume-skills">Chinese</li>
                  <ProgressBar percent={52} width="200px" />
                </ul>
              </Fieldset>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}
