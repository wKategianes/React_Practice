import Scores from "./Scores";

export default function Student({ student, index, scores }) {
  const ScoresList = scores.map((s, idx) => (
    <Scores scores={s} index={idx} key={idx} />
  ));

  return (
    <>
      <div>
        <li>{student.name}</li>
        <li>{student.bio}</li>
        <hr />
      </div>
      {ScoresList}
    </>
  );
}
