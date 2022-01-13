import {object, string, date, array} from 'yup';

const tomorrowDate = new Date(new Date().setDate(new Date().getDate() + 1));
const regex = new RegExp(/^a...s$/)
export const validationSchema = () =>{
  console.log("chalrha ")
  return object().shape({
    Name: string().min(2, 'Atleast 2 character required').required("Please Enter your Name"),
    RollNo: string().matches(
        /^\d{4}-[a-zA-Z]{2}-\d{3}$/,
        "Roll No must be in a given format (i.e 2019-SE-073)"
      ).required("Please Enter your Roll No"),
    Description: string().min(30, 'Atleast 30 character required').required("Please Enter Description"),
  });
}
  
