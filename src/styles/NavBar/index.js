import { Box , styled , Typography } from "@mui/material";
import { Colors } from "../Theme";

export const NavContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    [theme.breakpoints.down("md")]: {
        fontSize:"1rem",
    },
    height:'4rem',
    backgroundColor:Colors.primary,
}))