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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "components/Cards/BlogCards/CenteredBlogCard";

import githubImage from "assets/images/github.jpg"

function FeaturesTwo() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="computer"
                    title="Multi-platform development"
                    description="I've learned, developed and maintained projects across a multitude of frameworks, programming languages, and device platforms."
                  />

                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Fully distributed"
                    description="I've worked on several projects creating and managing distributed databases."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Clean & scalable"
                    description="I specialize in writing functional, clean, and ultimately scalable code, with an emphasis on leaving room for improvement, iteration, or change."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Team leadership"
                    description="More often than not, I tend to take the lead on my projects, assigning team roles and managing project goals."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={githubImage}
              title="See More Projects"
              description="Visit my GitHub if you'd like to take a peek at the source code of any of the projects mentioned below, or explore my other projects."
              action={{
                type: "external",
                route: "https://github.com/IAE21",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesTwo;
