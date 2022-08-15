import { Box , IconButton , styled , Typography } from "@mui/material";
import { Colors } from "../Theme";
import Button from "@mui/material/Button";
import "@fontsource/alata";

export const HeaderContainer = styled ( Box ) ( ( { theme } ) => (
    {
        backgroundColor : 'white' ,
        margin : '2rem 4rem 1rem 3rem' ,
        [ theme.breakpoints.down ( "sm" ) ] : {
            margin : '2rem 1rem 1rem 1rem' ,
        } ,
        boxShadow : '0 4px 8px 0 rgba(0,0,0,0.2)' ,
    }
) )

export const FlexContainer = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex' ,
        flexDirection : 'row' ,
        [ theme.breakpoints.down ( "md" ) ] : {
            flexDirection : 'column' ,
        }
    }
) )

export const RowFlex = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'space-between'
    }
) )
export const ProfileImage = styled ( "img" ) ( ( { theme } ) => (
    {
        height : '15rem' ,
        [ theme.breakpoints.down ( "md" ) ] : {
            height : '13rem'
        }
    }
) )
export const ProfileName = styled ( Typography ) ( ( { theme } ) => (
    {
        padding : '2rem' ,
        fontSize : '1.8rem' ,
        fontFamily : "Alata" ,
        [ theme.breakpoints.down ( "md" ) ] : {
            padding : "1rem" ,
            fontSize : '1.2rem' ,
        }
    }
) )

export const LinkContainer = styled ( Box ) ( ( { theme } ) => (
                                                  {
                                                      display : 'flex' ,
                                                      margin : '1rem' ,
                                                  }
                                              )
)
export const ProfileLink = styled ( Typography ) ( ( { theme } ) => (
    {


        color : 'lightbrown' ,
        padding : '1rem' ,
        fontSize : '.95rem' ,
        [ theme.breakpoints.down ( "md" ) ] : {
            padding : "1rem" ,
            fontSize : '1rem' ,
        }
    }
) )
export const EditButton = styled ( IconButton ) ( ( { theme } ) => (
    {
        '&:hover' : {
            transition : "ease-out .5s" ,
            backgroundColor : Colors.primary ,
            color : 'white'
        },
        '&::after' : {
            transition : "ease-out .5s" ,
            backgroundColor : 'white'
        }
    }
) )
export const Skill = styled ( Box ) ( ( { theme } ) => (
    {
        background : 'lightgray' ,
        width : '11rem' ,
        margin : '1rem 0 0 1rem' ,
        padding : '1rem' ,
        borderRadius : '1rem' ,
        color : 'brown' ,
        fontSize : '1rem' ,
        cursor : 'pointer' ,
        '&:hover' : {
            color : 'black' ,
            transition : 'ease-in 0.5s' ,
            background : 'navajowhite'
        } ,
        [ theme.breakpoints.down ( "md" ) ] : {
            marginTop : '1rem' ,
        }
    }
) )
export const EditButtonContainer= styled ( Box ) ( ( { theme } ) => (
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:"flex-end"
    }
) )

export const RightBlock = styled ( Box ) ( ( { theme } ) => (
    {
        display:'flex',
        flexDirection:"column",
        justifyContent:'space-between',
    }
) )
export const ButtonContainer = styled ( Box ) ( ( { theme } ) => (
    {
        display:'flex',
        flexDirection:"row",
        margin:"0 1rem 2rem 0",
        gap:'2',
        [ theme.breakpoints.down ( "lg" ) ] : {
            flexDirection:'column'
        },
        [ theme.breakpoints.down ( "md" ) ] : {
            display:'none'
        }
    }
) )

export const OutlinedButton = styled ( Button ) ( ( { theme } ) => (
    {
        margin:'0 1rem 0 1rem',
        [ theme.breakpoints.down ( "lg" ) ] : {
            marginTop:'1rem',
        },
        '&:hover':{
            backgroundColor:Colors.primary,
            color:'white'
        }

    }
) )