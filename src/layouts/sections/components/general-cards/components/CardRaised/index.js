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
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import RaisedBlogCard from "components/Cards/BlogCards/RaisedBlogCard";

function CardRaised() {
  const image =
    "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80";

  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <RaisedBlogCard
          image={image}
          title="Material Kit"
          description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
          action={{
            type: "internal",
            route: "/sections/page-sections/general-cards",
            color: "info",
            label: "More about us",
          }}
        />
      </Grid>
    </MKBox>
  );
}

export default CardRaised;
