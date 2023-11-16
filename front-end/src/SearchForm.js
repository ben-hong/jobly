import { useState } from "react";

// import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';

const initialState = {
  searchTerm: "",
};
function SearchForm({ search }) {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();

    search(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log('name', name, 'value', value)
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  return (
    <div>Search Form</div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="searchTerm"></label>
    //   <TextField
    //     id="searchTerm"
    //     onChange={handleChange}
    //     name="searchTerm"
    //     value={formData.searchTerm}
    //     placeholder="Enter search term.."
    //   />
    //   <button>
    //     <SearchIcon/>
    //   </button>
    // </form>
  );
}

export default SearchForm;
