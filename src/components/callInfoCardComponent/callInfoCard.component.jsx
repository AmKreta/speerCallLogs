import React from "react";
import styled from "@mui/material/styles/styled";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CALL_TYPE_INFO } from "../../utils/callTypeInfo.jsx";

const CallInfoCard = ({ logInfo = {}, onClick, actionButton, index }) => {
  let createdAt = new Date(logInfo.created_at);
  let createdAtTime = createdAt.toLocaleTimeString();
  return (
    <CardContainer data-id={logInfo.id} data-index={index} onClick={onClick}>
      <CompactInfoContainer>
        <Avatar alt={logInfo.from}>{logInfo.from[0]}</Avatar>
        <Info>
          <Typography gutterBottom>{logInfo.from}</Typography>
          <span className="messageToDisplay">
            {CALL_TYPE_INFO[logInfo.call_type][logInfo.direction].icon}
            <Typography
              variant="subtitle"
              color="textSecondary"
              className="message"
            >
              {CALL_TYPE_INFO[logInfo.call_type][logInfo.direction].title}{" "}
              {createdAtTime}
            </Typography>
          </span>
        </Info>
        {actionButton ? (
          typeof actionButton === "function" ? (
            actionButton(logInfo.id)
          ) : (
            actionButton
          )
        ) : (
          <CallIcon />
        )}
      </CompactInfoContainer>
      <MoreInfoContainer></MoreInfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled("section")(({ theme }) => ({
  border: "1px solid #ccc",
  margin: "8px 0",
  padding: "8px",
  borderRadius: "8px",
}));

const Info = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "0 8px",
  "&>span.messageToDisplay": {
    display: "flex",
    alignItems: "center",
    "&>.MuiSvgIcon-root":{
      height:'15px',
      width:'15px',
      marginRight:theme.spacing(1)
    },
    "&>.message": {
      flexGrow: 1,
      overflow:'hidden',
      textOverflow:'ellipsis'
    },
  },
}));

const MoreInfoContainer = styled("div")(({ theme }) => ({
  width: "100%",
}));

const CompactInfoContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  transition: ".25s",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 0 3px #ccc",
  },
}));

export default CallInfoCard;
