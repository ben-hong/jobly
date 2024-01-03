import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import { Typography, Button, CardContent, CardHeader, Card, IconButton, CardActions, Collapse, Link, CircularProgress } from "@mui/material";
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
  const [applied, setApplied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (currUser) {
      let bool = checkForApplied();
      setApplied(bool);
    }
    setLoading(false);
  }, [currUser])

  function checkForApplied() {
    let isApplied;
    if (currUser) {
      isApplied = currUser.applications.some((app) => app === id);
    } else {
      isApplied = false;
    }
    return isApplied;
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

  function toggleDescription() {
    if (expanded || description.length <= 133) {
      return description;
    } else {
      return description.substring(0, 130).trim() + "...";
    }
  }

  return (
    <Card sx={{ minWidth: 200, maxWidth: 500, margin: 3 }}>
      <CardHeader
        title={title}
        subheader={(
          <Link href={`/companies/${companyHandle}`} color="inherit" underline="none">
            {companyHandle}
          </Link>
        )}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography variant="body2" color="text.secondary">
          <small>Salary: {salary}</small>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {(toggleDescription())}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {loading ? <CircularProgress/> 
          :
          (
            currUser ?
            <Button onClick={handleClick} disabled={applied}>{(applied ? "Applied" : "Apply")}</Button>
            :
            <></>
          )
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
