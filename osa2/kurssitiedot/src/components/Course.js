import React from 'react'



const Course = () => {
  return (
      courses.map(course =>
        <div key={course.name}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
  )
}

const Header = ({name}) =>
  <h1>{name}</h1>

  const Content = ({parts}) => {
      return (
        parts.map(part =>
          <p key={part.id}>{part.name} {part.exercises}</p>
        )
      )  
  }

  const Total = ({parts}) => {
      const result = parts.reduce((sum, part) => {
          return sum + part.exercises
      }, 0)
      return (
            <h4>total of {result} exercises</h4>
      )
  }


const courses = [
  {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

export default Course