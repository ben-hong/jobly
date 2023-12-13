import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  return (
    <Card sx={{ minWidth: 200, maxWidth: 500, margin: 3 }}>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Link to={`/companies/${handle}`}>
          <Typography color="black" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </Link>
        <Typography color="textSecondary" >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CompanyCard;
