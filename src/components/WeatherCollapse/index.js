/**
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function WeatherCollapse({ title, open, children, forecast, ...rest }) {

  return (
    <MKBox mb={1}>
      <Grid container item {...rest} xs={2} lg={12} height="20%" display="flex" alignItems={"center"}
        textAlign={"left"}
        borderBottom={"1px solid grey"}
        sx={{ cursor: "pointer" }}
      >
        <Grid item lg={3}>
          <MKTypography variant="h3" color={open ? "info" : "light"} mr={"15%"}>{title}</MKTypography>
        </Grid>
        <Grid item lg={4} display="flex" alignItems={"center"}>
          <MKTypography mr={2}><img src={forecast.icon} alt={forecast.desc} width={75} /></MKTypography>
          <MKTypography variant="h4" color="light" mr={"10%"}>{forecast.desc}</MKTypography>
        </Grid>
        <Grid item lg={3} display="flex">
          <MKTypography color="light" mr={1}><Icon>water_drop</Icon></MKTypography>
          <MKTypography color="light">{forecast.pop}%</MKTypography>
        </Grid>
        <Grid item lg={2} display="flex">
          <MKTypography variant="h4" color="light" mr={3}>{forecast.high}°</MKTypography>
          <MKTypography variant="h4" color="info">{forecast.low}°</MKTypography>
        </Grid>
      </Grid>
      <Collapse timeout={400} in={open}>
        <MKBox py={2} lineHeight={1}>
          <MKTypography variant="button" color="light" opacity={0.8} fontWeight="bold">
            <MKTypography variant="h4" color="light" textAlign={"left"} sx={{ textTransform: "capitalize" }} borderBottom={"1px solid grey"}>{forecast.fulldesc}</MKTypography>
            <Grid container xs={2} lg={12} height="20%" display="flex" alignItems={"center"} textAlign={"left"}>
              <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                <Grid container item lg={9}>
                  <MKTypography variant="h5" color="light">Wind</MKTypography>
                </Grid>
                <Grid container item lg={3}>
                  <MKTypography variant="h5" color="light" ml={"auto"}>{forecast.wind} mph</MKTypography>
                </Grid>
              </Grid>
              <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                <Grid container item lg={9}>
                  <MKTypography variant="h5" color="light">Humidity</MKTypography>
                </Grid>
                <Grid container item lg={3}>
                  <MKTypography variant="h5" color="light" ml={"auto"}>{forecast.hum}%</MKTypography>
                </Grid>
              </Grid>
              <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                <Grid container item lg={9}>
                  <MKTypography variant="h5" color="light">Visibility</MKTypography>
                </Grid>
                <Grid container item lg={3}>
                  <MKTypography variant="h5" color="light" ml={"auto"}>{forecast.vis} miles</MKTypography>
                </Grid>
              </Grid>
            </Grid>
          </MKTypography>
        </MKBox>
      </Collapse>
    </MKBox>
  );
}

// Typechecking props for the FaqCollapse
WeatherCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default WeatherCollapse;
