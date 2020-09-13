import React from 'react'
import Person from './Person'

function NameList() {
    
   const persons = [ 
    {
        id: 1,
        name: 'SHIVAM',
        age: 30,
        skill: 'React'
      },
      {
        id: 2,
        name:'sameer',
        age: 40,
        skill:'Game'

      }]
    const personList = persons.map(person => <Person key={person.name} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
       
    
   
   
   
}

export default NameList
