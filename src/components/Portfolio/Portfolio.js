import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, CircularProgress, colors } from "@mui/material";

import imageFromBuffer from "../../utils/imageFromBuffer.js";
import PortfolioBlock from "./PortfolioBlock";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "http://localhost:3001/api/projects";
    axios
      .get(apiUrl)
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setProjects]);

  return (
    <Box>
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress style={{color: "gray"}} />
        </div>
      )}
      {!isLoading && (
        <Grid container display={"flex"} justifyContent={"center"}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                img={imageFromBuffer(project.img)}
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
