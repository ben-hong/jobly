import { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

// TODO we make an update Profile fx, which we use the endpoint
// of patch a user, and we also use post for a user
// so we call Jobly.login, just to test whether it passes or not
// if it doesnt throws an invalid password
function Profile() {
  const { currUser, signup } = useContext(AuthContext);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const history = useHistory();

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
    <div>
      {currUser ? (
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <div>Username: {currUser.username}</div>
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
          {errors && (
            <ul>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          )}
          <button>SUBMIT</button>
        </form>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Profile;
