import * as React from 'react';
 
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DoctorList(props) {
  return (
    <Link href='/doctor/doctor'>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="300"
        image= '/service/service-5.jpg'
        alt={props.serviceName}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
             Robert Davis
             Physical Therapist
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I started practicing in 1999 after graduating from the University of Vermont. During those college class years...
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="large">Read More</Button>
      </CardActions>
    </Card>
    </Link>
  );
}
