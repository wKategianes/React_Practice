import StudentItem from "./StudentItem";

export default function Student({ students }) {
  const StudentItems = students.map((s, idx) => (
    <StudentItem student={s} index={idx} key={idx} scores={s.scores} />
  ));

  return <ul>{StudentItems}</ul>;
}
