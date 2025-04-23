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
import { useWindowSize } from "./WindowSizeContext";

const videoFiles = import.meta.glob("/src/videos/*.mp4");

export default function Coding(props) {
  const showCoding = props.show;
  const toggleShowCoding = props.toggle;
  const [showProject, setShowProject] = useState("");
  const [showDemoComp, toggleShowDemoComp] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleOpenDemoComp = () => toggleShowDemoComp(true);

  const windowSmall = useWindowSize();

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
      description:
        "This is a SoMe-style cat rating app. It's a front-end single-page application, and it was my first time collaborating with other developers on a project. We were all still pretty fresh with JavaScript at the time, so it’s definitely not perfect, but we had a blast making it! Oh, and I also designed the logo and background, because why not?",
      github: "https://github.com/griminir/rate-my-cat",
      language: "JavaScript",
      category: "MVC",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/Copy-of-Rate-My-Cat/",
    },
    {
      id: "hearthstoneDeckBuilder",
      name: "Hearthstone Battlegrounds Deck Builder",
      description:
        "A super simple deck builder for 'Hearthstone Battlegrounds'. The design is minimalistic because the goal here was to learn how to use an API. Just a heads-up: it might take a second for the cards to load after you click 'Find cards', but hey, it's a work in progress!",
      github: "https://github.com/hawwokitty/get_academy/tree/main/api-key",
      language: "JavaScript",
      category: "MVC",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/api-key/index.html",
    },
    {
      id: "catClicker",
      name: "Cat Clicker",
      description:
        "Ever heard of Cookie Clicker? Well, this is basically that... but with cats! :3 Just a cute, simple idle clicker game to pass the time.",
      github:
        "https://github.com/hawwokitty/get_academy/tree/main/idle_game_cleanUp",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/idle_game_cleanUp/index.html",
    },
    {
      id: "nonogram",
      name: "Nonogram",
      description:
        "A simple but fun nonogram puzzle game! If you're into logic puzzles, this one’s for you. It’s all about solving grids by filling in the right boxes.",
      github: "https://github.com/hawwokitty/get_academy/tree/main/nonogram",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/nonogram/index.html",
    },
    {
      id: "simonSays",
      name: "Simon Says",
      description:
        "A straightforward 'Simon Says' app—just like the classic memory game! Challenge your brain and see how many sequences you can remember.",
      github: "https://github.com/hawwokitty/get_academy/tree/main/simon_says",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/simon_says/index.html",
    },
    {
      id: "slideshow",
      name: "Slideshow",
      description:
        "A simple yet smooth slideshow with nice sliding animations. It’s like PowerPoint… but way cooler. I mean, who doesn’t love a good slideshow?",
      github:
        "https://github.com/hawwokitty/get_academy/blob/main/slideshow/index2.html",
      language: "JavaScript",
      category: "",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/get_academy/slideshow/index2.html",
    },
    {
      id: "been2",
      name: "Been 2",
      description:
        "My first full-stack project! This is a React-based site that lets you track which countries and capital cities you’ve visited. It’s built with Node.js, Express, and msSQL for the database. No demo yet, but it’s coming soon!",
      github:
        "https://github.com/hawwokitty/Get_emne_5/tree/main/been2_thirdtry",
      language: "JavaScript",
      category: "React",
      icon: "./js.png",
      demo: "no demo yet",
    },
    {
      id: "portfolio",
      name: "My portfolio",
      description: (
        <>
          Literally the website you’re on right now! Built using React, and
          powered by the amazing{" "}
          <a
            href="https://github.com/React95/React95"
            target="_blank"
            rel="noopener noreferrer"
          >
            React95 library
          </a>
          , giving it that retro Windows 95 desktop vibe.
        </>
      ),
      github: "https://github.com/hawwokitty/my-portfolio",
      language: "JavaScript",
      category: "React",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/my-portfolio/",
    },
    {
      id: "kristiania",
      name: "Kristiania Quiz",
      description: "I made a quiz for my sisters job, she works at Kristiania, for yet-to-be students to figure out which bachelor program is most suitable for them :) Please open it on mobile if you're able! It is only supposed to be viewed on mobile.",
      github: "https://github.com/hawwokitty/kristiania-quiz",
      language: "JavaScript",
      category: "React",
      icon: "./js.png",
      demo: "https://hawwokitty.github.io/kristiania-quiz/",
    },
    {
      id: "snake",
      name: "Snake",
      description:
        "The classic Snake game, but playable right in your terminal! Old-school fun, no frills—just pure nostalgia.",
      github: "https://github.com/hawwokitty/get_cSharp/tree/main/Snake/Snake",
      language: "C#",
      category: "Console App",
      icon: "./cSharp.png",
      demo: "src/videos/snake.mp4",
    },
    {
      id: "flappyBird",
      name: "Flappy Bird",
      description:
        "Flappy Bird—but instead of a bird, it’s a butterfly! Fly through the obstacles in this terminal version of the game. Warning: it’s just as addicting.",
      github:
        "https://github.com/hawwokitty/get_cSharp/tree/main/FlappyBird/FlappyBird",
      language: "C#",
      category: "Console App",
      icon: "./cSharp.png",
      demo: "src/videos/flappyBird.mp4",
    },
    {
      id: "frogger",
      name: "Frogger",
      description:
        "Frogger, the iconic game, playable in your terminal! Help the frog cross the road and river—watch out for cars!",
      github:
        "https://github.com/hawwokitty/get_cSharp/tree/main/Frogger/Frogger",
      language: "C#",
      category: "Console App",
      icon: "./cSharp.png",
      demo: "src/videos/frogger.mp4",
    },
    {
      id: "harrypotter",
      name: "Hogwarts intro",
      description:
        "A console app that lets you feel like you’re entering Hogwarts! Experience the magic of the wizarding world (in a very console-y way).",
      github:
        "https://github.com/hawwokitty/get_cSharp/tree/main/HarryPotter/HarryPotter",
      language: "C#",
      category: "Console App",
      icon: "./cSharp.png",
      demo: "src/videos/harrypotter.mp4",
    },
    {
      id: "housedecor",
      name: "House Decoration",
      description:
        "A console app where you can unleash your inner interior designer! Choose colors, furniture, and make the room of your dreams (just... in written form).",
      github:
        "https://github.com/hawwokitty/get_cSharp/tree/main/HouseDecoration/HouseDecoration",
      language: "C#",
      category: "Console App",
      icon: "./cSharp.png",
      demo: "src/videos/housedecor.mp4",
    },
    {
      id: "audioprog",
      name: "Cute Synth",
      description:
        "Cute Synth is a simple yet powerful Python-based synthesizer that generates different waveforms (sine, square, sawtooth) and applies various effects. It features a GUI built with PyQt6, allowing easy interaction with audio parameters.",
      github:
        "https://github.com/hawwokitty/audio_prog",
      language: "Python",
      category: "",
      icon: "./python.png",
      demo: "src/videos/audioprog.mp4",
    },
    {
      id: "minesweeper",
      name: "Minesweeper",
      description:
        "Literally, it’s Minesweeper. Click tiles, avoid bombs, win (or don't).",
      github:
        "https://github.com/hawwokitty/MineSweeper2",
      language: "C#",
      category: "Windows Forms",
      icon: "./cSharp.png",
      demo: "src/videos/minesweeper.mp4",
    },
    {
      id: "shipgame",
      name: "Ship Game",
      description:
        "The Ship Game is an exciting action game built using C# and WPF. The goal is to control multiple ships as they stay within a set range and collecting points. Ships are removed when they either finish their paths or get destroyed due to errors in navigation.",
      github:
        "https://github.com/hawwokitty/Ship-Game",
      language: "C#",
      category: "WPF",
      icon: "./cSharp.png",
      demo: "src/videos/shipgame.mp4",
    },
    {
      id: "startingover",
      name: "Starting Over",
      description:
        "This is a game I'm working on... very dear to me... pls don't judge it too hard!! I can't really say what the goal or concept is, because that would be spoilers. Also the demo is too big to share, so the only way for you to see it is by cloning the repo haha! good luck :D",
      github:
        "https://github.com/hawwokitty/Game",
      language: "C#",
      category: "Mono Game",
      icon: "./cSharp.png",
      demo: "src/videos/startingover.mp4",
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
                    icon: (
                      <img
                        src={project.icon}
                        alt={project.name}
                        style={{ height: "20px" }}
                      />
                    ), // Use the project icon
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

  // Define the default position
  const screenW = window.innerWidth * 0.08; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showCoding && (
        <Modal
          width="700px"
          height={windowSmall ? "400px" : "600px"}
          icon={<MystifyYourMind100 variant="16x16_4" />}
          title="Coding"
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
          <div
            className="arts-fields"
            style={windowSmall ? { height: "90%" } : { height: "100%" }}
          >
            <Frame
              w="100%"
              h="100%"
              bgColor="$material"
              boxShadow="$out"
              padding="$4"
            >
              <Frame h="100%" bgColor="white" boxShadow="$in" overflow="auto">
                <Tree data={treeStructure} />
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
                  {videoUrl && <p>This demo is a video:</p>}
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
      <DemoComp
        show={showDemoComp}
        toggle={toggleShowDemoComp}
        url={showProject.demo}
        video={videoUrl}
      />
    </>
  );
}
