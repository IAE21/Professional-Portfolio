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

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// About Me
import AboutMe from "pages/about-me/AboutMe";

// Projects
import Projects from "pages/projects/Projects";

// Contact Me
import Contact from "pages/contact/Contact";

// Weather
import Weather from "pages/weather/Weather";
import Forecast from "pages/weather/Forecast/Forecast";

const routes = [
  {
    name: "About Me",
    route: "/about-me",
    component: <AboutMe />,
    columns: 3,
    rowsPerColumn: 2,
  },
  {
    name: "Projects",
    route: "/projects",
    component: <Projects />,
    columns: 3,
    rowsPerColumn: 2,
  },
  {
    name: "Contact Me",
    route: "/contact",
    component: <Contact />,
    columns: 3,
    rowsPerColumn: 2,
  },
  {
    name: "Weather",
    dropdown: true,
    collapse: [
      {
        name: "Weather",
        route: "/weather",
        component: <Weather />,
      },
      {
        name: "Forecast",
        route: "/weather/forecast",
        component: <Forecast />,
      },
    ],
  },


];

export default routes;
