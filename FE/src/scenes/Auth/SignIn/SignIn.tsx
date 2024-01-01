import axios from 'axios';
const SignIn = () => {
  // const madeReq = () => {
  //   axios.post('http://localhost:8000/signup', {
  //     username: 'Ol',
  //     email: 'lol@gmail.com',
  //     password: '1234',
  //   }).then((res) => {
  //     console.log('Sign Up', res)
  //   }).catch((err) => {
  //     console.log('Sign Up', err)
  //   })
  // }

  // const madeReq = () => {
  //   axios.post('http://localhost:8000/trips', {
  //     name: 'Eternal ice to edit',
  //     direction: 'Norvay',
  //     price: 800,
  //     priceCurrency: 'USD',
  //     daysDuration: 5,
  //     description: 'Meditation, huge culture, calmlness',
  //     sightseeings: ['Varanger NP", "Lofoten islands", "Nordkapp'],
  //     transport: "Plane"
  //   }).then((res) => {
  //     console.log('Trips', res)
  //   }).catch((err) => {
  //     console.log('Trips', err)
  //   })
  // }

  // const madeReq = () => {
  //   axios.get('http://localhost:8000/trips').then((res) => {
  //     console.log('Trips', res)
  //   }).catch((err) => {
  //     console.log('Trips', err)
  //   })
  // }

  // const madeReq = () => {
  //   axios.get(`http://localhost:8000/trips/${'659305f0fd7c399747ee35a6'}`).then((res) => {
  //     console.log('Trip', res)
  //   }).catch((err) => {
  //     console.log('Trip', err)
  //   })
  // }

  // const madeReq = () => {
  //   axios.put(`http://localhost:8000/trips/${'65931be6105477101dc3fdc0'}`, {
  //     direction: "newDirection",
  //     price: "100000",
  //     priceCurrency: "UAH",
  //     daysDuration: 1,
  //     description: "some text",
  //     sightseeings: [],
  //     transport: 'legs',
  //   }).then((res) => {
  //     console.log('Trip', res)
  //   }).catch((err) => {
  //     console.log('Trip', err)
  //   })
  // }

  const madeReq = () => {
    axios.delete(`http://localhost:8000/trips/${'65931be6105477101dc3fdc0'}`).then((res) => {
      console.log('Trip', res)
    }).catch((err) => {
      console.log('Trip', err)
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