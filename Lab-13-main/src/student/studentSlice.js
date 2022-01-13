import { createSlice } from '@reduxjs/toolkit';
export const slice = createSlice({
name:"student",
  initialState: {
      studentList:[
          {
        name: "Abdul Rafay",
        roll:"2019-SE-073",
        description:"Student" },],
    selectedStudent:{}},
  reducers: {
    addStudent: (state, action) => {
            state.studentList.push(action.payload) },
    setSelectedStudent: (state, action) => {
        state.selectedStudent=action.payload},},});
export const {  addStudent,setSelectedStudent } = slice.actions;
export const getStudent = state => state.student.studentList;
export default slice.reducer;