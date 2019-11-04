import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <br />
      <Button onClick={() => {
          votes[selected] += 1;
          setSelected(getRandomNumber);
      }} text="vote" />
      <Button onClick={() => setSelected(getRandomNumber)} text="next anecdote"/>
      <br />
      <MostVotes votes={props.votes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            {anecdote}
            <br />
            <p>has {votes} votes</p>
        </div>
    )
}

const MostVotes = ({votes, anecdotes}) => {
    let index = 0
    if (Math.max(...votes) > 0) {
        while (votes[index] !== Math.max(...votes)) {
            index +=1
        }
        
        return (
            <div>
                <h2>Anecdote with most votes</h2>
                <Anecdote anecdote={anecdotes[index]} votes={votes[index]} />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
    
}

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}


const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*10)
while (randomNumber > 5) {
    randomNumber = Math.floor(Math.random()*10)
}
    return (
        randomNumber
    )
}

const votes = new Array(6).fill(0)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} />,
  document.getElementById('root')
)