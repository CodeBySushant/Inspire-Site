/* eslint-disable no-unused-vars */
//import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery, useTheme, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://inspire-site-production.up.railway.app/gallery");
      const jsonData = await data.json();
      setImageData(jsonData);
    };
    getData();
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}
      >
        Our <span style={{ color: "#00bcd4" }}>Gallery</span>
      </Typography>

      <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={16}>
        {imageData.map((item, index) => (
          <ImageListItem className="hover:scale-105 " key={item._id}>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Staggered entrance
              viewport={{ once: true }}
              src={`${item.url}?w=500&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "16px",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
