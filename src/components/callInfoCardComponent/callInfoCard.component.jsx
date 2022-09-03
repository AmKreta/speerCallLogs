import React, { isValidElement } from "react";
import styled from "@mui/material/styles/styled";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CallInfoCard = ({ logInfo = {}, onClick, actionButton, index }) => {
  let createdAt = new Date(logInfo.created_at);
  let createdAtTime = createdAt.toLocaleTimeString();
  return (
    <CardContainer data-id={logInfo.id} data-index={index} onClick={onClick}>
      <Avatar alt={logInfo.from}>{logInfo.from[0]}</Avatar>
      <Info>
        <Typography gutterBottom>{logInfo.from}</Typography>
        <Typography variant='subtitle' color='textSecondary'>{createdAtTime}</Typography>
      </Info>
      {
        actionButton
          ? typeof (actionButton) === 'function' ? actionButton(logInfo.id) : actionButton
          : <CallIcon />
      }
    </CardContainer>
  );
};

const CardContainer = styled("section")(({ theme }) => ({
  border: "1px solid #ccc",
  margin: "8px 0",
  padding: "8px",
  borderRadius: "8px",
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const Info = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "0 8px",
}));

export default CallInfoCard;
