import { useState, useEffect, textTransform } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from 'components/MKButton';
import MKTypography from "components/MKTypography";
import { Icon } from '@mui/material';
import FaqCollapse from "components/FaqCollapse";

function CurrentBox() {
  const formData = useLocation().state;
  const [current, setCurrent] = useState({ temp: 0, feels: 0, wind: 0, hum: 0, vis: 0, desc: "", icon: "" });
  const [date, setDate] = useState(new Date().toLocaleString());
  const [collapse, setCollapse] = useState(false);

  const API_KEY = "e9e17fae01ef929d859ccde198e02609"; // OpenWeatherMap API Key

  const curweather = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?",
    params: {
      lat: formData.lat,
      lon: formData.lon,
      units: "imperial",
      appid: API_KEY,
    }
  };

  const getWeather = async () => {
    try {
      const response = await axios.request(curweather);
      const result = await response.data;
      console.log(result);
      setCurrent((prevWeather) => ({
        ...prevWeather,
        temp: Math.round(result.main.temp),
        feels: result.main.feels_like,
        wind: result.wind.speed,
        hum: result.main.humidity,
        vis: (result.visibility/1609.34).toFixed(2),
        desc: result.weather[0].description,
        icon: "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <MKBox width="100%" display="inline-block" component="section" py={{ xs: 4, lg: 8 }} mt={5}>
      <Container>
        <Grid container alignItems={"end"}>
          <Grid item lg={9}>
            <MKTypography variant="h1" color="light" fontSize="3em" mr={5}>{formData.location}</MKTypography>
          </Grid>
          <Grid item lg={3} mb={0.5}>
            <MKTypography variant="h4" color="light">{date}</MKTypography>
          </Grid>
        </Grid>
        <Grid container item>
          <MKBox
            width="100%"
            borderRadius="xl"
            shadow="xl"
            sx={{
              overflow: "hidden",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              color: "white",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} lg={3} position="relative" px={0}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                <MKBox display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                  <MKBox py={6} pr={6} pl={{ xs: 4, sm: 8 }} my="auto">
                    <MKTypography variant="h1" color="white" fontSize="6.5em">{current.temp}°</MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>

              <Grid item xs={12} lg={9}>
                <MKBox component="form" p={2} method="post">
                  <MKBox pb={1}>
                    <Grid container>
                      <Grid item xs={12} lg={12} display="flex" alignItems={"center"}> 
                        <MKTypography variant="h1" color="light" mr={5}><img src={current.icon} alt={current.desc} width={175}/></MKTypography>
                        <MKTypography variant="h1" color="light" sx={{ textTransform: "capitalize" }}>{current.desc}</MKTypography>
                      </Grid>
                      <Grid item xs={12} lg={12} pr={1}>
                        <FaqCollapse
                          title="Details"
                          open={collapse === 1}
                          onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                        >
                          <Grid container xs={2} lg={12} height="20%" display="flex" alignItems={"center"} textAlign={"left"}>
                            <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                              <Grid container item lg={9}>
                                <MKTypography variant="h4" color="light">Feels Like</MKTypography>
                              </Grid>
                              <Grid container item lg={3}>
                                <MKTypography variant="h4" color="light" ml={"auto"}>{current.feels}°</MKTypography>
                              </Grid>
                            </Grid>
                            <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                              <Grid container item lg={9}>
                                <MKTypography variant="h4" color="light">Wind</MKTypography>
                              </Grid>
                              <Grid container item lg={3}>
                                <MKTypography variant="h4" color="light" ml={"auto"}>{current.wind} mph</MKTypography>
                              </Grid>
                            </Grid>
                            <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                              <Grid container item lg={9}>
                                <MKTypography variant="h4" color="light">Humidity</MKTypography>
                              </Grid>
                              <Grid container item lg={3}>
                                <MKTypography variant="h4" color="light" ml={"auto"}>{current.hum}%</MKTypography>
                              </Grid>
                            </Grid>
                            <Grid item lg={12} display="flex" borderBottom={"1px solid grey"}>
                              <Grid container item lg={9}>
                                <MKTypography variant="h4" color="light">Visibility</MKTypography>
                              </Grid>
                              <Grid container item lg={3}>
                                <MKTypography variant="h4" color="light" ml={"auto"}>{current.vis} miles</MKTypography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </FaqCollapse>
                      </Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CurrentBox;