import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

function LoginForm({ login }) {
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
    login(formData);
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
          placeholder="Enter a username"
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
          placeholder="Enter a password"
        />
      </div>
      <button>SUBMIT</button>
    </form>
  );
}

export default LoginForm;
