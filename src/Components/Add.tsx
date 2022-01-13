import React from "react";
import PageCardWrapper from "./PageCardWrapper";
import { TextField, Button} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from "react-hook-form";

function Add() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data :any) => console.log(data);
    const [loadingState, setL] = React.useState(false);
    return(<>
    <PageCardWrapper Element=
    {
    <form onSubmit={handleSubmit(onSubmit)}>
       <TextField
          label="Full Name"
          variant="standard"
          inputProps={
            {...register("name", { required: true })}
          }
        />
      {errors.name && "name is required"} <br/><br/>
      
      <TextField
          label="Age"
          variant="standard"
          inputProps={
            {...register("age", { required: true }), type: "number"}
          }
        />
      {errors.name && "name is required"} <br/><br/>

      {/* <Button type="submit" variant="contained">submit</Button> */}
      <LoadingButton
        loading={loadingState}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        onClick={()=>{
            setL(!loadingState)
        }}
        sx={{type:"submit"}}
      >
        Save
      </LoadingButton>
    </form>
    }></PageCardWrapper>
    </>)
}

export default Add;