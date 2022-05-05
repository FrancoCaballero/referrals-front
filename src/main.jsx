import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Invitation } from './routes/Invitation'
import { ReferralEarnings } from './routes/ReferralEarnings'
import { Register } from './routes/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="registro" element={<Register />} />
        <Route path="registro/invitacion/:invitationId" element={<Register />} />
        <Route path="invitacion" element={<Invitation />} />
        <Route path="referidos" element={<ReferralEarnings />} />
        <Route path="*"element={<Navigate to="/registro" replace />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
