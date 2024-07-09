import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, CircularProgress, colors } from "@mui/material";

import imageFromBuffer from "../../utils/imageFromBuffer.js";
import PortfolioBlock from "./PortfolioBlock";

import img1 from "../../assets/img/m1.png"
import img2 from "../../assets/img/m2.png"
import img3 from "../../assets/img/m3.png"
import img4 from "../../assets/img/m4.png"
import img5 from "../../assets/img/m5.png"

const projectsFromBuffer = [
  {
    img: img1,
    demo: "https://antonbelia.github.io/mobile-marketplace/",
    github: "https://github.com/AntonBelia/mobile-marketplace",
    name: "Mobile Marketplace",
  },
  {
    img: img2,
    demo: "https://antonbelia.github.io/landing_page-Bang-Olufsen/",
    github: "https://github.com/AntonBelia/landing_page-Bang-Olufsen",
    name: "Audio Oasis",
  },
  {
    img: img3,
    demo: "https://antonbelia.github.io/search_Github/",
    github: "https://github.com/AntonBelia/search_Github",
    name: "RepoRanger: Data Dive Discovery",
  },
  {
    img: img4,
    demo: "https://antonbelia.github.io/Phaser3_Snake/",
    github: "https://github.com/AntonBelia/Phaser3_Snake",
    name: "SerpentSurge: Pixel Pathways",
  },
  {
    img: img5,
    demo: "https://antonbelia.github.io/js_2048_game/",
    github: "https://github.com/AntonBelia/js_2048_game/tree/develop",
    name: "PuzzlePulse: Numeric Nexus",
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProjects(projectsFromBuffer);
    setIsLoading(false);
    // const apiUrl = "http://localhost:3001/api/projects";
    // axios
    //   .get(apiUrl)
    //   .then((res) => {
    //     setProjects(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsLoading(false);
    //   });
  }, [setProjects]);

  return (
    <Box>
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress style={{ color: "gray" }} />
        </div>
      )}
      {!isLoading && (
        <Grid container display={"flex"} justifyContent={"center"}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                img={project.img}
                live={project.demo}
                source={project.github}
                title={project.name}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
