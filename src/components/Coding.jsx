import { useEffect, useState } from "react";
import {
  Modal,
  List,
  Frame,
  Tree,
  Dropdown,
  Tab,
  Tabs,
  TitleBar,
  Button,
} from "@react95/core";
import { MystifyYourMind100 } from "@react95/icons";
import DemoComp from "./DemoComp";

const videoFiles = import.meta.glob("/src/videos/*.mp4");

export default function Coding(props) {
  const showCoding = props.show;
  const toggleShowCoding = props.toggle;
  const [showProject, setShowProject] = useState("");
  const [showDemoComp, toggleShowDemoComp] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleOpenDemoComp = () => toggleShowDemoComp(true);

  const handleCloseCoding = () => {
    toggleShowCoding(false);
    setShowProject("");
    setVideoUrl(null);
  };

  const handleProjectClick = async (project) => {
    setShowProject(project);
    console.log(project);
    

    if (project.demo) {
      // Ensure the path matches the keys in videoFiles
      const videoPath = `/${project.demo}`; // Add a leading slash to match the glob keys
      console.log(videoPath); // Check if the path is correct
  
      const videoModule = await videoFiles[videoPath]?.(); // Load the video module
      if (videoModule) {
        const videoUrl = videoModule.default; // Get the video URL
        setVideoUrl(videoUrl); // Set video URL
        console.log(`Video found for path: ${videoPath}`);
      } else {
        console.log(`Video not found for path: ${videoPath}`);
        setVideoUrl(null); // Handle the case where the video is not found
      }
    }
  };

  // Helper function to group projects from chat gpt
  function groupProjectsByLanguageAndCategory(projects) {
    return projects.reduce((acc, project) => {
      const { language, category } = project;

      // Initialize language group if not present
      if (!acc[language]) {
        acc[language] = {};
      }

      // Initialize category group if not present
      if (!acc[language][category]) {
        acc[language][category] = [];
      }

      // Add the entire project object to the respective language and category
      acc[language][category].push(project);

      return acc;
    }, {});
  }

  const myProjects = [
    {
      id: "rateMyCat",
      name: "Rate My Cat",
      description: "First full mvc project done with others",
      github: "https://github.com/griminir/rate-my-cat",
      language: "JavaScript",
      category: "MVC",
      icon: "path/to/rmc.jpg",
      demo: "https://hawwokitty.github.io/Copy-of-Rate-My-Cat/",
    },
    {
      id: "been2",
      name: "Been 2",
      description: "First fullstack project",
      github: "link here",
      language: "JavaScript",
      category: "React",
      icon: "path/to/been2.jpg",
      demo: "link here",
    },
    {
      id: "snake",
      name: "Snake",
      description: "snake in cmd",
      github: "link here",
      language: "C#",
      category: "",
      icon: "path/to/snake.jpg",
      demo: "src/videos/snake.mp4",
    },
    {
      id: "flappyBird",
      name: "Flappy Bird",
      description: "flappy bird in cmd",
      github: "link here",
      language: "C#",
      category: "",
      icon: "path/to/fb.jpg",
      demo: "src/videos/flappyBird.mp4",
    },
    {
      id: "frogger",
      name: "Frogger",
      description: "frogger bird in cmd",
      github: "link here",
      language: "C#",
      category: "",
      icon: "path/to/frogger.jpg",
      demo: "src/videos/frogger.mp4",
    },
  ];

  // Group projects by language and category
  const groupedProjects = groupProjectsByLanguageAndCategory(myProjects);

  // Build the tree structure
  const treeStructure = [
    {
      id: "myComputer",
      label: "My Computer",
      children: [
        {
          id: "coding",
          label: "Coding",
          children: Object.entries(groupedProjects).map(
            ([language, categories]) => ({
              id: language.toLowerCase(),
              label: `${language} Projects`,
              children: Object.entries(categories).map(
                ([category, projects]) => ({
                  id: category.toLowerCase() || "misc",
                  label: category ? `${category} Projects` : "Other Projects",
                  children: projects.map((project) => ({
                    id: project.id,
                    label: project.name, // Use the full project name here
                    icon: <img src={project.icon} alt={project.name} />, // Use the project icon
                    onClick: () => handleProjectClick(project), // Pass the entire project object here
                  })),
                })
              ),
            })
          ),
        },
      ],
    },
  ];

  return (
    <>
      {showCoding && (
        <Modal
          width="700px"
          height="600px"
          icon={<MystifyYourMind100 variant="16x16_4" />}
          title="Coding"
          dragOptions={{
            defaultPosition: {
              x: 350,
              y: 20,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseCoding} />,
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
                  <List.Item key="exit-item" onClick={handleCloseCoding}>
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
          <div className="arts-fields">
            <Frame
              w="100%"
              h="100%"
              bgColor="$material"
              boxShadow="$out"
              padding="$4"
            >
              <Frame h="100%" bgColor="white" boxShadow="$in">
                <div className="arts-tree">
                  <Tree data={treeStructure} />
                </div>
              </Frame>
            </Frame>
            <Frame w="100%" h="100%" bgColor="$material" boxShadow="$in">
              <div className="arts-picture-text">
                <span style={{ padding: "5px" }}>Coding Project:</span>
                <Dropdown options={[showProject.name]} />
              </div>
              <Tabs width="100%" defaultActiveTab="Description">
                <Tab title="Description">
                  <p>{showProject.description}</p>
                </Tab>
                <Tab title="Demo">
                  {videoUrl ? (
                    <video key={videoUrl} controls width="100%">
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>This demo doesn't have a video</p>
                  )}
                  <a
                    href={showProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Demo
                    <Button onClick={handleOpenDemoComp}>open demo</Button>
                  </a>
                </Tab>
                <Tab title="GitHub">
                  <a
                    href={showProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub
                  </a>
                </Tab>
              </Tabs>
            </Frame>
          </div>
        </Modal>
      )}
      <DemoComp show={showDemoComp} toggle={toggleShowDemoComp} />
    </>
  );
}
