import React from "react";
import styled from "@mui/material/styles/styled";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CALL_TYPE_INFO } from "../../utils/callTypeInfo.jsx";
import { getTimeAMPMFormat } from "../../utils/utils.js";

const CallInfoCard = ({ logInfo = {}, onClick, actionButton, index, expanded }) => {
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
              {getTimeAMPMFormat(new Date(logInfo.created_at))}
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
      <MoreInfoContainer expanded={expanded}>
        {
          expanded ? <React.Fragment>
            <span>
              <Typography variant="subtitle" color='textSecondary'>duration:-</Typography>
              <Typography variant="subtitle"> {logInfo.duration}s</Typography>
            </span>
            <span>
              <Typography variant="subtitle" color='textSecondary'>via:-</Typography>
              <Typography variant="subtitle"> {logInfo.via}</Typography>
            </span>
          </React.Fragment>
            : null
        }
      </MoreInfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled("section")(({ theme }) => ({
  border: "1px solid #ccc",
  margin: "8px 0",
  padding: "8px",
  borderRadius: "8px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 0 3px #ccc",
  },
}));

const Info = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "0 8px",
  "&>span.messageToDisplay": {
    display: "flex",
    alignItems: "center",
    "&>.MuiSvgIcon-root": {
      height: '15px',
      width: '15px',
      marginRight: theme.spacing(1)
    },
    "&>.message": {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
  },
}));

const MoreInfoContainer = styled("div")(({ expanded, theme }) => ({
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  margin: '0 4px',
  marginTop: expanded ? theme.spacing(1.7) : null,
  paddingTop: expanded ? theme.spacing(1.2) : null,
  borderTop: expanded ? '1px solid #ccc' : null,
  height: expanded ? 'auto' : 0,
  overflow: 'hidden',
  transition: '.25s',
  '&>span': { opacity: .7 }
}));

const CompactInfoContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  transition: ".25s",
}));

export default CallInfoCard;
