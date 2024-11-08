import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor will receive first call');
  }

  componentDidMount(){
    console.log("parent did mount");
  }
  render() {

    console.log("Parent  Render will be called on second");
    return (
      <div>
        <h1>About</h1>
        <h1>Netflix Series</h1>
        

        {/* now down here 👇 Child Contructor will be called  */}
        <UserClass name={'This is Class Component'} location={'Mumbai'} /> 
        {/* and now child render will be called from UserClass Component */}

      </div>
    );
  }
}

export default About;
