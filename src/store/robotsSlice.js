import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { paragraph } from "txtgen";

const initialState = {
  filteredRobots: [],
  robots: [],
  loading: 'idle',
  currentRobot: null,
  error: null,
};

function containsIgnoreCase(mainString, searchString) {
  const regex = new RegExp(searchString, "i");
  return regex.test(mainString);
}

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    filterRobots: (state, action) => {
      state.filteredRobots = state.robots.filter((robot) => containsIgnoreCase(robot.fullName, action.payload));
    },
    findRobot: (state, action) => {
      state.currentRobot = state.filteredRobots.find((robot) => robot.id === action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRobots.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getRobots.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.robots = action.payload;
        state.filteredRobots = action.payload;
      })
      .addCase(getRobots.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getRobots = createAsyncThunk('robots/getRobots', async () => {
  var size = Math.floor(Math.random() * 100) + 3;
  var robotApi = await axios.get(`https://random-data-api.com/api/v2/users?size=${size}&response_type=json`);

  return robotApi.data.map((user) => ({ id: user.uid, avatar: user.avatar, email: user.email, fullName: "" + user.first_name + " " + user.last_name, userName: user.username, essay: paragraph(Math.random() * 10 + 5) }));
});

export const { filterRobots, findRobot } = robotsSlice.actions;
export default robotsSlice.reducer;