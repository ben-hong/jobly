import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  companyList: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  },
  companyListMapped: {
    "& *": {
      backgroundColor: `gold`,
      margin: `20px`
    }
  }
})

function Companies() {
  const [companies, setCompanies] = useState([]);
  const classes = useStyles();

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
    
    <div className={classes.companyList} >
      <div className="SearchForm">
        <SearchForm search={searchCompanies} />
      </div>
      <div className={classes.companyListMapped}>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />
        ))}
      </div>
    </div>
  ) 
}

export default Companies;
