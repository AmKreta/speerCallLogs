import React from "react";
import styled from "@mui/material/styles/styled";
import CallIcon from "@mui/icons-material/Call";
import ArchiveIcon from "@mui/icons-material/Archive";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_OBJ } from "../../router/router.jsx";

const Footer = () => {
  const navigate = useNavigate();

  const goToCallLogs = () =>
    navigate(ROUTES_OBJ.ACTIVITY.path, { replace: true });

  const goToArchivedCallLogs = () =>
    navigate(ROUTES_OBJ.ARCHIVE.path, { replace: true });

  const location = useLocation();

  return (
    <FooterContainer>
      <IconButton onClick={goToCallLogs}>
        <CallIcon 
          className={`callButton ${location.pathname === ROUTES_OBJ.ACTIVITY.path ? 'active' : null}`}
        />
      </IconButton>
      <DialIconContainer>
        <IconButton>
          <DialpadIcon />
        </IconButton>
      </DialIconContainer>
      <IconButton onClick={goToArchivedCallLogs}>
        <ArchiveIcon 
          className={`archiveButton ${location.pathname === ROUTES_OBJ.ARCHIVE.path ? 'active' : null}`}
        />
      </IconButton>
    </FooterContainer>
  );
};

const FooterContainer = styled("footer")(({ theme }) => ({
  height: "50px",
  borderTop: "1px solid #ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  '& .callButton.active': { color: 'green' },
  '& .archiveButton.active': { color: 'red' }
}));

const DialIconContainer = styled("div")(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: "50%",
  height: "50px",
  width: "50px",
  backgroundColor: "white",
  position: "relative",
  bottom: "40%",
  "&>*": {
    height: "100%",
    width: "100%",
    transformOrigin: "center center",
  },
}));

export default Footer;
