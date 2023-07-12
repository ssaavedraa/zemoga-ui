import axios from 'axios'

interface VoteData {
  id: number
  vote: string
}

export const postVote = async (data: VoteData): Promise<any> => {
    try {
      await axios.post(`https://zemoga-api.santiagosaavedra.com.co/vote`, data)
    } catch (error) {
      console.error(error)
      throw error
    }
}