/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components


// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import NavbarBlur from "components/Navbars/NavbarBlur";
import CurrentBox from "components/Weather/CurrentBox";
import ForecastBox from "components/Weather/ForecastBox";

// Author page sections
import Footer from "components/Footer/Footer";

// Images
import bgImage from "assets/images/forecast-bg.jpg";

function Forecast() {
  return (
    <>
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <NavbarBlur 
          transparent
          light
        />
      </MKBox>
      <MKBox bgColor="white">
        <MKBox
          minHeight="50rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <CurrentBox />
          <ForecastBox />
        </MKBox>
        <Footer />
      </MKBox>
    </>
  );
}

export default Forecast;