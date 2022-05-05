import React, { useEffect, useState } from 'react'
import { getAllReferralEarning } from '../services/referralEarningsService'

export const ReferralEarnings = () => {
  const [referrals, setReferrals] = useState([])

  useEffect(() => {
    getAllReferralEarning()
      .then(response => response.json())
      .then(data => {
        data = data.sort((a, b) => b.invitations - a.invitations)
        setReferrals(data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="container">

      <div className="flex flex-column align-center">
        <h1 className="title">Referidos</h1>

        <table>
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Invitaciones</th>
              <th>Total recibido</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map(referral => (
              <tr key={referral._id}>
                <td>{referral.user.name}</td>
                <td>{referral.invitations}</td>
                <td>{referral.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
