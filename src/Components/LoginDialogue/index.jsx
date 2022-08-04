import * as React                 from 'react';
import PropTypes                  from 'prop-types';
import Button                     from '@mui/material/Button';
import Avatar                     from '@mui/material/Avatar';
import List                       from '@mui/material/List';
import ListItem                   from '@mui/material/ListItem';
import ListItemAvatar             from '@mui/material/ListItemAvatar';
import ListItemText               from '@mui/material/ListItemText';
import DialogTitle                from '@mui/material/DialogTitle';
import Dialog                     from '@mui/material/Dialog';
import PersonIcon                 from '@mui/icons-material/Person';
import AddIcon                    from '@mui/icons-material/Add';
import ApartmentIcon              from '@mui/icons-material/Apartment';
import Typography                 from '@mui/material/Typography';
import { blue }                   from '@mui/material/colors';
import { toast , ToastContainer } from "react-toastify";
import { GAS_LIMIT , SBT }        from "../../Web3Client";
import ToastBox                   from "../../utils/ToastContainer";
import { useState }               from "react";

export default function LoginDialog () {
    const [ open , setOpen ] = React.useState ( true );
    const [ address , setAddress ] = useState ( "" );
    console.log ( open )

    function connectWallet () {
        if ( typeof window.ethereum !== 'undefined' ) {
            window.ethereum.request ( { method : 'eth_requestAccounts' } )
                  .then ( ( accounts ) => {
                      toast ( `Account connected: ${ accounts[ 0 ] }` )
                      setAddress ( accounts[ 0 ] )
                  } )
                  .catch ( ( err ) => {
                      toast ( 'Some Thing went wrong' );
                      console.log ( err );
                      return;
                  } );

            window.ethereum.on ( 'accountsChanged' , function ( accounts ) {
                console.log ( `Account changed: ${ accounts[ 0 ] }` )
                toast ( `Account changed: ${ accounts[ 0 ] }` )
                setAddress ( accounts[ 0 ] )
            } );
        }
        else {
            console.log ( `MetaMask not detected!` )
            toast ( 'Please install MetaMask' );
        }
    }

    async function login () {
        if ( address === "" ) {
            console.log ( "Connect MetaMask to continue!" )
            return;
        }

        try {
            let isRegistered = await SBT.methods.getCountIssued ().call ( { from : address , gas : GAS_LIMIT } );
            if ( parseInt ( isRegistered ) !== 0 ) {
                toast ( 'Already registered!' );
                console.log ( "Already registered!" )
            }
            else {
                await SBT.methods.registerCompany ().send ( { from : address , gas : GAS_LIMIT } ).then (
                    async ( tx ) => {
                        let result = await SBT.methods.getCountIssued ().call ( { from : address , gas : GAS_LIMIT } );
                        if ( parseInt ( result ) === 1 ) {
                            toast ( 'Company Registered!' );
                            console.log ( "Company Registered!" )
                        }
                    }
                );
            }
        }
        catch ( err ) {
            console.log ( err )
        }
    }

    const handleClose = () => {
        setOpen ( false );
        // onClose();
    };

    const handleListItemClick = ( value ) => {
        connectWallet ();
        login ();
    };


    return (
        <>
            <ToastBox/>
            <Dialog onClose={ handleClose } open={ open }>

                <DialogTitle>Login as</DialogTitle>
                <List sx={ { pt : 0 } }>
                    <ListItem button onClick={ () => handleListItemClick ( 'user' ) }>
                        <ListItemAvatar>
                            <Avatar sx={ { backgroundColor : blue[ 100 ] , color : blue[ 600 ] } }>
                                <PersonIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ 'As a User' }/>
                    </ListItem>
                    <ListItem button onClick={ () => handleListItemClick ( 'company' ) }>
                        <ListItemAvatar>
                            <Avatar sx={ { backgroundColor : blue[ 100 ] , color : blue[ 600 ] } }>
                                <ApartmentIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ 'As a Company' }/>
                    </ListItem>
                </List>
            </Dialog>
        </>
    );
}

