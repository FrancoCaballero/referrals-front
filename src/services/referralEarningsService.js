import { API_URL } from '../config/globalConfig'

export async function getAllReferralEarning () {
  return await fetch(`${API_URL}/referral-earnings`)
}
