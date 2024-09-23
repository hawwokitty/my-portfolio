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

const getNormalImages = async () => {
  // Dynamically import all images from the folder
  const images = import.meta.glob("../images/my-art/normal/*.{png,jpg,jpeg}");

  // Resolve image paths and return an array of image objects
  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key](); // Await the dynamic import to get the actual image path
    const imageName = key.split("/").pop(); // Extract the filename

    return {
      id: `artFile${index}`,
      label: imageName,
      src: imagePath.default, // Access the default export, which contains the path for image
    };
  });

  return Promise.all(imagePromises); // Wait for all image paths to be resolved
};

const getAbstractImages = async () => {
  // Dynamically import all images from the folder
  const images = import.meta.glob(
    "../images/my-art/abstract-vent/*.{png,jpg,jpeg}"
  );

  // Resolve image paths and return an array of image objects
  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key](); // Await the dynamic import to get the actual image path
    const imageName = key.split("/").pop(); // Extract the filename

    return {
      id: `artFile${index}`,
      label: imageName,
      src: imagePath.default, // Access the default export, which contains the path for image
    };
  });

  return Promise.all(imagePromises); // Wait for all image paths to be resolved
};

export default function ArtsAndCrafts(props) {
  const showArtsAndCrafts = props.show;
  const toggleShowArtsAndCrafts = props.toggle;
  const [image, setImage] = useState("");

  const handleCloseArtsAndCrafts = () => {
    toggleShowArtsAndCrafts(false);
    setImage("");
  };
  const handleImageClick = (imageSrc) => {
    setImage(imageSrc);
  };

  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    // Fetch and set the images when the component mounts
    const fetchImages = async () => {
      const normalImages = await getNormalImages();
      const abstractImages = await getAbstractImages();

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
                        // Suggestion from ggdaltoso
                        onClick: () => handleImageClick(image.src),
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
                        // You can set it only once here and leave label and img as is
                        onClick: () => handleImageClick(image.src),
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
                      id: "cosplayFile1",
                      label: "CosplayFile1.jpg",
                      icon: (
                        <img
                          src="path/to/cosplayfile1.jpg"
                          alt="CosplayFile1"
                        />
                      ),
                    },
                    {
                      id: "cosplayFile2",
                      label: "CosplayFile2.jpg",
                      icon: (
                        <img
                          src="path/to/cosplayfile2.jpg"
                          alt="CosplayFile2"
                        />
                      ),
                    },
                  ],
                },
                {
                  id: "crafts",
                  label: "Crafts",
                  children: [
                    {
                      id: "craftFile1",
                      label: "CraftFile1.jpg",
                      icon: (
                        <img src="path/to/craftfile1.jpg" alt="CraftFile1" />
                      ),
                    },
                    {
                      id: "craftFile2",
                      label: "CraftFile2.jpg",
                      icon: (
                        <img src="path/to/craftfile2.jpg" alt="CraftFile2" />
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      setTreeData(treeStructure); // Set the tree structure with the images
    };

    fetchImages();
  }, []);

  return (
    <>
      {showArtsAndCrafts && (
        <Modal
          width="700px"
          height="600px"
          icon={<Winpopup3 variant="16x16_4" />}
          title="Arts & Crafts"
          dragOptions={{
            defaultPosition: {
              x: 50,
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
              <Button
                onClick={() =>
                  (document.body.style.backgroundImage = `url(${image})`)
                }
                className="arts-bg-button"
              >
                Set as background image
              </Button>
            </Frame>
          </div>
        </Modal>
      )}
    </>
  );
}
