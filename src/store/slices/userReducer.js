import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setUser: (state, payload) => {
        const {token} = payload.payload;
      console.log(token);
      state.token = token;
      //console.log(state.token);
    },
    showUser: (state) => {
      console.log(state.token);
    },
  },
});

export const { setUser, showUser } = userSlice.actions;

export default userSlice.reducer;
