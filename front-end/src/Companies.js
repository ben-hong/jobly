import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies();
  }, []);

  async function searchCompanies(data) {
    let res = await JoblyApi.getCompanies(data.searchTerm);
    setCompanies(res);
  }

  if (companies.length === 0) return <div>is Loading...</div>;

  return (
    <div className="CompanyList">
      <div className="SearchForm">
        <SearchForm search={searchCompanies}/>
      </div>
      <div className="CompanyList-map">
        {companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />
        ))}
      </div>
    </div>
  );
}

export default Companies;
