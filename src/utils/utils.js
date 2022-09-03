import { CALL_DIRECTION } from "./constant";

export function resolveFromToInLog(from, to, callDirection) {
    if (callDirection === CALL_DIRECTION.INBOUND) return to;
    return from;
}

export function getDateCreated(timeStr) {
    const date = new Date(timeStr);
    return date.toLocaleDateString();
}

export function sortObjectByKeys(obj) {
    const keys = Object.keys(obj);
    keys.sort((a, b) => b > a ? -1 : 1);
    let newObj = {};
    keys.forEach(key => newObj[key] = obj[key]);
    return newObj;
}

export const groupLogsByDate = (logs) => {
    let logGroup = {};
    for (let log of logs) {
        const dateCreated = getDateCreated(log.created_at);
        if (logGroup[dateCreated]) logGroup[dateCreated].push(log);
        else logGroup[dateCreated] = [log];
    }
    return sortObjectByKeys(logGroup);
}

export const getTimeAMPMFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
};