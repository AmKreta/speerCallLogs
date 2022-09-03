import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get_allCalls, get_callDetailsOfId, post_toggleArchive } from "../apiServices/apiServices";

const initialState = {
    isLoading: false,
    logs: [],
    error: null
};
const reducer_name = 'callInfo';

export const fetchCallDetails = createAsyncThunk(`${reducer_name}/fetchCallDetails`, async () => {
    const callDetails = (await get_allCalls()).data;
    return callDetails;
});

const callInfoReducer = createSlice({
    name: reducer_name,
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCallDetails.pending](state) {
            state.isLoading = true;
        },
        [fetchCallDetails.fulfilled](state, action) {
            state.logs = action.payload;
            state.isLoading = false;
        },
    }
});

export default callInfoReducer.reducer;