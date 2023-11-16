import { Link } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   }
// });

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  // const classes = useStyles();
  return (
    <div>
      company card
    </div>
    // <Card className={`${classes.root} CardBody`}>
    //   <Link className="CompanyCard" to={`/companies/${handle}`}>

    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         <h6 className="Cardname">{name}</h6>
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {description}
    //       </Typography>
    //     </CardContent>
    //   </Link>
    // </Card>
  );
}

export default CompanyCard;
