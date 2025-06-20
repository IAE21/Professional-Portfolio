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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import borders from "assets/theme/base/borders";

function FaqCollapse({ title, open, children, ...rest }) {
  const { borderWidth, borderColor } = borders;

  return (
    <MKBox mb={1}>
      <MKBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        py={2}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        sx={{ cursor: "pointer" }}
      >
        <MKTypography variant="h3" color={open ? "info" : "light"} sx={{ userSelect: "none" }}>
          {title}
        </MKTypography>
        <MKBox color={open ? "info" : "light"}>
          <Icon sx={{ fontWeight: "bold" }} fontSize="large">
            {open ? "expand_less" : "expand_more"}
          </Icon>
        </MKBox>
      </MKBox>
      <Collapse timeout={400} in={open}>
        <MKBox py={2} lineHeight={1}>
          <MKTypography variant="button" color="text" opacity={0.8} fontWeight="regular">
            {children}
          </MKTypography>
        </MKBox>
      </Collapse>
    </MKBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
