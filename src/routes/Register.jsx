import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getInvitationById } from '../services/invitationService'
import { addUser, addUserWithInvitation } from '../services/userService'

export const Register = () => {
  const { invitationId } = useParams()
  const [invitation, setInvitation] = useState()
  const [registerOk, setRegisterOk] = useState(false)
  const [error, setError] = useState(null)
  const [{ name, email, address, gender }, handleInputChange] = useForm({
    name: '',
    email: '',
    address: '',
    gender: 'Masculino'
  })

  useEffect(() => {
    if (invitationId) {
      getInvitationById(invitationId)
        .then(response => response.json())
        .then(data => setInvitation(data))
    }
  }, [invitationId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      address,
      gender
    }

    let response
    if (invitationId) {
      response = await addUserWithInvitation(user, invitationId)
    } else {
      response = await addUser(user)
    }

    const data = await response.json()

    if (response.status === 200) {
      setRegisterOk(true)
      setError(null)
    } else if (data.code && data.code === 11000) {
      setError('El email ya está registrado')
      setRegisterOk(false)
    } else {
      setError(data.message)
      setRegisterOk(false)
    }
  }

  return (
    <div className="container">

      {(invitationId && invitation?.active) || invitationId === undefined
        ? (
          <form onSubmit={handleSubmit} className="form-register align-center">

          <h1 className="title">Formulario de registro</h1>

            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input id="name" type="text" name="name" value={name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={email} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input id="address" type="text" name="address" value={address} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="address">Sexo</label>
              <select name="gender" id="gender" value={gender} onChange={handleInputChange}>
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
            </div>

            { registerOk && <span className="success">Usuario Registrado Correctamente</span>}
            { error && <span className="error">{error}</span> }

            <button className="btn">
              Registrarse
            </button>
          </form>
          )
        : (
          <span className="error">La invitacion esta caducada</span>
          )
      }

    </div>
  )
}
