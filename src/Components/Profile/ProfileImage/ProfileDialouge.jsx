import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import EditTab from "./EditTab";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { closeImageProfileDialogue } from "../../../features/general/appSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageChangeDialogue() {
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();
    const {imageProfileDialogue} = useSelector(state => state.app);
    const navigate = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        dispatch(closeImageProfileDialogue());
    };

    return (
        <>
            {imageProfileDialogue ?
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Profile Image Changings"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Profile Image Settings
                    </DialogContentText>
                    <EditTab/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                </DialogActions>
            </Dialog>:null}
        </>
    );
}
