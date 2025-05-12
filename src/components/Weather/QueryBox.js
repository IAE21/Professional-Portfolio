import React, { useState } from 'react';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Popover from "@mui/material/Popover";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/weather.jpg";

function QueryBox({setFormData}) {
  const [localData, setLocalData] = useState({lat: 0, lon: 0, location: ""});
  const [popover, setPopover] = useState(null);
  const [popoverOrigin, setPopoverOrigin] = useState({
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localData);
    console.log('Form data submitted:', localData);
  };

  const getLocation = (e) => {
    navigator.geolocation.getCurrentPosition(success);
    getCityName(localData.lat, localData.lon).then(city => {
      setLocalData((prevData) => ({
        ...prevData,
        location: city,
      }));
    });
    setFormData(localData);
  };

  function success(pos) {
    const crd = pos.coords;
  
    setLocalData((prevData) => ({
      ...prevData,
      lat: crd.latitude,
      lon: crd.longitude,
    }));
  }

  const API_KEY = "e9e17fae01ef929d859ccde198e02609"; // OpenWeatherMap API Key

  const getCityName = async (lat, lon) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
      );
      const receive = await response.json();
      const result = await receive[0];
      return result.name; // City Name
    }
    catch (error) {
      console.error(error);
    }
  };

  const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
  const closePopover = () => setPopover(null);
  const popoverTemplate = (
    <Popover open={Boolean(popover)} anchorEl={popover} onClose={closePopover} {...popoverOrigin}>
      <MKBox display="flex" bgColor="white" py={1.5} px={2} alignItems="center">
        <MKTypography variant="body2" color="info" mr={1} style={{cursor:'pointer'}} onClick={getLocation}>
          Detect my location
        </MKTypography>
        <Icon>location_searching</Icon>
      </MKBox>
    </Popover>
  );

  return (
    <MKBox width="100%" display="inline-block" component="section" py={{ xs: 2, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mt={4}
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 4, sm: 8 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Forecast Search
                    </MKTypography>:
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Find the current weather for a particular location.
                    </MKTypography>
                    <MKButton 
                      variant="outlined" 
                      color="light" 
                      size="small"
                      onClick={(event) => {
                        togglePopover(event);
                        setPopoverOrigin({
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "center",
                          },
                        });
                      }}
                    >
                      <Icon sx={{ mr: 1 }}>location_on</Icon>
                      Location
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post" onSubmit={handleSubmit}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Location"
                          placeholder="New York"
                          name="location"
                          value={localData.location}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton type="submit" variant="gradient" color="info">
                        Search
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
        {popoverTemplate}
      </Container>
    </MKBox>
  );
}

export default QueryBox;