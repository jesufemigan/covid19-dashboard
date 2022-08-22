import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/covid/dataSlice';

export default configureStore({
  reducer: {
    data: reducer
  }
})