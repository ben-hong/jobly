import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {company &&
      <div className="CompanyDetail">
        <h1>{company.handle}</h1>
        <p>{company.description}</p>
        <div className="Company-Jobs">
          {company.jobs.map(job => <JobCard job={job}/>)}
        </div>
      </div>
      }
    </div>
  )
}

export default CompanyDetail;
