import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import teamSlice from "./slices/teamSlice";

const store = configureStore({
  reducer: {
    projects: projectSlice,
    teams: teamSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
