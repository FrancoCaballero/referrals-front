import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

import { addInvitation } from '../services/invitationService'

export const Invitation = () => {
  const [invitation, setInvitation] = useState()
  const [{ email }, handleInputChange] = useForm({ email: '' })
  const [error, setError] = useState(null)
  const [thisUrl] = useState(window.location.origin)

  const handleSubmit = (e) => {
    e.preventDefault()
    addInvitation(email)
      .then(async response => {
        if (response.ok) {
          setError(null)
          return response.json()
        } else {
          throw await response.json()
        }
      })
      .then(data => setInvitation(data))
      .catch(error => {
        setInvitation(null)
        setError(error)
      })
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit} className="form-register align-center">

      <h1 className="title">Generar invitación</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={email} onChange={handleInputChange} />
        </div>

        {error && <span className="error">{error}</span>}

        <button className="btn">
          Compartir
        </button>

        {invitation && (
          <>
            <h3 className="subtitle">Link de invitacion</h3>
            <a href={`${thisUrl}/registro/invitacion/${invitation._id}`}>{`${thisUrl}/registro/invitacion/${invitation._id}`}</a>
          </>
        )}
      </form>

    </div>
  )
}
