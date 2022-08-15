import React from 'react';
import { Box , IconButton , Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    HeaderContainer , FlexContainer , RowFlex , ProfileImage , ProfileName , ProfileLink , EditButton , Skill ,
    LinkContainer , EditButtonContainer , RightBlock , ButtonContainer , OutlinedButton
} from "../../styles/Profile/ProfileHeader";
import { FlexBox } from "../../styles/General";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Button from "@mui/material/Button";

function ProfileHeader ( props ){
    return (
        <>
            <HeaderContainer>
                <RowFlex>
                    <FlexContainer>
                        <ProfileImage src='./images/hero1.png' alt='Profile Image'/>
                        <Box>
                            <ProfileName>Ahmed Fraz</ProfileName>
                            <FlexBox>
                                <Skill>HTML</Skill>
                                <Skill>MERN STACK WEB DEVELOPMENT</Skill>
                            </FlexBox>
                            <LinkContainer>
                                <ProfileLink>
                                    https://frazbhatti.netlify.app
                                </ProfileLink>
                                <Tooltip title="Copy to ClipBoard" arrow>
                                    <EditButton sx={ {
                                        borderRadius : ".25rem" ,
                                    } }>
                                        <ContentCopyIcon/>
                                    </EditButton>
                                </Tooltip>
                            </LinkContainer>
                        </Box>
                    </FlexContainer>

                    <RightBlock>
                        <EditButtonContainer>
                        <EditButton>
                            <EditIcon/>
                        </EditButton>
                        </EditButtonContainer>
                        <Box>
                            <ButtonContainer>

                            <OutlinedButton variant='outlined'>
                                View NFT's
                            </OutlinedButton>
                                <OutlinedButton variant='outlined' endIcon={<HistoryEduIcon/>}>
                                    Write on BlockChain
                                </OutlinedButton>

                            </ButtonContainer>
                        </Box>
                    </RightBlock>
                </RowFlex>
            </HeaderContainer>
        </>
    );
}

export default ProfileHeader;