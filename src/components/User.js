import { useState } from "react";
const User = ( {name }) =>{

    const [count ] = useState(0)
    const [count2] = useState(1)

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h1>{name}</h1>
            <h1>Location : Dehradun</h1>
            <h4>Contact : gauravchadduke@gmail.com</h4>
        </div>
    )
}

export default User;