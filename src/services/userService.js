import { API_URL } from '../config/globalConfig'

export async function addUser (user) {
  return await fetch(`${API_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function addUserWithInvitation (user, invitationId) {
  return await fetch(`${API_URL}/user/invitation/${invitationId}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
