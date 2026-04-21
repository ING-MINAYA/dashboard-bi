
function CardMetric({ titulo, valor }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{valor}</p>
    </div>
  );
}

export default CardMetric;