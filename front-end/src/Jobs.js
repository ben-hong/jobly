import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import JobCard from "./JobCard"
import SearchForm from "./SearchForm";

function Jobs() {
  const [jobs, setJobs] = useState([]);

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
    <div className="JobList">
      <div className="SearchForm">
        <SearchForm search={searchJobs}/>
      </div>
      <div className="JobList-map">
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
