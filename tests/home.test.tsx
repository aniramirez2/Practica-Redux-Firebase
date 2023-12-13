import React from 'react'
import renderer from 'react-test-renderer'
import Login from "../src/pages/Login"
import { expect, test } from 'vitest'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { BrowserRouter as Router } from 'react-router-dom';

test('Login renders', async () => {// Crea una instancia de tu tienda Redux

  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  )
  await component.toTree();

  // Realizar la aserción
  expect(component.toJSON()).toMatchSnapshot();
})