const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ exercises }) => {
  const total = exercises.reduce((s, p) => s + p, 0);
  return <p>Total of {total} exercises</p>;
};

const Course = ({ course }) => {
  // we either let App render repatitive total or we let Course render repeattive total for each course .
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map((part) => part.exercises)} />
    </div>
  );
};



export default Course;