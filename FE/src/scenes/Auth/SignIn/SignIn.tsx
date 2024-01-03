import axios from 'axios';
import React from 'react';

const SignIn = () => {
  const [lastCreatedTripId, setLastCreatedTripId] = React.useState<null | string>(null);

  const madeReqPost = () => {
    axios
      .post('http://localhost:8000/trips', {
        name: 'New Trip Name .',
        direction: '',
        price: 0,
        priceCurrency: '',
        daysDuration: 0,
        description: '',
        sightseeings: [],
        transport: '',
      })
      .then((res) => {
        console.log('Trips post', res);
        setLastCreatedTripId(res.data.newTrip._id);
      })
      .catch((err) => {
        console.log('Trips post', err);
      });
  };

  const madeReqGet = () => {
    axios
      .get('http://localhost:8000/trips')
      .then((res) => {
        console.log('Trips get', res);
      })
      .catch((err) => {
        console.log('Trips get', err);
      });
  };

  const madeReqGetById = () => {
    axios
      .get(`http://localhost:8000/trips/${'659305f0fd7c399747ee35a6'}`)
      .then((res) => {
        console.log('Trip get by id', res);
      })
      .catch((err) => {
        console.log('Trip get by id', err);
      });
  };

  const madeReqPut = () => {
    axios
      .put(`http://localhost:8000/trips/${lastCreatedTripId}`, {
        direction: 'newDirection',
        price: '100000',
        priceCurrency: 'UAH',
        daysDuration: 1,
        description: 'some text',
        sightseeings: [],
        transport: 'legs',
      })
      .then((res) => {
        console.log('Trip updated', res);
      })
      .catch((err) => {
        console.log('Trip updated', err);
      });
  };

  const madeReqDelete = () => {
    axios
      .delete(`http://localhost:8000/trips/${lastCreatedTripId}`)
      .then((res) => {
        console.log('Trip deleted', res);
      })
      .catch((err) => {
        console.log('Trip deleted', err);
      });
  };

  return (
    <div>
      Sign In
      <button onClick={madeReqPost}>madeReqPost</button>
      <button onClick={madeReqGet}>madeReqGet</button>
      <button onClick={madeReqGetById}>madeReqGetById</button>
      <button onClick={madeReqPut}>madeReqPut</button>
      <button onClick={madeReqDelete}>madeReqDelete</button>
    </div>
  );
};

export default SignIn;
