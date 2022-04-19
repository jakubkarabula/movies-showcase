import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, Reducer } from 'redux'
import { Provider } from 'react-redux'
import { reducer, StoreActions, StoreState } from './Redux/Store'

const enhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION__']?.()

const store = createStore(
  reducer as Reducer<StoreState, StoreActions>,
  enhancers
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
