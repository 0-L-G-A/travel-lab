import axios from 'axios';
const SignIn = () => {
  const madeReq = () => {
    axios.post('http://localhost:8000/signup', {
      username: 'Ol',
      email: 'lol@gmail.com',
      password: '1234',
    }).then((res) => {
      console.log('Sign Up', res)
    }).catch((err) => {
      console.log('Sign Up', err)
    })
  }
  return (
    <div>
      Sign In
      <button onClick={madeReq}>Sign Up</button>
    </div>
  );
};

export default SignIn;