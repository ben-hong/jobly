import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { Box, CircularProgress } from "@mui/material";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      setLoading(true);
      let res = await JoblyApi.getCompanies();
      setCompanies(res);
      setLoading(false);
    }
    getCompanies();
  }, []);

  async function searchCompanies(data) {
    setLoading(true);
    let res = await JoblyApi.getCompanies(data.searchTerm);
    setCompanies(res);
    setLoading(false);
  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ margin: 2 }}>
        <SearchForm search={searchCompanies} />
      </Box>
      <Box>
        {loading ? (
          <CircularProgress disableShrink />
        ) : (companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />))
        )}
      </Box>
    </Box>
  )
}

export default Companies;
