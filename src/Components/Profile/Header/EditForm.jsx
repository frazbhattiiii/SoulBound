import React , { useState,useMemo } from 'react';
import { Box , FormControl , Grid , InputLabel , MenuItem , TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ToastBox from "../../shared/ToastContainer";
import { toast } from "react-toastify";
import { closeEditFrom } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import Select from 'react-select';
import countryList from 'react-select-country-list'
import { customStyles } from "../../../styles/Profile/ProfileHeader";

function EditForm ( props ){
    const [name, setName] = useState();
    const [tagline, setTagline] = useState();
    const [location, setLocation] = useState();
    const [company, setCompany] = useState();
    const [education, setEducation] = useState();
    const [country, setCountry] = useState();
    const dispatch = useDispatch();
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        setCountry(country)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name  || !tagline  || !location || !company  || !education || !country){
            toast('Please fill all the fields');
        }
        else{
            console.log(name, tagline, location, company, education,country);
            toast('Profile Updated');
            dispatch(closeEditFrom());
        }
    }
    return (
        <>
            <ToastBox/>
        <Box style={{
            display: 'flex',
            flexDirection:"column",
            padding:'1rem',
            gap:'2'
        }}>
            <TextField id="outlined-basic"
                       label="Name"
                       value={name}
                       variant="outlined"
                       onChange={(e)=>setName(e.target.value)}
                        sx={{
                            width:'100%',
                            marginBottom:'1rem'
                        }}
            />
            <TextField id="outlined-basics"
                       label="Tag Line"
                       value={tagline}
                       variant="outlined"
                       onChange={(e)=>setTagline(e.target.value)}
                       sx={{
                           width:'100%',
                           marginBottom:'1rem'
                       }}
            />

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{
               gap:'1rem'
            }}>
            <TextField id="outlined-basicing"
                       label="Company"
                       value={company}
                       variant="outlined"
                       onChange={(e)=>setCompany(e.target.value)}
                       sx={{
                           width:'100%',
                           marginBottom:'1rem'
                       }}
            />
            <TextField id="outlined-basic"
                       label='Education'
                       value={education}
                       variant="outlined"
                       onChange={(e)=>setEducation(e.target.value)}
                       sx={{
                           width:'100%',
                           marginBottom:'1rem'
                       }}
            />
            </Stack>
            <TextField id="outlined-basic"
                       label="Location"
                       value={location}
                       variant="outlined"
                       onChange={(e)=>setLocation(e.target.value)}
                       sx={{
                           width:'100%',
                           marginBottom:'1rem'
                       }}
            />
            <Box sx={{
                marginBottom:'1rem',
                height:"4rem",
            }}>
                <Select options={options} value={country} onChange={changeHandler} styles={customStyles}/>
            </Box>
            <Button onClick={handleSubmit} sx={{
                width:'100%',
                backgroundColor:'darkslateblue',
                color:'white',
                '&:hover':{
                    backgroundColor:'darkmagenta'
                }
            }}>
                Change
            </Button>

        </Box>
        </>
    );
}

export default EditForm;