import * as React from 'react';
 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
 
import Avatar from '@mui/material/Avatar';
 
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
 
 

const TestList = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
         
        title={props.name}
        subheader= {props.tretMent}
      />
      <CardMedia
        component="img"
        height="300"
        image={props.imgUrl}
        alt="healing hands"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {props.issue}
        </Typography>
      </CardContent>
      
        
    </Card>
  );
}

export default TestList