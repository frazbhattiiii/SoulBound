import * as React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton} from '@mui/material';
import { SBT , GAS_LIMIT } from "../../Web3Client";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LoginDialog from "../LoginDialogue";
import { Link , useNavigate } from "react-router-dom";
import ToastBox from "../../utils/ToastContainer";
import {toast} from 'react-toastify';
export default function NavBar() {
    const navigate = useNavigate();
    
    const [address, setAddress] = useState("")
    function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                console.log(`Account connected: ${accounts[0]}`)
                toast("Account connected: " + accounts[0])

                setAddress(accounts[0])
            })
            .catch((err) => {
                console.log(err);
                return;
            });
        
            window.ethereum.on('accountsChanged', function (accounts) {
                toast(`Account Changed: ${accounts[0]}`)
                console.log(`Account changed: ${accounts[0]}`)
                setAddress(accounts[0])
            });
        } else {
            toast('Please install MetaMask');
            console.log(`MetaMask not detected!`)
        }
    }

    async function login() {
        if (address === "") {
            console.log("Connect MetaMask to continue!")
            return;
        }

        try {
            let isRegistered = await SBT.methods.getCountIssued().call({from: address, gas: GAS_LIMIT});
            if (parseInt(isRegistered) !== 0) {
                console.log("Already registered!")
            } else {
                await SBT.methods.registerCompany().send({from: address, gas: GAS_LIMIT}).then(
                    async (tx) => {
                      let result = await SBT.methods.getCountIssued().call({from: address, gas: GAS_LIMIT});
                      if (parseInt(result) === 1) {
                        console.log("Company Registered!")
                      }
                    }
                  );
            }
        } catch(err) {
            console.log(err)
        }
    }

    function check (){
    navigate("/login");
    }

    return (
        <>
        <Box sx={{ flexGrow: 1}}>
            <ToastBox/>
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
        </>
    );
}
