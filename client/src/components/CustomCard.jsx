import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border:'1px solid #EDF2F9',
  // border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    // boxShadow: `0 0 10px 0 ${theme.palette.grey[200]}`,
    // border: `1px solid ${theme.palette.grey[200]}`,
  },
}));

const CustomCard = ({ post }) => {

  const userUrl = `/blogs/${post._id}`;
  
  return (
    <StyledCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
        {post.tags}
        </Typography>

        <Link to={{ pathname: userUrl, state: `?id=${post._id}` }}>

        <Typography color="text.secondary" gutterBottom>
          {post.title}
        </Typography>
        </Link>

        <Typography variant="p" color="text.secondary" gutterBottom>
        {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
};

export default CustomCard;
