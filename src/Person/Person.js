import React from 'react'

let Person = (properties) => {

    return (
        <div>
            <p>I'm {properties.name} and I am {properties.age} years old.</p>
            <small>{properties.children}</small>
        </div>
        
    )
}

export default Person;