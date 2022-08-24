import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton , styled } from "@mui/material";

const StyledIconButton = styled(IconButton)`
  width:3rem;
  height:3rem;
  border-radius:2rem;
  background:#ccc;
  :hover{
    background:#999999;
    transition: all ease-in-out .3s;
    color:floralwhite;
  }
`;
function EditButton ( props ){
    return (
        <>
        <StyledIconButton >
            <EditIcon/>
        </StyledIconButton>
        </>
    );
}

export default EditButton;