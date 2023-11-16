import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTime = createAsyncThunk('FetchTime', async (city) => {
    const apiKey = 'dp8J89ihXlGHYkJnS8W3oQ==J1Yv0GWZ0F7DxqlI';
    const apiUrl = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return {
        data: result,
        status: response.status,
    };
});

export const time = createSlice({
    name: 'time',
    initialState: {
        isLoading: false,
        data: null,
        status: 200,
        hours: null,
        minutes: null,
        isError: false,
    },
    reducers: {
        timeClear: (state) => {
            state.isLoading = false;
            state.data = null;
            state.status = 200;
            state.hours = null;
            state.minutes = null;
            state.isError = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTime.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTime.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
            state.hours = parseInt(action.payload.data.hour);
            state.status = action.payload.status;
            console.log(action.payload);
            state.minutes = parseInt(action.payload.data.minute);
        })
        builder.addCase(fetchTime.rejected, (state, action) => {
            state.isError = true;
            console.log("Time Call Error : ", action.payload);
        })
    }
})

export const { timeClear } = time.actions;
export default time.reducer;