import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData', async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a5518acfe5msh3da494b66705d3ap134865jsnc5e7a74b1f8d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return {
        data: result,
        status: response.status,
    };

});

const weather = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false,
        data: null,
        error: null,
        sunrise: null,
        sunset: null,
        status: 200,
        city: '',
    },
    reducers: {
        setSunrise: (state, action) => {
            state.sunrise = action.payload;
        },
        setSunset: (state, action) => {
            state.sunset = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        weatherClear: (state) => {
            state.isLoading = false;
            state.data = null;
            state.error = null;
            state.sunrise = null;
            state.sunset = null;
            state.status = 200;
            state.city = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.sunrise = false;
            state.sunset = false
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
            console.log(action.payload);
            state.status = action.payload.status;
            console.log(action.payload.status);
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = false;
            console.log("Weather Data Error : ", action.payload);
        })
    }
});

export const { setSunrise, setSunset, setCity, weatherClear } = weather.actions;
export default weather.reducer;