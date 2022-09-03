import React from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { CALL_DIRECTION, CALL_TYPES } from "./constant";

export const CALL_TYPE_INFO = {
  [CALL_TYPES.ANSWERED]: {
    [CALL_DIRECTION.INBOUND]: {
      icon: <CallReceivedIcon style={{ color: "green" }} />,
      title: "call received on ",
    },
    [CALL_DIRECTION.OUTBOUND]: {
      icon: <CallMadeIcon style={{ color: "green" }} />,
      title: "call made on",
    },
  },
  [CALL_TYPES.MISSED]: {
    [CALL_DIRECTION.INBOUND]: {
      icon: <CallMissedIcon style={{ color: "red" }} />,
      title: "call missed on",
    },
    [CALL_DIRECTION.OUTBOUND]: {
      icon: <CallMissedOutgoingIcon style={{ color: "red" }} />,
      title: "call missed on",
    },
  },
  [CALL_TYPES.VOICE_MAIL]: {
    [CALL_DIRECTION.INBOUND]: {
      icon: <RecordVoiceOverIcon style={{ color: "green" }} />,
      title: "voicemail received on",
    },
    [CALL_DIRECTION.OUTBOUND]: {
      icon: <RecordVoiceOverIcon style={{ color: "green" }} />,
      title: "voicemail sent on",
    },
  },
};
