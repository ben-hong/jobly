import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";

// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   }
// });

function JobCard({ job }) {
  const { title, salary, equity, companyHandle, id } = job;
  const { currUser, setCurrUser } = useContext(AuthContext);
  const [applied, setApplied] = useState(checkForApplied());
  // const classes = useStyles();

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
    <div>
      job card
    </div>
    // <Card className={`${classes.root} CardBody`}>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="h2">
    //       <h6>{title}</h6>
    //       <p>{companyHandle}</p>
    //       <div>
    //         <small>Salary: {salary}</small>
    //       </div>
    //       <div>
    //         <small>Equity: {equity}</small>
    //       </div>
    //       <div className="applyForJob">
    //         <button onClick={handleClick} disabled={applied}>
    //           Apply for this Job
    //      </button>
    //       </div>
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
}

export default JobCard;
