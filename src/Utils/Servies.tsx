import axios from "axios";
import { Student, updateRequest } from "./TypesInterfaces";

const BaseUrl = `${process.env.REACT_APP_API_ENDPOINT}:${process.env.REACT_APP_API_ENDPOINT_PORT}`;


const GetRecords = async () => {
    let resData : Student[]= [];
    try {
       const response = await axios.get(`${BaseUrl}/student`);
       if(response.data.status === "successfull"){
        resData = response.data.data;
       } else {
        resData = [];
       }
    }
    catch(error:any){
       console.log(error.message);
       resData = [];
    }
    return resData;
}
  
const AddRecord = async (data: Student)  => {
  let resMessage = "";
  try {
     const response = await axios.post(`${BaseUrl}/student`, data);
     if(response.data.status === "successfull"){
        resMessage = "Record Added Sucessfully"
     } else {
        resMessage = response.data.message;
     }
  }
  catch(error:any){
     console.log(error.message);
     resMessage = error.message;
  }
  return resMessage;
}

const EditRecord = async (data: updateRequest)  => {
    let resMessage = "";
    try {
       const response = await axios.put(`${BaseUrl}/student`, data);
       if(response.data.status === "successfull"){
          resMessage = "Record Updated Sucessfully"
       } else {
          resMessage = response.data.message;
       }
    }
    catch(error:any){
       console.log(error.message);
       resMessage = error.message;
    }
    return resMessage;
}

const DeleteRecord = async (data: any)  => {
    let resMessage = "";
    try {
       const response = await axios.delete(`${BaseUrl}/student`, {params: {id: data.id}});
       if(response.data.status === "successfull"){
          resMessage = "Record Deleted Sucessfully"
       } else {
          resMessage = response.data.message;
       }
    }
    catch(error:any){
       console.log(error.message);
       resMessage = error.message;
    }
    return resMessage;
  }


export {AddRecord, EditRecord, DeleteRecord, GetRecords}