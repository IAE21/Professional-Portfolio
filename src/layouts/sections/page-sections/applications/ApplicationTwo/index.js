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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultBlogCard from "components/Cards/BlogCards/DefaultBlogCard";

// HelpCenter page components
import ListItem from "components/ListItem";

// Images
import bgImage1 from "assets/images/carfinder.jpg"
import bgImage2 from "assets/images/groupay.jpg"
import bgImage3 from "assets/images/imm.jpg"

function ApplicationTwo() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="- Technologies Leveraged">
              I headed development of a simple car dealership database search application including managing project direction, specific task assignment, and direct feature implementation utilizing Python, Flask, HTML/CSS, and Firebase.
            </ListItem>
            <ListItem title="- Full Distribution">
              Employed a fully distributed cloud-stored database of vehicles and their accompanying information using Firebase's no-schema storage architecture.
            </ListItem>
            <ListItem title="- Cloud-based Search">
              Implemented search engine querying cars matching user search terms via filtering of returned records from cloud. 
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6} sx={{ ml: "auto" }}>
            <DefaultBlogCard
              image={bgImage1}
              label="website visitors"
              title="CarFinder: Car Dealership Search Engine"
              description="This project simulates a database of vehicles that might be used by car dealerships to manage inventory between locations."
              action={{
                type: "internal",
                route: "/projects",
                label: "get started",
              }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <DefaultBlogCard
              image={bgImage2}
              label="social activities"
              title="GrouPay: Bill Sharing Web Application"
              description="This was my Software Engineering Senior Capstone project; a web service allowing users to cooperatively contribute to shared bills and expenses."
              action={{
                type: "external",
                route: "https://youtu.be/2Xfw8R6a44g",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <ListItem title="- Technologies Leveraged">
              I led development team in building an extremely lightweight web service to solve a real-world problem targeting young adults using Python, Flask, HTML/CSS, and MySQL.
            </ListItem>
            <ListItem title="- Robust User Interaction">
              Provides renters with a service enabling users to distribute portions of shared expenses and communicate/cooperate with one another to contribute.
            </ListItem>
            <ListItem title="- Full Industry-standard Documentation">
              Authored highly detailed documentation on the application's functionality, technologies involved, functional and non-functional requirements, and use-case/sequence diagrams. 
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="- Technologies Leveraged">
              Utilized C#, .NET MAUI, and JSON to create a full stack e-commerce application resembling Amazon in function.  
            </ListItem>
            <ListItem title="- In-depth Features and Functionality">
              Featured essential functions such as managing product inventory, product listings, deals, discounts, multiple shopping carts, and a check-out process. 
            </ListItem>
            <ListItem title="- Strong, Scalable Architecture">
              Implemented proper scalable infrastructure, utilizing MVVM architecture, DTOs, and Service Proxies to produce intuitive user experience and ensure appropriate cooperation between layers of the stack.
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6} sx={{ ml: "auto" }}>
            <DefaultBlogCard
              image={bgImage3}
              label="website visitors"
              title="IMM: E-Commerce .NET MAUI Application"
              description="This project seeks to emulate the function of large-scale e-commerce stores like Amazon, allowing users to both manage warehouse inventory and simulate consumer shopping."
              action={{
                type: "external",
                route: "https://youtu.be/SMRC0h3P2SE",
                label: "get started",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ApplicationTwo;
