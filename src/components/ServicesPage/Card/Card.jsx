import "./Card.css"

function Card(pros) {
    console.log(pros);
  return (
    <div class="card">
  <div class="card-details">
    <p class="text-title">{pros.tittle}</p>
    <p class="text-body">{pros.disc}</p>
  </div>
  <button class="card-button">More info</button>
</div>
  )
}
    
export default Card