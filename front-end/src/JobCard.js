import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import { Typography, Button, CardContent, CardHeader, Card, Box, IconButton, CardActions, Collapse } from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function JobCard({ job }) {
  const { title, salary, equity, companyHandle, id, description } = job;
  const { currUser, setCurrUser } = useContext(AuthContext);
  const [applied, setApplied] = useState(checkForApplied());
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    checkForApplied();
  },[])   
  function checkForApplied() {
    let isApplied;
    if (currUser) {
      isApplied = currUser.applications.some((app) => app === id);
    } else {
      isApplied = false;
    }
    return isApplied;
  }

  function onApply() {
    JoblyApi.applyForJob(currUser.username, id);
    setApplied(true);
  }
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handleClick(evt) {
    evt.preventDefault();
    await JoblyApi.applyForJob(currUser.username, id);
    setCurrUser((user) => ({
      ...user,
      applications: [...user.applications, id],
    }));
    setApplied(true);
  }

  return (
    <Card sx={{ minWidth: 200, maxWidth: 500, margin:3 }}>
      <CardHeader title={title} subheader={companyHandle}/>
      <CardContent sx={{paddingTop:0 , paddingBottom:0}}>
        <Typography variant="body2" color="text.secondary">
          <small>Salary: {salary}</small>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {(expanded ? description : description.substring(0, 130) + "...")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {currUser ?
        <Button onClick={onApply} disabled={applied}>{(applied ? "Applied" : "Apply")}</Button> 
        :
        <></>
        }
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}

export default JobCard;
