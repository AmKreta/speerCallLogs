import { groupLogsByDate } from "../utils/utils";

export const callLogsSelector = function (state) {
    if (state.callInfo.logs.length) {
        const activeLogs = state.callInfo.logs.filter(log => !log.is_archived);
        return groupLogsByDate(activeLogs);
    }
    return {};
}

export const archiveLogsSelector = function (state) {
    if (state.callInfo.logs.length) {
        const archivedLogs = state.callInfo.logs.filter(log => log.is_archived);
        return groupLogsByDate(archivedLogs);
    }
    return {};
}