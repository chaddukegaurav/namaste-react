import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userInfo : {
            login : "Gaurav",
            userId : 123434
        }
    }
    }

   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/chaddukegaurav")
    const json = await data.json()
    console.log(json);
    this.setState({
        userInfo : json
    })
    }

    render(){
        const {login} = this.state.userInfo
        return (
            
            <div>
                <h1>State Component se data ara</h1>
                <h3>{login}</h3>
            </div>
        
        )
    }
}

export default UserClass