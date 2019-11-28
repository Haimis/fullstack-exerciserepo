import React from 'react'
import Person from './Person'

const Persons = ({persons, deleteContact}) => {

    const names = () => persons.map(person =>
        <div key={person.id}>
        <Person person={person}
        deleteContact={() => deleteContact(person)}/>
        </div>
    )

    return (
        <div>
            <h2>Numbers</h2>
            {names()}
        </div>
    )
}

export default Persons

