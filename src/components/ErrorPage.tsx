import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
  }
  console.error(error);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#000",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="body1">
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography>
          {isError(error) && (
            <Typography>{error.statusText}</Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
