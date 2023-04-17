export default function Student({ scores, index }) {
  return (
    <div>
      <b>Date: </b>
      {scores.date}

      <div>
        <b>Score:</b> {scores.score}
      </div>
    </div>
  );
}
