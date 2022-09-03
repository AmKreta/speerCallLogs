import Typography from "@mui/material/Typography";
import React from "react";
import CallInfoCard from "../callInfoCardComponent/callInfoCard.component.jsx";
import styled from '@mui/material/styles/styled';
import Loader from "../loader/loader.component.jsx";

const CallLogsList = function ({ logs, clickHandler, actionButton, emptyMessage, activeId }) {
    const dates = Object.keys(logs);

    if (!dates.length)
        return <Message>{emptyMessage}</Message>

    return (
        dates.map(date => (
            <CallLogsOnDateContainer key={date}>
                <DateContainer>
                    <Typography className="date">{date}</Typography>
                </DateContainer>
                {
                    logs[date].map((log, index) => <CallInfoCard
                        logInfo={log}
                        onClick={clickHandler}
                        key={log.id}
                        index={index}
                        actionButton={actionButton}
                        expanded={activeId === log.id.toString()}
                    />)
                }
            </CallLogsOnDateContainer>
        ))
    );
};

const CallLogsOnDateContainer = styled('section')(({ theme }) => ({
    '&:not(:first-child)': {
        marginTop: theme.spacing(3)
    }
}));

const DateContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    '&::before': {
        content: "''",
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: 0,
        borderTop: '1px solid #ccc',
        zIndex: -1
    },
    '&>.date': {
        display: 'inline-block',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '20px',
        padding: '2px 8px'
    }
}));

const Message = styled(Typography)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}))

export default CallLogsList;
