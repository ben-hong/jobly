import JoblyApi from "./JoblyApi";
import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import Box from '@mui/material/Box';


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { currUser } = useContext(AuthContext);

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
    <Box style={{ display:'flex' , flexDirection:'column' , alignItems:'center'}}>
      <Box sx={{margin:2}}>
        <SearchForm search={searchJobs} />
      </Box>
      <Box>
        {jobs.map((job) => (
          <JobCard job={job} key={job.id}/>
        ))}
      </Box>
    </Box>
  );
}

export default Jobs;
