import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { closeContactForm , closeContactInformation } from "../../../features/general/appSlice";
import { useDispatch , useSelector } from "react-redux";
import Slide from "@mui/material/Slide";
import ContactEditForm from "./ContactEditForm";
import ContactInfo from "./ContactInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function ContactForm ( props ){
    const [open, setOpen] = React.useState(true);
    const {contactForm,contactInformation} = useSelector ( state => state.app );
    const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleClose = () => {

        contactForm?dispatch(closeContactForm()):dispatch(closeContactInformation());
    };
    return (
        <>
            {contactForm || contactInformation?
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle>{contactInformation?name:"Edit Contact Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {contactInformation?'Contact Info':"Edit Contact Information"}
                    </DialogContentText>
                    {contactInformation?<ContactInfo/>:<ContactEditForm/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                </DialogActions>
            </Dialog>:null}
        </>
    );
}

export default ContactForm;