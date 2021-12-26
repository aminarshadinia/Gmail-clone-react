import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  sendMsgisOpen : false,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {

  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMsg: (state) => {
      state.sendMsgisOpen = true;
    },
    closeSendMsg: (state) => {
      state.sendMsgisOpen = false;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { openSendMsg, closeSendMsg } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSendMsgIsOpen = (state) => state.mail.sendMsgisOpen;

export default mailSlice.reducer;
