import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies();
  }, []);
  console.log(companies);

  return (
    <div className="CompanyList">
      {companies.map((company) => (
        <CompanyCard company={company} key={company.handle} />
      ))}
    </div>
  );
}

export default Companies;
