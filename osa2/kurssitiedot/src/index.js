import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


 


const App = () => {

    
    return (
      <div>
        <Course />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)