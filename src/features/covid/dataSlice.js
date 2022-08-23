import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api";

const initialState = {
  data: {},
  isFiltering: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const getAllData = createAsyncThunk('data/getAll', async(_, thunkAPI) => {
  try {
    const data = await API.get('/')
    return data.data.data
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetTodo: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
      state.isError = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.data = action.payload
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.isLoading= false
        state.isError = true
        state.message = action.payload
      })
      
  }
})

export const { resetTodo } = dataSlice.actions
export default dataSlice.reducer