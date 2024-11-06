import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count : 1,
            count2 : 2,
            count3 : 3,
            count4 : 4
        }
    }
    render(){
        const {name, location} = this.props
        const {count, count2, count3, count4} = this.state
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <h1>Count3 : {count3}</h1>
                <h1>Count4 : {count4}</h1>
                <button onClick={
                    ()=>{
                       //NEVER UPDATE STATE VARIABLE DIRECTLY
                       this.setState({
                        count : this.state.count + 4,
                        count2 : this.state.count2 + 4,
                        count3 : this.state.count3+ 4,
                        count4 : this.state.count4 + 4
                    
                       })
                    }
                }>+</button>
                {/* <h1>Count2 : {count2}</h1> */}
                <h1>Name : {name}</h1>
                <h1>Location : {location}</h1>
                <h4>Contact : gauravchadduke@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass