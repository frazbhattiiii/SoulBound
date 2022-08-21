import React from 'react';
import { Box , DialogActions , DialogContent , Slider , Typography } from "@mui/material";
import Cropper from 'react-easy-crop';
import CropIcon from '@mui/icons-material/Crop';
import { Cancel } from '@mui/icons-material';
import Button from "@mui/material/Button";

function CropEasy ( {photoURL,setOpenCrop} ){
    const [ crop , setCrop ] = React.useState ( { x : 0 , y : 0 } );
    const [ zoom , setZoom ] = React.useState ( 1 );
    const [ croppedAreaPixels , setCroppedAreaPixels ] = React.useState ( null );

    const cropComplete = ( croppedArea , croppedAreaPixels ) => {
        setCroppedAreaPixels ( croppedAreaPixels );
    }
    const zoomPercent = (value) => {
        return `${Math.round(value * 100)}%`;
    };
    const cropImage = async () => {

    }
    return (
        <>
            <DialogContent dividers sx={{
                background:"#333",
                position:'relative',
                height:'400',
                width:'auto',
                minWidth:{sm:500},
            }}>
                <Cropper
                    image={ photoURL }
                    crop={ crop }
                    zoom={ zoom }
                    aspect={ 1 }
                    onZoomChange={ setZoom }
                    onCropChange={ setCrop }
                    onCropComplete={ cropComplete }
                />
                <DialogActions sx={{
                    flexDirection:"column",
                    mx:3,
                    my:2
                }}>
                    <Box sx={{width:'100%',mb:1}}>
                    <Box>
                        <Typography color="text.secondary">
                            Zoom: {zoomPercent(zoom) }
                        </Typography>
                        <Slider
                            valueLabelDisplay="auto"
                            valueLabelFormat={zoomPercent}
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e, zoom) => setZoom(zoom)}
                        />
                    </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={<Cancel />}
                            onClick={() => setOpenCrop(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<CropIcon />}
                            onClick={cropImage}
                        >
                            Crop
                        </Button>
                    </Box>
                </DialogActions>

            </DialogContent>
        </>
    );
}

export default CropEasy;