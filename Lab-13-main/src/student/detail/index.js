import React from 'react'
import Typography from '@mui/material/Typography';
import {  useSelector } from 'react-redux';
import CustomizedTables from './table'
const StudentDetail=()=>{
    const {name, roll, description}=useSelector(state=>state.student.selectedStudent)
    return(
        <CustomizedTables name={name} rollNo={roll} description={description}/>
               
    )
}
   export default StudentDetail