import { useEffect, useState } from "react";
import {
  Modal,
  List,
  Frame,
  Tree,
  Dropdown,
  Button,
  TitleBar,
} from "@react95/core";
import { Winpopup3 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

// Helper function to get images based on the category
// Helper function to get images based on the category
const getImagesByCategory = async (category) => {
  let images;
  if (category === "normal") {
    images = import.meta.glob("../images/my-art/normal/*.{png,jpg,jpeg}");
  } else if (category === "abstract") {
    images = import.meta.glob(
      "../images/my-art/abstract-vent/*.{png,jpg,jpeg}"
    );
  } else if (category === "juju") {
    images = import.meta.glob(
      "../images/my-cosplay/jujuInTheBox/*.{png,jpg,jpeg}"
    );
  } else if (category === "others") {
    images = import.meta.glob("../images/my-cosplay/*.{png,jpg,jpeg}");
  } else {
    return [];
  }

  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key]();
    const imageName = key.split("/").pop();
    const folderPath = key; // Extract the folder path from the key

    const creditLink = folderPath.includes("juju")
      ? "https://jujuinthebox.myportfolio.com/"
      : folderPath.includes("ookami")
      ? "https://hannenor.wixsite.com/ookamicphoto"
      : folderPath.includes("yui")
      ? "https://www.facebook.com/yuicosplayphoto/"
      : null;

    return {
      id: `${category}File${index}`,
      label: imageName,
      src: imagePath.default,
      creditLink: creditLink, // Include credit link if applicable
    };
  });

  return Promise.all(imagePromises);
};

export default function ArtsAndCrafts(props) {
  const showArtsAndCrafts = props.show;
  const toggleShowArtsAndCrafts = props.toggle;
  const [image, setImage] = useState("");
  const [imageCredit, setImageCredit] = useState("");
  const [treeData, setTreeData] = useState([]);

  const handleCloseArtsAndCrafts = () => {
    toggleShowArtsAndCrafts(false);
    setImage("");
  };
  const handleImageClick = (image) => {
    setImage(image.src);
    setImageCredit(image.creditLink);
  };

  const screenW = window.innerWidth * 0.06;
  const screenH = -30;
  const windowSmall = useWindowSize();

  useEffect(() => {
    const fetchImages = async () => {
      const normalImages = await getImagesByCategory("normal");
      const abstractImages = await getImagesByCategory("abstract");
      const jujuCosplayImages = await getImagesByCategory("juju");
      const otherCosplayImages = await getImagesByCategory("others");

      const treeStructure = [
        {
          id: "myComputer",
          label: "My Computer",
          children: [
            {
              id: "artsAndCrafts",
              label: "Arts & Crafts",
              children: [
                {
                  id: "myArt",
                  label: "My Art",
                  children: [
                    {
                      id: "normal",
                      label: "Normal",
                      children: normalImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image),
                        label: (
                          <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                          <img
                            src={image.src}
                            alt={image.label}
                            style={{ width: "15px" }}
                            loading="lazy"
                          />
                        ),
                      })),
                    },
                    {
                      id: "abstract",
                      label: "Abstract/Vent",
                      children: abstractImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image),
                        label: (
                          <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                          <img
                            src={image.src}
                            alt={image.label}
                            style={{ width: "15px" }}
                            loading="lazy"
                          />
                        ),
                      })),
                    },
                  ],
                },
                {
                  id: "cosplay",
                  label: "Cosplay",
                  children: [
                    {
                      id: "juju",
                      label: "Juju In The Box (Photographer)",
                      children: jujuCosplayImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image),
                        label: (
                          <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                          <img
                            src={image.src}
                            alt={image.label}
                            style={{ width: "15px" }}
                            loading="lazy"
                          />
                        ),
                      })),
                    },
                    {
                      id: "others",
                      label: "Others",
                      children: otherCosplayImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image),
                        label: (
                          <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                          <img
                            src={image.src}
                            alt={image.label}
                            style={{ width: "15px" }}
                            loading="lazy"
                          />
                        ),
                      })),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      setTreeData(treeStructure);
    };

    fetchImages();
  }, []);

  return (
    <>
      {showArtsAndCrafts && (
        <Modal
          width="700px"
          height={windowSmall ? "470px" : "600px"}
          icon={<Winpopup3 variant="16x16_4" />}
          title="Arts & Crafts"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={() => alert("Help!")} />,
            <TitleBar.Close key="close" onClick={handleCloseArtsAndCrafts} />,
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
                  <List.Item key="exit-item" onClick={handleCloseArtsAndCrafts}>
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
                <div className="arts-tree">
                  <Tree data={treeData} />
                </div>
              </Frame>
            </Frame>
            <Frame w="100%" h="100%" bgColor="$material" boxShadow="$in">
              <div className="arts-picture-text">
                <span style={{ padding: "5px" }}>Picture Text:</span>
                <Dropdown options={[image]} />
                
              </div>
              <div className="arts-img-div">
                <Frame
                  className="arts-frame"
                  w="100%"
                  h="100%"
                  bgColor="$material"
                  boxShadow="$out"
                >
                  <img src={image} alt={image} />
                </Frame>
              </div>
              <div style={{display:"flex"}}>
              <Button
                onClick={() =>
                  (document.body.style.backgroundImage = `url(${image})`)
                }
                className="arts-bg-button"
              >
                Set as background image
              </Button>
              {imageCredit && (
                  <div style={{ padding: "5px" }}>
                    <a
                      href={imageCredit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Photo credit
                    </a>
                  </div>
                )}
                </div>
            </Frame>
          </div>
        </Modal>
      )}
    </>
  );
}
