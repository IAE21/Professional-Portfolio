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
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/ian-estevez.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 1, sm: 2 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="left">
            <HorizontalTeamCard
              image={profilePicture}
              name="Ian Estevez"
              position={{ color: "info", label: "Software Developer" }}
              description= '"Jack of all trades, master of none. But better than a master of one."'
            />
          </MKBox>
          <Grid container justifyContent="center" pt={6}>
            <Grid item xs={12} md={9} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="h4" fontWeight="bold">
                    Tallahassee&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="h4" color="text">
                    FL
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="h4" fontWeight="bold">
                    3+ years&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="h4" color="text">
                    Experience
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="h4" fontWeight="bold">
                    15+&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="h4" color="text">
                    Deployed Projects
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
              Hello! My name is Ian Estevez, and as of December 2024 I graduated with my Bachelor of Science in Computer Science from Florida State University. Throughout my academic career, I've always taken a keen interest in programming, a passion that with dedication and commitment, I've managed to hone into a fledgling skill set for software and application development. 
              <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
