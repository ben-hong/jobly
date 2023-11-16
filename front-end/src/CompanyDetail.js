import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   companyDetail: {
//     display: `flex`,
//     flexDirection: `column`,
//     alignItems: `center`,
//   },
//   companyJobs: {
//     "& *": {
//       backgroundColor: `gold`,
//       margin: `20px`
//     }
//   }
// })

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  // const classes = useStyles();

  useEffect(() => {
    async function companyData() {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);

    }
    companyData();
  }, [])

  return (
    <div>
      company detail
    </div>
    // <div>
    //   {company &&
    //   <div className={classes.companyDetail}>
    //     <h1>{company.handle}</h1>
    //     <p>{company.description}</p>
    //     <div className={classes.companyJobs}>
    //       {company.jobs.map(job => <JobCard job={job}/>)}
    //     </div>
    //   </div>
    //   }
    // </div>
  )
}

export default CompanyDetail;
