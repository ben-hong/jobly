import JoblyApi from "./JoblyApi";
import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobList: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  },
  jobListMapped: {
    "& *": {
      backgroundColor: `gold`,
      margin: `20px`
    }
  }
})

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { currUser } = useContext(AuthContext);
  const classes = useStyles()

  useEffect(() => {
    async function getJobs() {
      let res = await JoblyApi.getJobs();
      setJobs(res);
    }
    getJobs();
  }, []);

  async function searchJobs(data) {
    let res = await JoblyApi.getJobs(data.searchTerm);
    setJobs(res);
  }

  if (jobs.length === 0) return <div>is Loading...</div>;

  return (
    
    <div className={classes.jobList}>
      <div className="SearchForm">
        <SearchForm search={searchJobs} />
      </div>
      <div className={classes.jobListMapped}>
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
