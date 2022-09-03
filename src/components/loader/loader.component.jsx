import React from "react";
import styled from "@mui/material/styles/styled";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return <Container />;
};

const Container = styled(CircularProgress)(() => ({
  position: "absolute",
  top: "40%",
  left: "48%",
  transform: "translate(-50%,-50%)",
}));

export default Loader;
