import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLogsSelector } from "../../selectors/phoneNo.selector";
import CallLogsList from "../../components/callLogsList/callLogsList.component.jsx";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import { post_toggleArchive } from "../../../apiServices/apiServices";
import { fetchCallDetails } from "../../../store/callInfo.reducer";

const Activity = () => {
  const dispatch = useDispatch();
  const callLogs = useSelector(callLogsSelector);
  const { error, isLoading } = useSelector(state => state.callInfo);
  const [activeLog, setActiveLog] = useState(null);

  const toggleExpendedView = (e) => {
    const clickedId = e.currentTarget.dataset["id"];
    setActiveLog(prevState => prevState === clickedId ? null : clickedId);
  };

  const addToArchive = async (e) => {
    e.stopPropagation(0);
    const id = e.currentTarget.dataset["id"];
    await post_toggleArchive(id, true);
    dispatch(fetchCallDetails());
  };

  return (
    <div className="container-view">
      <CallLogsList
        logs={callLogs}
        clickHandler={toggleExpendedView}
        actionButton={(id) => (
          <IconButton data-id={id} onClick={addToArchive}>
            <ArchiveIcon />
          </IconButton>
        )}
        emptyMessage={isLoading
          ? 'Loading Call logs'
          : error
            ? 'error in loading call logs'
            : 'No logs to show'
        }
        loader={isLoading}
        activeId={activeLog}
      />
    </div>
  );
};

export default Activity;
