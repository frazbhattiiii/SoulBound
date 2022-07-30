import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export default function LoginDialog() {
    const [open,setOpen] = React.useState(true);
    console.log(open)

    const handleClose = () => {
        setOpen(false);
        // onClose();
    };

    const handleListItemClick = (value) => {
        console.log(value)
        setOpen(false);
    };


    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Login as</DialogTitle>
            <List sx={{ pt: 0 }}>
                    <ListItem button onClick={() => handleListItemClick('user')}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={'As a User'} />
                    </ListItem>
                <ListItem button onClick={() => handleListItemClick('company')}>
                    <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                            <ApartmentIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={'As a Company'} />
                </ListItem>
            </List>
        </Dialog>
    );
}

