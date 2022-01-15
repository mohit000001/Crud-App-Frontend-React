import React from "react";
import PageCardWrapper from "./PageCardWrapper";

function Home() {
    return(<>
    <PageCardWrapper Element={
       <>
       This is a simple crud application which deal with student data. following are the technical details of project. <br/> <br/> 
       <ul>
           <li style={{margin:10}}> <b>Frontend Techs </b> : Reactjs, Typescript, AWS, React Router, Matrail UI, React hook form, Axios ( Hosted on AWS S3 )</li>
           <li style={{margin:10}}> <b>Backend Techs </b> : Nodejs, AWS, ExpressJs, MongoDB, Mongoss, Typescript ( Hosted on AWS Ec2 )</li>
           <li style={{margin:10}}> <b>Frontend Repository </b> : <a href="https://github.com/mohit000001/Crud-App-Frontend-React" > Github Frontend App</a></li>
           <li style={{margin:10}}> <b>Backend Repository </b> : <a href="https://github.com/mohit000001/Node-Express-CRUD-APP" > Github Backend App</a></li>
       </ul><br/> 
       Please feel free to contribute to these above github projects. We will really appreciate your support.<br/> 
       Author Details : 
       <ul style={{listStyle:"none"}}>
           <li style={{margin:10}}> <b>Name </b>: Mohit Swami</li>
           <li style={{margin:10}}> <b>Github </b>: <a href="https://github.com/mohit000001" > MohitS</a></li>
           <li style={{margin:10}}> <b>Stackoverflow </b>: <a href="https://stackoverflow.com/users/6374765/mohit-swami"> MohitS</a></li>
           <li style={{margin:10}}> <b>LinkedIN </b>: <a href="https://www.linkedin.com/in/mohit-swami-008098190/" > MohitS</a></li>
       </ul>
       </> 
    }></PageCardWrapper>
    </>)
}

export default Home;