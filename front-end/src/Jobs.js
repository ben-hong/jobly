import JoblyApi from "./JoblyApi";
import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import { Box, CircularProgress } from "@mui/material";


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currUser } = useContext(AuthContext);

  useEffect(() => {
    async function getJobs() {
        setLoading(true);
        let res = await JoblyApi.getJobs();
        setJobs(res);
        setLoading(false);
    }

    getJobs();
  }, []);

  async function searchJobs(data) {
      setLoading(true);
      let res = await JoblyApi.getJobs(data.searchTerm);
      setJobs(res);
      setLoading(false);

  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ margin: 2 }}>
        <SearchForm search={searchJobs} />
      </Box>
      <Box>
        {loading ? (
          <CircularProgress disableShrink />
        ) : (
          jobs.map((job) => <JobCard job={job} key={job.id} />)
        )}
      </Box>
    </Box>
  );
}

export default Jobs;
