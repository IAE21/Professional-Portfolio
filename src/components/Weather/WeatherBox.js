import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

function WeatherBox() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ lat: 0, lon: 0, location: "" });
    const [popover, setPopover] = useState(null);
    const [curWeather, setCurWeather] = useState({ temp: 0, desc: "", icon: ""});
    const [tmrWeather, setTmrWeather] = useState({ high: 0, low: 0, desc: "", icon: ""});
    const [aftWeather, setAftWeather] = useState({ high: 0, low: 0, desc: "", icon: ""});
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

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const tomorrow = (new Date().getDay() + 1) % 7; // Get tomorrow’s index
    const aftmorrow = (new Date().getDay() + 2) % 7; // Get aftermorrow's index

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getCityCoords(formData.location).then(loc => {
            setFormData((prevData) => ({
                ...prevData,
                lat: loc.lat,
                lon: loc.lon,
            }));
        });

        console.log('Form data submitted:', formData);
    };

    const sendLocation = () => {
        console.log('Location data sent: ', formData);
        navigate("/weather/forecast/", { state: formData });
    }

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(success);
    };

    function success(pos) {
        const crd = pos.coords;

        setFormData((prevData) => ({
            ...prevData,
            lat: crd.latitude,
            lon: crd.longitude,
        }));
        getCityName(crd.latitude, crd.longitude).then(city => {
            setFormData((prevData) => ({
                ...prevData,
                location: city,
            }));
        });
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

    const getCityCoords = async (city) => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
            );
            const receive = await response.json();
            const result = await receive[0];
            return result; // City Name
        }
        catch (error) {
            console.error(error);
        }
    };

    const current = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?",
        params: {
            lat: formData.lat,
            lon: formData.lon,
            units: "imperial",
            appid: API_KEY,
        }
    };

    const forecast = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?",
        params: {
            lat: formData.lat,
            lon: formData.lon,
            units: "imperial",
            cnt: 16,
            appid: API_KEY,
        }
    };

    const getWeather = async () => {
        try {
            var response = await axios.request(current);
            var result = await response.data;
            setCurWeather((prevWeather) => ({
                ...prevWeather,
                temp: Math.round(result.main.temp),
                desc: result.weather[0].main,
                icon: "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
            }));
            response = await axios.request(forecast);
            result = await response.data;
            setTmrWeather((prevWeather) => ({
                ...prevWeather,
                high: Math.round(result.list[0].main.temp),
                low: Math.round(result.list[3].main.temp),
                desc: result.list[3].weather[0].main,
                icon: "https://openweathermap.org/img/wn/" + result.list[3].weather[0].icon + "@2x.png",
            }));
            setAftWeather((prevWeather) => ({
                ...prevWeather,
                high: Math.round(result.list[7].main.temp),
                low: Math.round(result.list[11].main.temp),
                desc: result.list[11].weather[0].main,
                icon: "https://openweathermap.org/img/wn/" + result.list[11].weather[0].icon + "@2x.png",
            }));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (formData.lat === 0) {
            navigator.geolocation.getCurrentPosition(success);
        }
        getWeather();
    }, [formData.lat]);

    const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
    const closePopover = () => setPopover(null);
    const popoverTemplate = (
        <Popover open={Boolean(popover)} anchorEl={popover} onClose={closePopover} {...popoverOrigin}>
            <MKBox component="form" onSubmit={handleSubmit} bgColor="white" py={1.5} px={2} alignItems="center">
                <MKBox display="flex" mb={2}>
                    <MKTypography variant="body2" color="info" mr={1} style={{ cursor: 'pointer' }} onClick={getLocation}>
                        Detect my location
                    </MKTypography>
                    <Icon>location_searching</Icon>
                </MKBox>
                <MKInput
                    variant="standard"
                    placeholder="Enter City Name"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                />
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
                        <Grid container spacing={1}>
                            <Grid
                                item
                                xs={6}
                                md={8}
                                lg={12}
                                position="relative"
                            >
                                <MKBox
                                    display="flex"
                                    width="100%"
                                    height="100%"
                                    bgColor="info"
                                    p={3}
                                >
                                    <MKTypography variant="h1" color="light">
                                        Weather
                                    </MKTypography>
                                    <MKBox ml="auto">
                                        <MKButton variant="outlined" color="light" size="small"
                                            onClick={(event) => {
                                                togglePopover(event);
                                                setPopoverOrigin({
                                                    anchorOrigin: {
                                                        vertical: "top",
                                                        horizontal: "center",
                                                    },
                                                    transformOrigin: {
                                                        vertical: "bottom",
                                                        horizontal: "center",
                                                    },
                                                });
                                            }}
                                        >
                                            <Icon sx={{ mr: 1 }}>location_on</Icon>
                                            {formData.location}
                                        </MKButton>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                            <Grid item xs={6} lg={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={12} display="flex" textAlign={"center"}>
                                        <Grid item xs={2} lg={4} height="100%">
                                            <MKTypography variant="h3">Today</MKTypography>
                                            <MKTypography><img src={curWeather.icon} alt={curWeather.desc}/></MKTypography>
                                            <MKTypography variant="h4">{curWeather.desc}</MKTypography>
                                            <MKBox>
                                                {curWeather.temp}°
                                            </MKBox>
                                        </Grid>
                                        <Grid item xs={2} lg={4} height="100%">
                                            <MKTypography variant="h3">{days[tomorrow]}</MKTypography>
                                            <MKTypography><img src={tmrWeather.icon} alt={tmrWeather.desc}/></MKTypography>
                                            <MKTypography variant="h4">{tmrWeather.desc}</MKTypography>
                                            
                                            <MKBox display="inline-flex">
                                                <MKTypography fontWeight="bold" mr={2}>{tmrWeather.low}°</MKTypography>
                                                <MKTypography >{tmrWeather.high}°</MKTypography>
                                            </MKBox>
                                        </Grid>
                                        <Grid item xs={2} lg={4} height="100%">
                                            <MKTypography variant="h3">{days[aftmorrow]}</MKTypography>
                                            <MKTypography><img src={aftWeather.icon} alt={aftWeather.desc}/></MKTypography>
                                            <MKTypography variant="h4">{aftWeather.desc}</MKTypography>
                                            
                                            <MKBox display="inline-flex">
                                                <MKTypography fontWeight="bold" mr={2}>{aftWeather.low}°</MKTypography>
                                                <MKTypography>{aftWeather.high}°</MKTypography>
                                            </MKBox>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} lg={12}>
                                        <MKBox pt={0.5} pb={3} px={3}>
                                            <Grid
                                                container
                                                item
                                                xs={12}
                                                md={6}
                                                justifyContent="flex-start"
                                                mr="auto"
                                            >
                                                <MKButton variant="outlined" color="dark" size="small" onClick={sendLocation}>
                                                    <Icon sx={{ mr: 1 }}>cloud</Icon>
                                                    Full Forecast
                                                </MKButton>
                                            </Grid>
                                        </MKBox>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
                {popoverTemplate}
            </Container>
        </MKBox>
    );
}

export default WeatherBox;