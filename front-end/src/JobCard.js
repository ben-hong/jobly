import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function JobCard({ job }) {
  const { title, salary, equity, companyHandle, id } = job;
  const { currUser, setCurrUser } = useContext(AuthContext);
  const [applied, setApplied] = useState(checkForApplied());

  function checkForApplied() {
    return currUser.applications.some((app) => app === id);
  }

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
    <Card sx={{ minWidth: 200, margin:3 }}>
      <CardHeader title={title} subheader={companyHandle}/>
      <CardContent sx={{paddingTop:0 , paddingBottom:0}}>
        <Typography variant="body2" color="text.secondary">
          <small>Salary: {salary}</small>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobCard;
