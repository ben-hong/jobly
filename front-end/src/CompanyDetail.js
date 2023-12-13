import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function companyData() {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);

    }
    companyData();
  }, [])

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {company &&
      <Box>
        <h1>{company.handle}</h1>
        <p>{company.description}</p>
        <Box>
          {company.jobs.map(job => <JobCard job={job}/>)}
        </Box>
      </Box>
      }
    </Box>
  )
}

export default CompanyDetail;
