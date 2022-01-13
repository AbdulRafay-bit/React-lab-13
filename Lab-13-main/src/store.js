import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './student/studentSlice';

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
