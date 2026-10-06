const Header = (props) => {
  return <h1>{props.course}</h1>;
};


const Part = (props)=>{
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
}


const Content = ( props)=>{

  return (
    <>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
    </>

  )
}





const Total = (props)=>{
        return (
          <p>Number of exercises {props.total}</p>
        );


}

const App = () => {

  const course = "Half Stack application development";
  const parts = [
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    }
  ];
  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };

  return (
    <div>
      <Header course={course} />
      {/* <Content part={part1, part2, part3} exercises={exercises1, exercises2, exercises3}></Content> */}
      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total> total={parts[0].exercises + parts[1].exercises + parts[2].exercises} </Total>
    </div>
  );
};

export default App;

// the intire application in the div componenet
