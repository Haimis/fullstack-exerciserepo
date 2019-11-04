import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//import { removePropertiesDeep } from '@babel/types'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
    return (
    <div>
      <h1>give feedback</h1>
      <Button  onClick={() => setGood(good +1)} text="good"/>
      <Button  onClick={() => setNeutral(neutral +1)} text="neutral"/>
      <Button  onClick={() => setBad(bad +1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistic = ({text, value, perc}) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td><td>{value}{perc}</td>
            </tr>
        </tbody>
    )
}


const Statistics = ({good, neutral, bad}) => {
    
    if (good+bad+neutral <= 0) {
        return (
            <div></div>
        )
    } else {
        const all = good+neutral+bad

        return (
            <div>
                <h2>statistics</h2>
                <table>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={(good*1+neutral*0+bad*-1)/all} />
                <Statistic text="positive" value={100*good/all} perc="%"/>
                </table>
            </div>
        )
    }
    
  }



ReactDOM.render(<App />, 
  document.getElementById('root')
)


