/* eslint-disable no-unused-vars */
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

import { useEffect, useRef } from "react";

// typed-js
import Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import NavbarBlur from "components/Navbars/NavbarBlur";

// Images
import bgImage from "assets/images/landing-bg.jpg";

function Landing() {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["grow my skill set", "build scalable applications", "master the stack"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

  return (
    <MKBox component="header" position="absolute" height="100%" width="100%">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.4),
              rgba(gradients.info.state, 0.4)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <NavbarBlur 
          transparent
          light
        />
      </MKBox>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              My professional goal is to <span ref={typedJSRef} />
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1} mb={6} px={{ xs: 3, lg: 6 }}>
              I strive to be adept in a plethora of software frameworks, programming languages, and design principles.
              <br />
              Here, I bring my professional skill set to you.
            </MKTypography>
            <MKButton color="white" href="/about-me">learn more</MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Landing;
