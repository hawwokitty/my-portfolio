import { useEffect, useState, useRef } from "react";
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
import { Hourglass } from "react95";

// Helper function to get images based on the category
const getImagesByCategory = async (category) => {
  let images;
  let smallImages;

  if (category === "normal") {
    images = import.meta.glob("../images/my-art/normal/*.{png,jpg,jpeg}");
    smallImages = import.meta.glob(
      "../images/my-art/normal/*-small.{jpg,jpeg,png}"
    );
  } else if (category === "abstract") {
    images = import.meta.glob(
      "../images/my-art/abstract-vent/*.{png,jpg,jpeg}"
    );
    smallImages = import.meta.glob(
      "../images/my-art/abstract-vent/*-small.{jpg,jpeg,png}"
    );
  } else if (category === "juju") {
    images = import.meta.glob(
      "../images/my-cosplay/jujuInTheBox/*.{png,jpg,jpeg}"
    );
    smallImages = import.meta.glob(
      "../images/my-cosplay/jujuInTheBox/*-small.{jpg,jpeg,png}"
    );
  } else if (category === "others") {
    images = import.meta.glob("../images/my-cosplay/*.{png,jpg,jpeg}");
    smallImages = import.meta.glob(
      "../images/my-cosplay/*-small.{jpg,jpeg,png}"
    );
  } else {
    return [];
  }

  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key]();
    const imageName = key
      .split("/")
      .pop()
      .replace(/\.[\w\d]+$/, ""); // Remove extension

    // Find the corresponding small image by checking if the name includes "-small"
    const smallKey = Object.keys(smallImages).find((smallKey) =>
      smallKey.includes(`${imageName}-small`)
    );

    // Load small image if it exists, otherwise default to the full image
    const smallImagePath = smallKey ? await smallImages[smallKey]() : imagePath;

    const folderPath = key; // Determine credit link based on folder

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
      src: imagePath.default, // Full image path
      creditLink: creditLink,
      smallSrc: smallImagePath.default, // Small image or fallback to full image
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
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);

  const handleCloseArtsAndCrafts = () => {
    toggleShowArtsAndCrafts(false);
    setImage("");
    setImageCredit("");
  };

  const handleImageClick = (image) => {
    setImageCredit(image.creditLink);
    setLoading(true);
    setImage(image.smallSrc);
    handleSetImage(image.src);
  };

  const handleSetImage = (imageSrc) => {
    // Store the current loading image in a ref
    loadingRef.current = imageSrc;

    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        // Only set the image if it's still the current loading image
        if (loadingRef.current === imageSrc) {
          setImage(imageSrc); // Set the large image only after it has loaded
        }
        setLoading(false);
        resolve(); // Resolve the promise after setting the image
      };

      img.onerror = () => {
        console.error("Error loading image:", imageSrc);
        setLoading(false);
        resolve(); // Still resolve to avoid blocking
      };
    });
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
                      children: normalImages
                        .filter((image) => !image.src.includes("-small"))
                        .map((image) => {
                          return {
                            id: image.id,
                            onClick: () => handleImageClick(image), // Send the full image object
                            label: (
                              <span style={{ cursor: "pointer" }}>
                                {image.label}
                              </span>
                            ),
                            icon: (
                              <img
                                src={image.smallSrc} // Use the small image for the icon
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                              />
                            ),
                          };
                        }),
                    },
                    {
                      id: "abstract",
                      label: "Abstract/Vent",
                      children: abstractImages
                        .filter((image) => !image.src.includes("-small"))
                        .map((image) => {
                          return {
                            id: image.id,
                            onClick: () => handleImageClick(image), // Send the full image object
                            label: (
                              <span style={{ cursor: "pointer" }}>
                                {image.label}
                              </span>
                            ),
                            icon: (
                              <img
                                src={image.smallSrc} // Use the small image for the icon
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                              />
                            ),
                          };
                        }),
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
                      children: jujuCosplayImages
                        .filter((image) => !image.src.includes("-small"))
                        .map((image) => {
                          return {
                            id: image.id,
                            onClick: () => handleImageClick(image), // Send the full image object
                            label: (
                              <span style={{ cursor: "pointer" }}>
                                {image.label}
                              </span>
                            ),
                            icon: (
                              <img
                                src={image.smallSrc} // Use the small image for the icon
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                              />
                            ),
                          };
                        }),
                    },
                    {
                      id: "others",
                      label: "Others",
                      children: otherCosplayImages
                        .filter((image) => !image.src.includes("-small"))
                        .map((image) => {
                          return {
                            id: image.id,
                            onClick: () => handleImageClick(image), // Send the full image object
                            label: (
                              <span style={{ cursor: "pointer" }}>
                                {image.label}
                              </span>
                            ),
                            icon: (
                              <img
                                src={image.smallSrc} // Use the small image for the icon
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                              />
                            ),
                          };
                        }),
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
            <Modal.Minimize />,
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
            style={windowSmall ? { height: "91.5%" } : { height: "93.8%" }}
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
                  {loading && (
                    <Hourglass size={32} style={{ position: "absolute" }} />
                  )}
                </Frame>
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  onClick={() =>
                    (document.body.style.backgroundImage = `url(${image})`)
                  }
                  className="arts-bg-button"
                >
                  Set as background image
                </Button>
                {imageCredit && (
                  <Button
                    onClick={() => window.open(imageCredit, "_blank")}
                    className="arts-bg-button"
                  >
                    Photo credit
                  </Button>
                )}
              </div>
            </Frame>
          </div>
        </Modal>
      )}
    </>
  );
}
