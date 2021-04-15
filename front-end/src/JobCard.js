import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";

function JobCard({ job }) {
  const { title, salary, equity, companyHandle, id } = job;
  const { currUser, setCurrUser } = useContext(AuthContext);
  const [applied, setApplied] = useState(checkForApplied());

  function checkForApplied() {
    return currUser.applications.some((app) => app === id);
  }

  async function handleClick(evt) {
    evt.preventDefault();
    await JoblyApi.applyForJob(currUser.username, id);
    setCurrUser((user) => ({
      ...user,
      applications: [...user.applications, id],
    }));
    setApplied(true);
  }

  return (
    <div className="JobCard">
      <h6>{title}</h6>
      <p>{companyHandle}</p>
      <div>
        <small>Salary: {salary}</small>
      </div>
      <div>
        <small>Equity: {equity}</small>
      </div>
      <div className="applyForJob">
        <button onClick={handleClick} disabled={applied}>
          Apply for this Job
        </button>
      </div>
    </div>
  );
}

export default JobCard;
