import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

// import { makeStyles, rgbToHex } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 800,
//     margin: 100,
//     color: `white`,
//   },
//   card: {
//     background: `rgba(64,84,180)`,
//     display: `flex`,
//     width: `25rem`,
//     height: `15rem`,
//   },
//   btn: {
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: `1rem`,
//     padding: '0 30px',
//   }
// });

function Homepage() {
  const { currUser } = useContext(AuthContext);
  // const classes = useStyles();
  return (
    <div>
      {currUser &&
        <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome Back, {currUser.firstName}!</h2>
        </div>
      }
      {!currUser 
      
      &&
      <div>
        at homepage
      </div>
      //   <Grid
      //     container
      //     spacing={0}
      //     alignItems="flex-start"
      //     justify="center"
      //     style={{ minHeight: '100vh' }}
      //   >

      //     <Card className={`${classes.root} ${classes.card}`}>
      //       <CardActionArea>
      //         <CardContent>
      //           <Typography gutterBottom variant="h5" component="h1">
      //             Jobly
      //       </Typography>
      //           <Typography variant="body2" color="textSecondary" component="p">
      //             All jobs in one, convenient place.
      //       </Typography>
      //           <Typography variant="body2" color="textSecondary" component="p">
      //             <Link exact to="/login">
      //               <Button className={classes.btn} size="small" color="primary">
      //                 Log in
      //               </Button>
      //             </Link>
      //             <Link exact to="/signup">
      //               <Button className={classes.btn} size="small" color="primary">
      //                 Sign up
      //               </Button>
      //             </Link>
      //           </Typography>
      //         </CardContent>
      //       </CardActionArea>
      //     </Card>
      //   </Grid>
      }
    </div>
  );
}

export default Homepage;
