import { Box , styled , Typography } from "@mui/material";
import { Colors } from "../Theme";
import "@fontsource/alata";

export const HeroContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'30rem',
    flexWrap:'wrap',
    marginLeft:'2rem',
        [theme.breakpoints.down("md")]: {
           marginLeft:"1rem",
            width:'25rem',
    },
}))
export const HeroCurve = styled(Box)(({theme})=>({
    display: 'block',
    boxSizing: 'border-box',
    height: '43rem',
    backgroundColor: Colors.primary,
    clipPath: 'ellipse(75% 100% at 25% 0%)',
    [theme.breakpoints.down("md")]: {
        height: "38rem",
    },
    [theme.breakpoints.down("sm")]: {
        height: "35rem",
    },
}))

export const HeroTitle = styled(Typography)(({theme})=>({
   color:"white",
   fontSize:"3rem",
    fontFamily: '"Alata", sans-serif',
    [theme.breakpoints.down("md")]: {
       fontSize:"2.5rem",
    }
}))
export const HeroDescription = styled(Typography)(({theme})=>({
    color:Colors.light,
    fontSize:"1.5rem",
    fontFamily: '"Alata", sans-serif',
    marginTop:'1rem',
    [theme.breakpoints.down("md")]: {
        fontSize:"1rem",
    }

}))

export const ImageContainer = styled(Box)(({theme})=>({
    display:'flex',
    [theme.breakpoints.down("md")]: {
        flexDirection:'column',
        marginTop:'-1rem',
    },
    flexDirection:'row',
    marginTop:'-30rem',
    justifyContent:'flex-end',
}))

export const HeroImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",
    [theme.breakpoints.down("md")]: {
        width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "320px",
        height: "300px",
    },
}));