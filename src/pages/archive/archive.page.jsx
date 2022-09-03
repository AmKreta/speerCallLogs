import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { archiveLogsSelector } from "../../selectors/phoneNo.selector";
import CallLogsList from "../../components/callLogsList/callLogsList.component.jsx";
import IconButton from "@mui/material/IconButton";
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { get_unArchiveAll, post_toggleArchive } from "../../../apiServices/apiServices";
import { fetchCallDetails } from "../../../store/callInfo.reducer";
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

const Archive = () => {
    const dispatch = useDispatch()
    const archivedLogs = useSelector(archiveLogsSelector);
    const { error, isLoading } = useSelector(state => state.callInfo);
    const [activeLog, setActiveLog] = useState(null);

    const toggleExpandedView = (e) => {
        const clickedId = e.currentTarget.dataset["id"];
        setActiveLog(prevState => prevState === clickedId ? null : clickedId);
    };

    const unArchive = async (e) => {
        e.stopPropagation(0);
        const id = e.currentTarget.dataset["id"];
        await post_toggleArchive(id, false);
        dispatch(fetchCallDetails());
    }

    const unArchiveAll = async () => {
        await get_unArchiveAll();
        dispatch(fetchCallDetails());
    }

    return (
        <Container className="container-view">
            <div className="logsContainer">
                <CallLogsList
                    logs={archivedLogs}
                    clickHandler={toggleExpandedView}
                    actionButton={(id) => (
                        <IconButton data-id={id} onClick={unArchive}>
                            <UnarchiveIcon />
                        </IconButton>
                    )}
                    emptyMessage={isLoading
                        ? 'Loading archived logs'
                        : error
                            ? 'error in loading archived logs'
                            : 'No logs to show in Archive'
                    }
                    loading={isLoading}
                    activeId={activeLog}
                />
            </div>
            <Button fullWidth onClick={unArchiveAll}>Restore All</Button>
        </Container>
    );
}

const Container = styled('div')(({ theme }) => ({
    '&>.logsContainer': {
        minHeight: '90%'
    }
}));



export default Archive;