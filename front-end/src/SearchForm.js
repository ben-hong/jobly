import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip , Button , TextField , InputAdornment } from "@mui/material";


function SearchForm({ search }) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
    search(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm"></label>
      <TextField
        id="searchTerm"
        onChange={handleChange}
        name="searchTerm"
        value={formData.searchTerm}
        placeholder="Search Here"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" size="small">
              <Tooltip title="search">
                <Button type="submit" size="small" sx={{ '&.MuiButton-root:hover': { bgcolor: 'transparent' } }}>
                  <SearchIcon />
                </Button>
              </Tooltip>
            </InputAdornment>
          ),
          style: {
            paddingRight: 0
          }
        }}
      />
    </form>
  );
}

export default SearchForm;
