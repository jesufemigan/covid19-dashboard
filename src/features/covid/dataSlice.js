import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { getAll } from "./dataService";
const initialState = {
  data: [],
  isFiltering: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const getAllData = createAsyncThunk('todo/getAll', async(_, thunkAPI) => {
  try {
    return await getAll()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// const selectTodos = state => state.todos
// export const getCompletedTodos = createSelector(selectTodos, todos => todos.filter(todo => todo.completed))

// export const getActiveTodos = createSelector(selectTodos, todos => todos.filter(todo => !todo.completed))

// export const getAllTodos = createSelector(selectTodos, todos => todos.map(todo => todo))

export const dataSlice = createSlice({
  name: 'covid',
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
        state.todos = action.payload
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