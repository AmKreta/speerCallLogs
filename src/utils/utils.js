import { CALL_DIRECTION } from "./constant";

export function resolveFromToInLog(from, to, callDirection) {
    if (callDirection === CALL_DIRECTION.INBOUND) return to;
    return from;
}

export function getDateCreated(timeStr) {
    const date = new Date(timeStr);
    return date.toLocaleDateString();
}

export const groupLogsByDate = (logs) => {
    let logGroup = {};
    for (let log of logs) {
        const dateCreated = getDateCreated(log.created_at);
        if (logGroup[dateCreated]) logGroup[dateCreated].push(log);
        else logGroup[dateCreated] = [log];
    }
    return logGroup;
}