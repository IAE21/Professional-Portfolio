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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Author page sections
import Footer from "components/Footer/Footer";

// Images
import NavbarBlur from "components/Navbars/NavbarBlur";
import WeatherBox from 'components/Weather/WeatherBox';

function Weather() {
  return (
    <>
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <NavbarBlur 
          transparent
          light
        />
      </MKBox>
      <Card
        sx={{
          p: 1,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container spacing={1} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={12} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <WeatherBox /> 
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </>
  );
}

export default Weather;