import { styled , Typography } from "@mui/material";
import { Colors } from "../Theme";

export const FlexBox = styled(Typography)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',

    [theme.breakpoints.down("md")]: {
        flexDirection:'column',
    }
}))
export const Description = styled(Typography)(({theme})=>({
color:Colors.light,
fontSize:"1rem",
    width:'25rem',
fontFamily: '"Alata", sans-serif',
marginLeft:'1rem',

}))
export const SmallImage = styled("img")(({ src, size ,theme }) => ({
    width: parseInt(size),
    [theme.breakpoints.down("lg")]: {
        width: size-40,
    }

}))
export const LargeImage = styled("img")(({ src, size ,theme }) => ({
    width: parseInt(size),
    [theme.breakpoints.down("md")]: {
        width: size-100,
    }

}))