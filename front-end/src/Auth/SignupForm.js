import { useState } from "react";
import { useHistory } from "react-router-dom"

const initialState = {
  username: "bob",
  password: "password",
  firstName: "bob",
  lastName: "jones",
  email: "bob@gmail.com",
};

function SignupForm({ signup }) {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // TODO add validation
    signup(formData);
    setFormData(initialState);
    history.push("/companies");
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
      <button>SUBMIT</button>
    </form>
  );
}

export default SignupForm;
