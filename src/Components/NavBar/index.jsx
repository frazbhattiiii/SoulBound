import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SBT , web3 } from "../../Web3Client";
export default function NavBar() {
    function check (){

    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:'#01021f'}}>
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{ mr: 2 }}*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SoulBound
                    </Typography>
                    <Button color="inherit" variant='contained' sx={{
                        backgroundColor:'white',
                        cursor:'pointer',
                        color:'black'
                    }} onClick={()=>check()}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
