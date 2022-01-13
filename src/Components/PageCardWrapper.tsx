import React from "react";
import { Card, CardContent } from "@mui/material";
import "../Styles/PageCard.css"
export default function PageCardWrapper(props: any) {
    return (<>
        <div className="page-card-wrapper">
            <Card sx={{ maxWidth: '70%', margin: '-50px auto',}}>
                <CardContent sx={{ padding:'10%'}} >
                    {props.Element}
                </CardContent>
            </Card>
        </div>
    </>)
}