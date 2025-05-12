import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import WeatherCollapse from "components/WeatherCollapse";

function ForecastBox() {
    const formData = useLocation().state;
    const [forecast, setForecast] = useState({ day1: {}, day2: {}, day3: {}, day4: {}, day5: {} });
    const [collapse, setCollapse] = useState(false);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day1 = (new Date().getDay() + 1) % 7; // Get tomorrow’s index
    const day2 = (new Date().getDay() + 2) % 7; // Get aftermorrow's index
    const day3 = (new Date().getDay() + 3) % 7; // Get aftermorrow's index
    const day4 = (new Date().getDay() + 4) % 7; // Get aftermorrow's index
    const day5 = (new Date().getDay() + 5) % 7; // Get aftermorrow's index

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(success);
    };

    function success(pos) {
        const crd = pos.coords;

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

    const weekweather = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?",
        params: {
            lat: formData.lat,
            lon: formData.lon,
            units: "imperial",
            cnt: 40,
            appid: API_KEY,
        }
    };

    const getWeather = async () => {
        try {
            const response = await axios.request(weekweather);
            const result = await response.data;
            console.log(result);
            setForecast((prevWeather) => ({
                ...prevWeather,
                day1: {
                    high: Math.round(result.list[0].main.temp),
                    low: Math.round(result.list[3].main.temp),
                    wind: result.list[3].wind.speed,
                    hum: result.list[3].main.humidity,
                    vis: (result.list[3].visibility / 1609.34).toFixed(2),
                    pop: result.list[3].pop * 100,
                    desc: result.list[3].weather[0].main,
                    fulldesc: result.list[3].weather[0].description,
                    icon: "https://openweathermap.org/img/wn/" + result.list[3].weather[0].icon + "@2x.png",
                },
                day2: {
                    high: Math.round(result.list[7].main.temp),
                    low: Math.round(result.list[11].main.temp),
                    wind: result.list[11].wind.speed,
                    hum: result.list[11].main.humidity,
                    vis: (result.list[11].visibility / 1609.34).toFixed(2),
                    pop: result.list[11].pop * 100,
                    desc: result.list[11].weather[0].main,
                    fulldesc: result.list[11].weather[0].description,
                    icon: "https://openweathermap.org/img/wn/" + result.list[11].weather[0].icon + "@2x.png",
                },
                day3: {
                    high: Math.round(result.list[15].main.temp),
                    low: Math.round(result.list[19].main.temp),
                    wind: result.list[19].wind.speed,
                    hum: result.list[19].main.humidity,
                    vis: (result.list[19].visibility / 1609.34).toFixed(2),
                    pop: result.list[19].pop * 100,
                    desc: result.list[19].weather[0].main,
                    fulldesc: result.list[19].weather[0].description,
                    icon: "https://openweathermap.org/img/wn/" + result.list[19].weather[0].icon + "@2x.png",
                },
                day4: {
                    high: Math.round(result.list[23].main.temp),
                    low: Math.round(result.list[27].main.temp),
                    wind: result.list[27].wind.speed,
                    hum: result.list[27].main.humidity,
                    vis: (result.list[27].visibility / 1609.34).toFixed(2),
                    pop: result.list[27].pop * 100,
                    desc: result.list[27].weather[0].main,
                    fulldesc: result.list[27].weather[0].description,
                    icon: "https://openweathermap.org/img/wn/" + result.list[27].weather[0].icon + "@2x.png",
                },
                day5: {
                    high: Math.round(result.list[31].main.temp),
                    low: Math.round(result.list[35].main.temp),
                    wind: result.list[35].wind.speed,
                    hum: result.list[35].main.humidity,
                    vis: (result.list[35].visibility / 1609.34).toFixed(2),
                    pop: result.list[35].pop * 100,
                    desc: result.list[35].weather[0].main,
                    fulldesc: result.list[35].weather[0].description,
                    icon: "https://openweathermap.org/img/wn/" + result.list[35].weather[0].icon + "@2x.png",
                },
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

    return (
        <MKBox width="100%" display="inline-block" component="section" py={{ xs: 2, lg: 6 }}>
            <Container>
                <Grid container item>
                    <MKBox
                        width="100%"
                        bgColor="white"
                        borderRadius="xl"
                        shadow="xl"
                        mb={6}
                        sx={{
                            overflow: "hidden",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            color: "light",
                        }}
                    >
                        <Grid container>
                            <Grid
                                item
                                xs={6}
                                md={8}
                                lg={12}
                                position="relative"
                            >
                                <MKBox display="flex" width="100%" height="100%" p={3}
                                    sx={{
                                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                                        color: "light",
                                    }}
                                >
                                    <MKTypography variant="h1" color="light">
                                        5-day Forecast
                                    </MKTypography>
                                </MKBox>
                            </Grid>
                            <Grid item xs={6} lg={12}>
                                <Grid container pl={3} pr={3}>
                                    <Grid item xs={6} lg={12} textAlign={"center"}>
                                        <WeatherCollapse
                                            title={days[day1]}
                                            open={collapse === 1}
                                            forecast={forecast.day1}
                                            onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                                        >
                                        </WeatherCollapse>
                                        <WeatherCollapse
                                            title={days[day2]}
                                            open={collapse === 2}
                                            forecast={forecast.day2}
                                            onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                                        >
                                        </WeatherCollapse>
                                        <WeatherCollapse
                                            title={days[day3]}
                                            open={collapse === 3}
                                            forecast={forecast.day3}
                                            onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
                                        >
                                        </WeatherCollapse>
                                        <WeatherCollapse
                                            title={days[day4]}
                                            open={collapse === 4}
                                            forecast={forecast.day4}
                                            onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
                                        >
                                        </WeatherCollapse>
                                        <WeatherCollapse
                                            title={days[day5]}
                                            open={collapse === 5}
                                            forecast={forecast.day5}
                                            onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                                            borderBottom={"none"}
                                        >
                                        </WeatherCollapse>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default ForecastBox;