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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Author page sections
import Footer from "components/Footer/Footer";

// Images
import NavbarBlur from "components/Navbars/NavbarBlur";
import Message from "components/Message/Message";

function Contact() {
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
        <Message />
      </Card>
      <Footer />
    </>
  );
}

export default Contact;