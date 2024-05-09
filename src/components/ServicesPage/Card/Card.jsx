import "./Card.css"

function Card(pros) {
    console.log(pros);
  return (
    <div className="card">
  <div className="card-details">
    <p className="text-title">{pros.tittle}</p>
    <p className="text-body">{pros.disc}</p>
  </div>
  <button className="card-button">More info</button>
</div>
  )
}

export default Card