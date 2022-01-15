import React from "react";
import PageCardWrapper from "./PageCardWrapper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetRecords } from "../Utils/Servies";
import { Typography, Grid } from "@mui/material";
import LoadingOverlay from 'react-loading-overlay';
import "../Styles/Comman.css";

function List(props: any) {
    const [listData, setListData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {

        GetRecords().then((data: any) => {
            setListData(data);
            setLoading(false);
        }).catch((error: any) => {
            setLoading(false);
            setListData([])
        })
    }, [])
    return (<>
        <PageCardWrapper Element={
            <>

                <Grid container justifyContent="center" alignItems='center'>
                    <Grid sx={{ minWidth: "100%" }}><h1 style={{ marginBottom: 20 }}>Student List</h1>
                        <LoadingOverlay
                            active={loading}
                            spinner
                            text='List Loading...'
                            classNamePrefix='ListLoader_'
                        >
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell align="left">Name</TableCell>
                                            <TableCell align="left">Age</TableCell>
                                            <TableCell align="left">Class</TableCell>
                                            <TableCell align="left">Section</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {listData.length !== 0 ? listData.map((row: any) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell >
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">{row.age}</TableCell>
                                                <TableCell align="left">{row.class}</TableCell>
                                                <TableCell align="left">{row.section}</TableCell>
                                            </TableRow>
                                        )) : <div><Typography style={{ padding: 20}}> No Record Found</Typography> </div>}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </LoadingOverlay>
                    </Grid>
                </Grid>

            </>
        }
        ></PageCardWrapper>
    </>)
}

export default List;