import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../AuthContext";

const initialState = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

function SignupForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const history = useHistory();
  const { signup } = useContext(AuthContext);

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    // TODO add validation
    let response = await signup(formData);
    if (response.token) {
    setFormData(initialState);
    history.push("/companies");
    } else {
      setErrors(response);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={handleChange}
          name="username"
          value={formData.username}
          placeholder="Select a username"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="Select a password"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder="Select an email"
        />
      </div>
      {errors && <ul>{errors.map(error => <li>{error}</li>)}</ul>}
      <button>SUBMIT</button>
    </form>
  );
}

export default SignupForm;
