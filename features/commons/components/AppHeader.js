import React from 'react';
import Image from 'next/image'

import {
    AppBar, Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Link as LinkMui,
    Menu, MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {Adb, Menu as MenuIcon} from "@mui/icons-material";
import Link from "next/link";
import {useRouter} from "next/router";
import CurrentUserEmail from "./CurrentUserEmail";

const pages = [
    {path: '/users', label: 'Utilisateurs'},
    {path: '/todos', label: 'A faire'},
    {path: '/text-size', label: 'Text size'},
    {path: '/base-test', label: 'Test de base'},
    {path: '/posts', label: 'Les posts'},
    {path: '/accordion', label: 'Test accordion'},
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppHeader() {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = url => () => {
        setAnchorElNav(null);

        router.push(url);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Adb sx={{display: 'flex', mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                onClick={handleCloseNavMenu(page.path)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    <Box display={"flex"} alignItems={"center"} sx={{flexGrow: 0}}>
                        <CurrentUserEmail/>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0, ml: 1}}>
                                <Avatar alt="Remy Sharp" src="/profile01.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppHeader;