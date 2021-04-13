import "./CompanyCard.css";

function CompanyCard({ company }) {
  const { name, description, handle } = company;
  return (
    <a className="CompanyCard" href={`/companies/${handle}`}>
      <div className="CardBody">
        <h6 className="Cardname">{name}</h6>
        <small>
          <p>{description}</p>
        </small>
      </div>
    </a>
  );
}

export default CompanyCard;
