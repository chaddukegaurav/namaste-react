import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>Netflix Series</h1>
      {/* <User name={'This is Functional Component'} /> */}

      <UserClass name={'This is Class Component'} location={"Mumbai"} />
    </div>
  );
};

export default About;
