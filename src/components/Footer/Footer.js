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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              Ian Estevez
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/landing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://github.com/IAE21"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.linkedin.com/in/ian-estevez-25627a32a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright © <script>document.write(new Date().getFullYear())</script>2025 Professional Portfolio by Ian Estevez.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <MKTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              I strive for excellence in every aspect of my work. Now, I bring that excellence to you.
            </MKTypography>
            <MKTypography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-dribbble" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-pinterest" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
            >
              <i className="fab fa-github" />
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
