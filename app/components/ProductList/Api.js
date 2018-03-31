import React, { Component } from 'react';

const URL = 'https://shrouded-savannah-22718.herokuapp.com'

function getProducts() {
  return fetch(`${URL}/api/movies`, {
    method: 'GET',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((responseJson) => responseJson)
  .catch((error) => {
    console.error(error);
  });
}

export { getProducts }