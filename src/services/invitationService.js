import { API_URL } from '../config/globalConfig'

export async function addInvitation (email) {
  return await fetch(`${API_URL}/invitation`, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function getInvitationById (id) {
  return await fetch(`${API_URL}/invitation/${id}`)
}
