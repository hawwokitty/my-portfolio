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

  const handleProjectClick = (project) => {
    setShowProject(project);
  };

  // Use useEffect to load the video when the showProject changes
  useEffect(() => {
    const loadVideo = async () => {
      if (showProject.demo) {
        const videoPath = `/${showProject.demo}`; // Ensure correct path format
        const videoModule = await videoFiles[videoPath]?.(); // Load the video module
        if (videoModule) {
          const videoUrl = videoModule.default; // Get the video URL
          setVideoUrl(videoUrl); // Set video URL
        } else {
          // console.warn(`Video not found for path: ${videoPath}`);
          setVideoUrl(null); // Handle the case where the video is not found
        }
      } else {
        setVideoUrl(null); // No video for this project
      }
    };

    loadVideo();
  }, [showProject]); // Trigger useEffect whenever showProject changes

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
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/Copy-of-Rate-My-Cat/",
    },
    {
      id: "hearthstoneDeckBuilder",
      name: "Hearthstone Battlegrounds Deck Builder",
      description: "First time using an API key",
      github: "https://github.com/hawwokitty/get_academy/tree/main/api-key",
      language: "JavaScript",
      category: "MVC",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/api-key/index.html",
    },
    {
      id: "catClicker",
      name: "Cat Clicker",
      description: "Simple idle clicker game",
      github: "https://github.com/hawwokitty/get_academy/tree/main/idle_game_cleanUp",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/idle_game_cleanUp/index.html",
    },
    {
      id: "nonogram",
      name: "Nonogram",
      description: "Simple nonogram",
      github: "https://github.com/hawwokitty/get_academy/tree/main/nonogram",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/nonogram/index.html",
    },
    {
      id: "simonSays",
      name: "Simon Says",
      description: "Simple simon says app",
      github: "https://github.com/hawwokitty/get_academy/tree/main/simon_says",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/simon_says/index.html",
    },
    {
      id: "slideshow",
      name: "Slideshow",
      description: "Simple slideshow",
      github: "https://github.com/hawwokitty/get_academy/blob/main/slideshow/index2.html",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/slideshow/index2.html",
    },
    {
      id: "been2",
      name: "Been 2",
      description: "First fullstack project, this doesnt have a demo yet",
      github: "https://github.com/hawwokitty/Get_emne_5/tree/main/been2_thirdtry",
      language: "JavaScript",
      category: "React",
      icon: "./js.png",
      demo: "no demo yet",
    },
    {
      id: "portfolio",
      name: "My portfolio",
      description: "Literally the website you are on right now",
      github: "https://github.com/hawwokitty/my-portfolio",
      language: "JavaScript",
      category: "React",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/my-portfolio/",
    },
    {
      id: "snake",
      name: "Snake",
      description: "snake in cmd",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/Snake/Snake",
      language: "C#",
      category: "",
      icon: "./cSharp.png",
      demo: "src/videos/snake.mp4",
    },
    {
      id: "flappyBird",
      name: "Flappy Bird",
      description: "flappy bird in cmd",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/FlappyBird/FlappyBird",
      language: "C#",
      category: "",
      icon: "./cSharp.png",
      demo: "src/videos/flappyBird.mp4",
    },
    {
      id: "frogger",
      name: "Frogger",
      description: "frogger bird in cmd",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/Frogger/Frogger",
      language: "C#",
      category: "",
      icon: "./cSharp.png",
      demo: "src/videos/frogger.mp4",
    },
    {
      id: "harrypotter",
      name: "Hogwarts intro",
      description: "A console app where you get into hogwarts or something",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/HarryPotter/HarryPotter",
      language: "C#",
      category: "",
      icon: "./cSharp.png",
      demo: "src/videos/harrypotter.mp4",
    },
    {
      id: "housedecor",
      name: "House Decoration",
      description: "A console app where you can decorate and paint some interior",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/HouseDecoration/HouseDecoration",
      language: "C#",
      category: "",
      icon: "./cSharp.png",
      demo: "src/videos/housedecor.mp4",
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
                    icon: <img src={project.icon} alt={project.name} style={{height:"20px"}} />, // Use the project icon
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
                  {/* {videoUrl ? (
                    <video key={videoUrl} controls width="100%">
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>This demo doesn't have a video</p>
                  )} */}
                  {videoUrl && (
                    <p>This demo is a video:</p>
                  ) }
                  {/* <a
                    href={showProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Demo in another tab
                  </a> */}
                    <Button onClick={handleOpenDemoComp}>open demo</Button>
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
      <DemoComp show={showDemoComp} toggle={toggleShowDemoComp} url={showProject.demo} video={videoUrl}/>
    </>
  );
}
