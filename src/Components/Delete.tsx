import React from "react";
import PageCardWrapper from "./PageCardWrapper";
import { TextField, Grid, Snackbar } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from "react-hook-form";
import { DeleteRecord } from '../Utils/Servies'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Delete() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [saveBtnText, setSaveBtnText] = React.useState("Delete");

    const onSubmit = async (data: any) => {
        setSaveBtnText('Deleting...');
        const reqData = { id: data.id};
        setLoadingState(true);
        await DeleteRecord(reqData).then((message) => {
            setSaveBtnText('Delete');
            setLoadingState(false);
            setSnackMsg(message)
            setSnackState(true);
        });
    };
    const [loadingState, setLoadingState] = React.useState(false);
    const [snackState, setSnackState] = React.useState(false)
    const [snackMsg, setSnackMsg] = React.useState('')

    return (<>
        <PageCardWrapper Element=
            {
                <Grid container justifyContent="center" alignItems='center'>
                    <Snackbar
                        open={snackState}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
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
                    <Grid style={{ marginBottom: 20 }}><h1>Delete Student Record</h1><form style={{ marginLeft: 20 }} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="ID"
                            variant="standard"
                            inputProps={
                                { ...register("id", { required: true }) }
                            }
                            sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                        /><br />
                        <p style={{ color: "red" }}>{errors.id && "ID is required"} </p><br />
                        <LoadingButton
                            loading={loadingState}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            type="submit"
                        >
                            {saveBtnText}
                        </LoadingButton>
                    </form></Grid>
                </Grid>
            }></PageCardWrapper>
    </>)
}

export default Delete;