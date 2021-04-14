import { useState } from 'react';

const initialState = {
    searchTerm: ""
}
function SearchForm({ search }) {
    const [formData, setFormData] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();

        search(formData);
        setFormData(initialState);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormData(fData => ({ ...fData, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchTerm"></label>
            <input id="searchTerm"
                onChange={handleChange}
                name="searchTerm"
                value={formData.searchTerm}
                placeholder="Enter search term.."
            />
            <button>SUBMIT</button>
        </form>
    )
}

export default SearchForm;