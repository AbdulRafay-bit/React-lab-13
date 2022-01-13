import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {
    setSelectedStudent
  } from "../student/studentSlice";
import {  useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
const Student=({name, roll, description})=>{
    const dispatch = useDispatch();
    const setSelectedStudentFun=()=>{
  dispatch(setSelectedStudent({name:name, roll: roll, description, description}))}
    return(<>
        <ListItem alignItems="flex-start" onClick={setSelectedStudentFun}>
            <ListItemAvatar>
            <Avatar alt={`${name}`} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={`${name} (${roll})`}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    {description.length>15 ? `${description.slice(0,15)}...`:description}
                </Typography>
                </React.Fragment>} />
        </ListItem>
        <Divider variant="inset" component="li" /></> )}
   export default Student