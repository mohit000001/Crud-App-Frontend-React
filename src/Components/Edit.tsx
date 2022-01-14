import React from "react";
import PageCardWrapper from "./PageCardWrapper";
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Snackbar } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from "react-hook-form";
import { EditRecord } from '../Utils/Servies'
import { updateRequest } from "../Utils/TypesInterfaces";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Edit() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data: any) => {
        setLoadingState(true);
        const requestData: updateRequest = {
            query: {
                id: data.id,
            },
            data: {
                name: data.name,
                age: Number(data.age),
                class: data.class,
                section: data.section
            }
        }
        await EditRecord(requestData).then((message) => {
            setLoadingState(false);
            setSnackMsg(message)
            setSnackState(true);
        });
    };
    const [loadingState, setLoadingState] = React.useState(false);
    const [cls, setCls] = React.useState('');
    const [sec, setSec] = React.useState('');
    const [snackState, setSnackState] = React.useState(false)
    const [snackMsg, setSnackMsg] = React.useState('')

    const handleClassChange = (event: any) => {
        setCls(event.target.value);
    };

    const handleSectionChange = (event: any) => {
        setSec(event.target.value);
    };

    return (<>
        <PageCardWrapper Element=
            {
                <Grid container justifyContent="center" alignItems='center'>
                    <Snackbar
                        open={snackState}
                        autoHideDuration={6000}
                        message={snackMsg}
                        onClose={() => { setSnackState(false) }}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                sx={{ p: 0.5 }}
                                onClick={() => { setSnackState(false) }}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                    />
                    <Grid style={{ marginBottom: 20 }}><h1>Edit Student Record</h1><form style={{ marginLeft: 20 }} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="ID"
                            variant="standard"
                            inputProps={
                                { ...register("id", { required: true }) }
                            }
                            sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                        /><br />
                        <p style={{ color: "red" }}>{errors.id && "ID is required"} </p><br />
                        <TextField
                            label="Full Name"
                            variant="standard"
                            inputProps={
                                { ...register("name", { required: true }) }
                            }
                            sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                        /><br />
                        <p style={{ color: "red" }}>{errors.name && "Name is required"}</p> <br />

                        <TextField
                            label="Age"
                            variant="standard"
                            inputProps={
                                { ...register("age", { required: true }), type: "number" }
                            }
                            sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                        /><br />
                        <p style={{ color: "red" }}>{errors.name && "Age is required"}</p> <br />
                        <FormControl variant="standard" sx={{ minWidth: { xs: 100, sm: 100, md: 120, lg: 120 } }}>
                            <InputLabel id="edit-form-class">Class</InputLabel>
                            <Select
                                labelId="edit-form-class"
                                id="edit-form-class"
                                value={cls}
                                onChange={handleClassChange}
                                inputProps={
                                    { ...register("class", { required: true }) }
                                }
                                label="Class"
                            >
                                <MenuItem value={"1th"}>1th</MenuItem>
                                <MenuItem value={"2nd"}>2nd</MenuItem>
                                <MenuItem value={"3rd"}>3rd</MenuItem>
                                <MenuItem value={"4th"}>4th</MenuItem>
                                <MenuItem value={"5th"}>5th</MenuItem>
                                <MenuItem value={"6th"}>6th</MenuItem>
                                <MenuItem value={"7th"}>7th</MenuItem>
                                <MenuItem value={"8th"}>8th</MenuItem>
                                <MenuItem value={"9th"}>9th</MenuItem>
                                <MenuItem value={"10th"}>10th</MenuItem>
                            </Select>
                        </FormControl><br />
                        <p style={{ color: "red" }}>{errors.class && "class is required"}</p> <br />
                        <FormControl variant="standard" sx={{ minWidth: { xs: 100, sm: 100, md: 120, lg: 120 } }}>
                            <InputLabel id="edit-form-sec">Section</InputLabel>
                            <Select
                                labelId="edit-form-sec"
                                id="edit-form-sec"
                                value={sec}
                                onChange={handleSectionChange}
                                inputProps={
                                    { ...register("section", { required: true }) }
                                }
                                label="section"
                            >
                                <MenuItem value={"A"}>A</MenuItem>
                                <MenuItem value={"B"}>B</MenuItem>
                                <MenuItem value={"C"}>C</MenuItem>
                                <MenuItem value={"D"}>D</MenuItem>
                            </Select>
                        </FormControl> <br />
                        <p style={{ color: "red" }}>{errors.section && "section is required"}</p> <br />
                        <LoadingButton
                            loading={loadingState}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            type="submit"
                        >
                            Edit
                        </LoadingButton>
                    </form></Grid>
                </Grid>
            }></PageCardWrapper>
    </>)
}

export default Edit;