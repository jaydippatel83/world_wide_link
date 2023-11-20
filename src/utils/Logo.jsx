import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { cc } from '../assets';
import { Box } from "@mui/material";

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/" className="navbar-brand" style={{ padding: "20px" }}>
      <Box component="img" src={cc} sx={{ padding: '10px', margin: '15px 5px', height: 60, ...sx }} />

    </RouterLink>
  );
}
