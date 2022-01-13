import React from 'react'
import Shell from './Shell/index'
import StudentDetail from './student/detail/index';
import { useSelector, useDispatch } from 'react-redux';
const App=()=> {
const selectedStudent=useSelector(state=>state.student.selectedStudent)
    return(
      <div className="countContainer">
        <Shell/>
        <StudentDetail/>
      </div>
    )}
export default App