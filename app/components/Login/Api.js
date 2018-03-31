import React, { Component } from 'react';

const URL = 'https://shrouded-savannah-22718.herokuapp.com'

function login(email, password) {
  return fetch(`${URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => responseJson)
  .catch((error) => {
    console.error(error);
  });
}

export { login }