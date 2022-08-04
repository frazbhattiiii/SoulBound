import * as React         from 'react';
import Card               from '@mui/material/Card';
import CardContent        from '@mui/material/CardContent';
import CardMedia          from '@mui/material/CardMedia';
import Typography         from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { SmallImage }     from "../styles/General";

export default function CustomCard ( props ) {
    return (
        <Card sx={ { maxWidth : 470 , margin : "0 2rem 1rem .5rem" } }>
            <CardActionArea>
                <SmallImage src={ props.image } size='80'/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { props.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        { props.detail }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
