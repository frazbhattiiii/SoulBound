import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton} from '@mui/material';
import { SBT , web3 } from "../../Web3Client";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LoginDialog from "../LoginDialogue";
import { Link , useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();
    function check (){
    navigate("/login");
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor:'#01021f'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <CurrencyBitcoinIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor:'pointer' }}>
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
