import { useState } from "react";


const StatisticLine = ({ text, value, unit = "" }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {unit}
      </td>
    </tr>
  );
};


// did i used the recommend naming conventions for value passed to button?
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};


// a proper place to define a component
const Statistics = ({good, bad, neutral}) => {

  const total = good + neutral + bad;

  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? (good / total) * 100 : 0;

  
return (
  <>
    <h1>statistics</h1>

    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} unit=" %" />
    </table>
  </>
);
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const handelGoodFeeback = () => {

    // let updatedGood = good + 1
     console.log("current good:", good);
     const updatedGood = good + 1
    setGood(updatedGood);
     console.log("updated good:", updatedGood);



  }
  
  const handelBadFeeback = () => {
    console.log("current bad:", bad)
    const updatedBad = bad + 1
    setBad(updatedBad);
    console.log("updated bad:", updatedBad);

  };

  const handelNeutralFeeback = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral);
  };



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handelGoodFeeback} text="good" />
      <Button onClick={handelNeutralFeeback} text="neutral" />
      <Button onClick={handelBadFeeback} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
