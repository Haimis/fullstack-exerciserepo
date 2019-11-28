import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddForm from './components/AddForm'
import FilterForm from './components/FilterForm'
import personService from './services/persons'
import './index.css'



const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(list => setPersons(list))

  }, [])

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="notification">
        {message}
      </div>
    )
  }

  const Error = ( {errorMessage}) => {
    if (errorMessage === null) {
      return null
    }

    return (
      <div className="error">
        {errorMessage}
      </div>
    )
  }
  
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const result = persons.find( ({name}) => name === newName)
    
    if (result) {
       if (window.confirm(`${newName} is alredy added to phonebook, replace the old number with a new one?`)) {
        const originalPerson = persons.find(p => p.name === personObject.name)
        updatePerson(originalPerson.id, personObject)
       }
    } else {                  
      personService
      .create(personObject)
      .then(data => {
      setPersons(persons.concat(data))
      setMessage(`${data.name} added`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      setNewName('')
      setNewNumber('')
      })
    }
  }

  const updatePerson =  (id, personObject) => {
     personService
      .updatePerson(id, personObject)
      .then(returnedPerson => {
      setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
      setMessage(`${personObject.name} updated`)
      setTimeout(() => {
         setMessage(null)
       }, 3000)
       setNewName('')
       setNewNumber('')
     }).catch(error => {
      setErrorMessage(`${personObject.name} could not be updated, because ${personObject.name} is already removed`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
      setNewName('')
      setNewNumber('')
      console.log(id)
      setPersons(persons.filter(p => p.id !== id))
    })
  }

  const deleteContact = person => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .removePerson(person)
        .then(() => {
          setMessage(`${person.name} removed`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)          
        })
        .catch(error => {
          setErrorMessage(`${person.name} is already removed`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        }).then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })  
    }
  }


  const personsToShow = newFilter === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase()
    .includes(newFilter.toLowerCase()))
  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Error errorMessage={errorMessage} />
      <FilterForm newFilter={newFilter}
      setNewFilter={setNewFilter}
      handleFilterChange={handleFilterChange}/>
      <AddForm persons={persons}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      newName={newName}
      newNumber={newNumber}
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      setPersons={setPersons}
      addPerson={addPerson}
      />
      <Persons persons={personsToShow}
      deleteContact={deleteContact}/>
    </div>
  )

}

export default App