import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Student from "../student/Student";
import { LocalizationProvider } from "@mui/lab";
import Container from "@mui/material/Container";
import { validationSchema } from "./validator";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "formik-mui";
import { styled } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { addStudent } from "../student/studentSlice";
import "./index.css";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function AlignItemsList() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rollNo, setRollNo] = useState("");
  const emptyField = () => {
    setName("");
    setRollNo("");
    setDescription("");
  };
  const handleOpen = () => {
    setOpen(true);
    emptyField();
  };
  const handleClose = () => setOpen(false);

  const studentList = useSelector((state) => state.student.studentList);

  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {studentList.map((value) => {
          return (
            <>
              <Student
                name={value.name}
                roll={value.roll}
                description={value.description}
              />
            </>
          );
        })}
      </List>
      <Button variant="contained" onClick={handleOpen}>
        Add <AddIcon />
      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <Box sx={style}>
              <Formik
                initialValues={{
                  Name: "",
                  RollNo: "",
                  Description: "",
                }}
                validationSchema={() => {
                  return validationSchema();
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    let { Name, RollNo, Description } = values;
                    setSubmitting(false);
                    dispatch(
                      addStudent({
                        name: Name,
                        roll: RollNo,
                        description: Description,
                      })
                    );
                    resetForm();
                    handleClose()
                  }, 500);
                }}
              >
                {({ values, submitForm, isSubmitting }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Form>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          name="Name"
                          sx={
                            {
                              width:'100%'
                            }
                          }
                          type="text"
                          label="Name"
                          helperText="Please Enter Name"
                        />
                      </Box>
                      <Box margin={1}>
                        <Field
                        sx={
                          {
                            width:'100%'
                          }
                        }
                          component={TextField}
                          name="RollNo"
                          type="text"
                          label="RollNo"
                          helperText="Please Enter Roll No"
                        />
                      </Box>
                      <Box margin={1}>
                        <Field
                          component={TextField}
                          name="Description"
                          type="text"
                          label="Description"
                          sx={
                            {
                              width:'100%'
                            }
                          }
                          multiline
                          rows={4}
                          helperText="Please Enter Description"
                        />
                      </Box>
                      <Box margin={1}>
                        <Button
                          sx={{ margin: 1 }}
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
                        >
                          Submit
                        </Button>
                      </Box>
                      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                    </Form>
                  </LocalizationProvider>
                )}
              </Formik>
            </Box>
          </>
        </Modal>
      </div>
    </Container>
  );
}
