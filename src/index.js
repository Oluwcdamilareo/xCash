import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import register from './registerSW.js';

const root = document.getElementById('root')

ReactDOM.render(<App/>,root)

register();