import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ErrorPage from "./components/ErrorPage";
import UltralightXOverview from "./pages/UltralightXOverview";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/ultralightx-overview",
    element: <UltralightXOverview />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <React.StrictMode>
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
