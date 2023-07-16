import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#111111",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <video autoPlay loop muted>
          <source src="https://cdn.shopify.com/videos/c/o/v/562cacd5903f433baa06ad1bc1babef1.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            alignContent: "flex-end",
            padding: "100px",
            width: "100%",
            maxWidth: "1300px",
            textAlign: "center"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              paddingTop: "30px",
              paddingBottom: "25px",
              fontSize: "16px",
              letterSpacing: 2,
            }}
          >
            ULTRALIGHTX
          </Typography>

          <Button
            sx={{
              height: "20px",
              borderColor: "#fff",
              fontSize: "16px",
              color: "#fff",
              borderRadius: "0",
              border: "2px solid #ccc",
              padding: "20px",
              textTransform: "none",
              "&:hover": {
                border: "2px solid #fff",
                color: "#000",
                backgroundColor: "#fff"
              }
              
            }}
            variant="outlined"
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
