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
import bgImage1 from "assets/images/dashboard-bg.jpg";
import bgImage2 from "assets/images/software-dev.jpg";

function ApplicationOne() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={6} sx={{ ml: "auto" }}>
            <DefaultBlogCard
              image={bgImage1}
              label="website visitors"
              title="My Academic Career at Florida State University"
              description="August 2021 - December 2024"
              action={{
                type: "external",
                route: "https://www.fsu.edu",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="- Dean's List Fall 2023 - Fall 2024">
              Nearing the end of my time at FSU I maintained a high level of dedication and discipline, earning me a place on the Dean's List throughout my senior year.
            </ListItem>
            <ListItem title="- Professional Development">
              I enriched my professional skills with a variety of hands-on practical training experiences through rigorous coursework, involving a mix of oversight and leadership of teams of peers developing multiple scalable full-stack projects, and self-guided independent work on small-scale web applications.
            </ListItem>
            <ListItem title="- Technical Skills Acquired">
              I gained valuable insight and working knowledge with an array of modern frameworks, programming languages, and development principles, forming a solid foundation for further growth and improvement.
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <ListItem title="- Full Stack Development">
              My main area of interest during my time at FSU was the development of full stack applications, 
              sculpting user-facing web apps that would solve real-world problems.
            </ListItem>
            <ListItem title="- Language and Framework Polyglot">
              I hold knowledge of and experience with a plethora of programming languages, frameworks, IDEs, and software architectures, including C++, C#, Python, Rust, Java, Javascript, SQL, HTML/CSS, XML, Flask, React, Firebase, MYSQL, MVVM, and MVC.
            </ListItem>
            <ListItem title="- Project Management and Team Leadership">
              Generally, I was prone to taking the lead on the majority of my projects, allowing me to develop strong leadership and team management capabilities, as well as gain valuable experience managing workflows, deadlines, appropriate project objectives and project direction.
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <DefaultBlogCard
              image={bgImage2}
              label="social activities"
              title="My Software Engineering Competencies & Achievements"
              description="A short summary of my current software engineering experience, key competencies, and some of my major projects and their relevant technologies."
              action={{
                type: "internal",
                route: "/projects",
                label: "get started",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ApplicationOne;
