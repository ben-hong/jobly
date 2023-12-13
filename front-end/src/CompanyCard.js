import { Link } from "react-router-dom";
import { Card , CardActionArea , CardContent , Typography } from "@mui/material";

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  return (
    <Card sx={{ minWidth: 200, margin:3 }}>
      <Link to={`/companies/${handle}`}>
        <CardContent sx={{paddingTop:0 , paddingBottom:0}}>
          <Typography gutterBottom variant="h5" component="h2">
            <h6>{name}</h6>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default CompanyCard;
