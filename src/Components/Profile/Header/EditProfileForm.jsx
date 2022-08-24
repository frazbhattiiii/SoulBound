import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import EditForm from "./EditForm";
import { useDispatch , useSelector } from "react-redux";
import { closeEditFrom } from "../../../features/general/appSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditProfileForm() {
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();
    const {editForm} = useSelector(state => state.app);

    const handleClose = () => {
        dispatch(closeEditFrom());
    };

    return (
        <>
            {editForm ?
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    scrollBehavior: 'smooth',
                }}
            >
                <DialogTitle>{"Edit Profile"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Editing Profile
                    </DialogContentText>
                    <EditForm/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                </DialogActions>
            </Dialog>:null}
        </>
    );
}
