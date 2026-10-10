import { useState } from "react";




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
      <button onClick={handelGoodFeeback}>good</button>
      <button onClick={handelNeutralFeeback}>neutral</button>
      <button onClick={handelBadFeeback}>bad</button>
      <h1>statistics</h1>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
    </div>
  );
};

export default App;
