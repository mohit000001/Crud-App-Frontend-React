import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { User } from "../Utils/TypesInterfaces";
import { useNavigate } from "react-router-dom";
import PageCardWrapper from "./PageCardWrapper";
import { TextField, Grid, Snackbar } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useForm } from "react-hook-form";
import { login } from "../Utils/AuthServies";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [snackState, setSnackState] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");
  const [loadingState, setLoadingState] = React.useState(false);
  const [saveBtnText, setSaveBtnText] = React.useState("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setSaveBtnText("Login...");
    setLoadingState(true);
    const requestData: User = {
      userName: data.userName,
      password: data.password,
    };
    await login(requestData).then((message: any) => {
      if (message === true) {
        navigate("/add");
      } else {
        setSaveBtnText("Login");
        setLoadingState(false);
        setSnackMsg(message);
        setSnackState(true);
      }
    });
  };
  return (
    <>
      <PageCardWrapper
        Element={
          <Grid container justifyContent="center" alignItems="center">
            <Snackbar
              open={snackState}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              autoHideDuration={6000}
              message={snackMsg}
              onClose={() => {
                setSnackState(false);
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  sx={{ p: 0.5 }}
                  onClick={() => {
                    setSnackState(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              }
            />
            <Grid style={{ marginBottom: 20 }}>
              <h1>Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Username"
                  variant="standard"
                  inputProps={{ ...register("userName", { required: true }) }}
                  sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                />{" "}
                <p style={{ color: "red" }}>
                  {errors.userName && "Username is required"}
                </p>{" "}
                <br />
                <TextField
                  label="Password"
                  variant="standard"
                  inputProps={{ ...register("password", { required: true }) }}
                  sx={{ minWidth: { xs: 50, sm: 100, md: 200, lg: 300 } }}
                />
                <p style={{ color: "red" }}>
                  {errors.password && "Password is required"}
                </p>{" "}
                <br />
                <LoadingButton
                  loading={loadingState}
                  loadingPosition="start"
                  startIcon={<EditSharpIcon />}
                  variant="contained"
                  type="submit"
                >
                  {saveBtnText}
                </LoadingButton>
              </form>
            </Grid>
          </Grid>
        }
      ></PageCardWrapper>
    </>
  );
}
