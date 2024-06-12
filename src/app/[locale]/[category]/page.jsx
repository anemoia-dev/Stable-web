"use client"; // This line is a comment that tells the browser to use the "client" version of JavaScript when running this file.

// Importing the necessary dependencies
import React, { useState } from "react"; // Importing the React library and the useState hook from React
import NavBar from "../components/NavBar"; // Importing the NavBar component from the "../components/NavBar" file
import { Box } from "@mui/material"; // Importing the Box component from the "@mui/material" library
import Selected from "./Selected"; // Importing the Selected component from the "./Selected" file
import { useTranslation } from "react-i18next"; // Importing the useTranslation hook from the "react-i18next" library
import * as textList from "../../../files/Selected.json"; // Importing the "Selected.json" file from the "../../../files" directory
import Footer from "../components/Footer"; // Importing the Footer component from the "../components/Footer" file

// Defining the Layout component
const Layout = (props) => {
  // Using the useTranslation hook to get the translation functions and the current language
  const { t, i18n } = useTranslation("Selected");

  // Declaring and initializing the navbarHeight state variable to keep track of the height of the navbar
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Getting the category parameter from the props object
  let category = props.params.category;

  // Filtering the textList.List array to find the object with a title that matches the category (case-insensitive)
  let info = textList.List.filter(
    (el) => el.title.toLowerCase() === category.toLowerCase()
  );

  // Taking the first element of the filtered array and storing it in the info variable
  info = info[0];

  // Defining the handleNavbarHeight function to update the navbarHeight state variable
  const handleNavbarHeight = (height) => {
    setNavbarHeight(height);
  };

  // Returning the JSX code for the Layout component
  return (
    <Box
      sx={{
        display: "flex", // Setting the display property to "flex" to create a flex container
        flexDirection: "column", // Setting the flex direction to "column" to stack the children vertically
        minHeight: { xs: "120vh", md: "100vh" }, // Setting the minimum height of the component for different screen sizes
        width: "100vw", // Setting the width of the component to 100% of the viewport width
      }}
    >
      <NavBar
        onHeightChange={handleNavbarHeight} // Passing the handleNavbarHeight function as a prop to the NavBar component
        cat={category} // Passing the category prop to the NavBar component
        color={
          category !== "Global" ? t(`${category}.secondColor`) : "transparent"
        } // Setting the color prop of the NavBar component based on the category and the translation function
      />
      <Selected
        navbarHeight={navbarHeight}
        /* info={info} */
        cat={category} // Passing the navbarHeight, info, and category props to the Selected component
      />
      <Footer cat={category} /> // Passing the category prop to the Footer
      component
    </Box>
  );
};

// Exporting the Layout component as the default export
export default Layout;
