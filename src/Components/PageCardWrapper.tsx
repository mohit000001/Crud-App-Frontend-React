import React from "react";
import { Card, CardContent } from "@mui/material";
import "../Styles/PageCard.css"
export default function PageCardWrapper(props: any) {
    return (<>
        <div className="page-card-wrapper">
            <Card className="page-card-body" sx={{ maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "70%"}, margin: '-50px auto',}}>
                <CardContent>
                    {props.Element}
                </CardContent>
            </Card>
        </div>
    </>)
}