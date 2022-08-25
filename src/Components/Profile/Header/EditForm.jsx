import React , { useState , useMemo } from 'react';
import { Box , TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import ToastBox from "../../shared/ToastContainer";
import { toast } from "react-toastify";
import { closeEditFrom } from "../../../features/general/appSlice";
import { useDispatch , useSelector } from "react-redux";
import Select from 'react-select';
import countryList from 'react-select-country-list'
import { customStyles , FormContainer , PurpleButton } from "../../../styles/Profile/ProfileHeader";
import { setUserInfo } from "../../../features/user/userSlice";


function EditForm ( props ){
    const {name,location,company,country,tagline,education} = useSelector ( state => state.user );
    const [ Name , setName ] = useState (name);
    const [ Tagline , setTagline ] = useState (tagline);
    const [ Location , setLocation ] = useState (location);
    const [ Company , setCompany ] = useState (company);
    const [ Education , setEducation ] = useState (education);
    const [ Country , setCountry ] = useState (country);
    const dispatch = useDispatch ();
    const options = useMemo ( () => countryList ().getData () , [] )

    const changeHandler = country => {
        setCountry ( country )
    }
    const handleSubmit = ( e ) => {
        e.preventDefault ();
        const {label,value} = Country?Country:{label:'',value:''};
        if ( ! Name || !Tagline || ! Location || ! Company || ! Education || ! Country ) {
            toast ( 'Please fill all the fields' );
        }
        else {
            const data={ Name , Tagline , Location , Company , Education , label };
            dispatch (setUserInfo (data));
            toast ( 'Profile Updated' );
            dispatch ( closeEditFrom () );
        }
    }
    return (
        <>
            <ToastBox/>
            <FormContainer>
                <TextField id="outlined-name"
                           label="Name"
                           value={ Name }
                           variant="outlined"
                           onChange={ ( e ) => setName ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                />
                <TextField id="outlined-basics"
                           label="Tag Line"
                           value={ Tagline }
                           variant="outlined"
                           onChange={ ( e ) => setTagline ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                />

                <Stack direction={ 'row' } justifyContent={ 'space-between' } alignItems={ 'center' } sx={ { gap : '1rem' } }>
                    <TextField id="outlined-basicing"
                               label="Company"
                               value={ Company }
                               variant="outlined"
                               onChange={ ( e ) => setCompany ( e.target.value ) }
                               sx={ { width : '100%' , marginBottom : '1rem' } }
                    />
                    <TextField id="outlined-basic"
                               label='Education'
                               value={ Education }
                               variant="outlined"
                               onChange={ ( e ) => setEducation ( e.target.value ) }
                               sx={ { width : '100%' , marginBottom : '1rem' } }
                    />
                </Stack>
                <TextField id="outlined-basic"
                           label="Location"
                           value={ Location }
                           variant="outlined"
                           onChange={ ( e ) => setLocation ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                />
                <Box sx={ { marginBottom : '1rem' , height : "4rem" , } }>
                    <Select options={ options } value={ Country } onChange={ changeHandler } styles={ customStyles }/>
                </Box>
                <PurpleButton onClick={ handleSubmit }>
                    Change
                </PurpleButton>

            </FormContainer>
        </>
    );
}

export default EditForm;