import React from "react";
import "../Styles/Header.css";
import Logo from '../Assets/logo512.png';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Stack } from "@mui/material";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link } from "react-router-dom";


export default function Header(): JSX.Element {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (<>
        <div className="header-wrapper">
            <Grid container justifyContent="space-between">
                <Grid item>
                    <img src={Logo} width={80} height={60} alt="Logo" />
                </Grid>
                <Grid item>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{ color: "white", fontSize: 20 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{ color:"#04619f", textDecoration: 'none' }} to="/">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <HomeSharpIcon style={{ fontSize: 20 }}></HomeSharpIcon>
                                        <span style={{ fontSize: 18 }}>Home </span>
                                    </Stack>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{ color:"#04619f", textDecoration: 'none' }} to="/add">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <AddCircleOutlineSharpIcon style={{ fontSize: 20 }}></AddCircleOutlineSharpIcon >
                                        <span style={{ fontSize: 18 }}>Add </span>
                                    </Stack>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{ color:"#04619f", textDecoration: 'none' }} to="/edit">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <EditSharpIcon style={{ fontSize: 20 }}></EditSharpIcon >
                                        <span style={{ fontSize: 18 }}>Edit </span>
                                    </Stack>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{color:"#04619f", textDecoration: 'none' }} to="/delete">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <DeleteForeverSharpIcon style={{ fontSize: 20 }}></DeleteForeverSharpIcon >
                                        <span style={{ fontSize: 18 }}>Delete </span>
                                    </Stack>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{color:"#04619f", textDecoration: 'none' }} to="/list">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <ListSharpIcon style={{ fontSize: 20 }}></ListSharpIcon >
                                        <span style={{ fontSize: 18 }}>List </span>
                                    </Stack>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ m: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                       <Link style={{ color: "white", textDecoration: 'none', marginLeft: 20 }} to="/">
                            <Stack className="navigation-link-wrapper" direction="row" alignItems="center" gap={1}>
                                <HomeSharpIcon style={{ fontSize: 20 }}></HomeSharpIcon >
                                <span style={{ fontSize: 18 }}>Home </span>
                            </Stack>
                        </Link>
                        <Link style={{ color: "white", textDecoration: 'none', marginLeft: 20 }} to="/add">
                            <Stack className="navigation-link-wrapper" direction="row" alignItems="center" gap={1}>
                                <AddCircleOutlineSharpIcon style={{ fontSize: 20 }}></AddCircleOutlineSharpIcon >
                                <span style={{ fontSize: 18 }}>Add </span>
                            </Stack>
                        </Link>
                        <Link style={{ color: "white", textDecoration: 'none', marginLeft: 20 }} to="/edit">
                            <Stack className="navigation-link-wrapper" direction="row" alignItems="center" gap={1}>
                                <EditSharpIcon style={{ fontSize: 20 }}></EditSharpIcon >
                                <span style={{ fontSize: 18 }}>Edit </span>
                            </Stack>
                        </Link>
                        <Link style={{ color: "white", textDecoration: 'none', marginLeft: 20 }} to="/delete">
                            <Stack className="navigation-link-wrapper" direction="row" alignItems="center" gap={1}>
                                <DeleteForeverSharpIcon style={{ fontSize: 20 }}></DeleteForeverSharpIcon >
                                <span style={{ fontSize: 18 }}>Delete </span>
                            </Stack>
                        </Link>
                        <Link style={{ color: "white", textDecoration: 'none', marginLeft: 20 }} to="/list">
                            <Stack className="navigation-link-wrapper" direction="row" alignItems="center" gap={1}>
                                <ListSharpIcon style={{ fontSize: 20 }}></ListSharpIcon >
                                <span style={{ fontSize: 18 }}>List </span>
                            </Stack>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </div>
    </>)
}