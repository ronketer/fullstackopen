import Course from '../components/Course'

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];


  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;

// const App = () => {

//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };


//   return (
//     <div>
//       <Header course={course["name"]} />
//       {/* <Content part={part1, part2, part3} exercises={exercises1, exercises2, exercises3}></Content> */}
//       <Content
//         part1={course.parts[0].name}
//         exercises1={course.parts[0].exercises}
//         part2={course.parts[1].name}
//         exercises2={course.parts[1].exercises}
//         part3={course.parts[2].name}
//         exercises3={course.parts[2].exercises}
//       />
//       <Total>
//         {" "}
//         total=
//         {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}{" "}
//       </Total>
//     </div>
//   );
// };

// export default App;

// the intire application in the div componenet
