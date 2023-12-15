import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Divider, Chip } from "@mui/material";

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
    <Box>
      {company &&
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>{company.handle}</h1>
          <h4 style={{ 'marginLeft': '3em', 'marginRIght': '3em' }}>{company.description}</h4>
          <Divider style={{ width: '100%' }}><Chip label="Jobs"/></Divider>
          <Box>
            {company.jobs.map(job => <JobCard key={job.id} job={job} />)}
          </Box>
        </Box>
      }
    </Box>
  )
}

export default CompanyDetail;
