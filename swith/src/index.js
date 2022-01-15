import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import Login from './components/Login-page'
// import Signup from './components/Signup'
// import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Cart from './components/Cart'

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
