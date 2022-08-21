import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Box } from "@mui/material";
const ToastBox = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme='dark'
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default ToastBox;