import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DataLayer } from './Pages/DataLayer.tsx'
import reducer , { initialState } from './Pages/reducer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataLayer initialState = {initialState} reducer = {reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
)
