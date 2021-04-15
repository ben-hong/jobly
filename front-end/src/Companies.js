import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";
import SearchForm from "./SearchForm";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const { currUser } = useContext(AuthContext);

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
    <div>
      {currUser ? (
        <div className="CompanyList">
          <div className="SearchForm">
            <SearchForm search={searchCompanies} />
          </div>
          <div className="CompanyList-map">
            {companies.map((company) => (
              <CompanyCard company={company} key={company.handle} />
            ))}
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Companies;
