// projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
};

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
  },
});

export const { setTeams } = teamSlice.actions;

export default teamSlice.reducer;
