import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './scss/app.scss'

import App from './App'
import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// #9: React Pizza — разработка интернет-магазина (for junior) | 2:01:55
