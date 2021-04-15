import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  return (
    <Link className="CompanyCard" to={`/companies/${handle}`}>
      <div className="CardBody">
        <h6 className="Cardname">{name}</h6>
        <small>
          <p>{description}</p>
        </small>
      </div>
    </Link>
  );
}

export default CompanyCard;
