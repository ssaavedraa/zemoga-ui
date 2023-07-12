interface VoteData {
  id: number
  vote: string
}

export const postVote = async (data: VoteData): Promise<any> => {
    const response = await fetch('http://localhost:3001/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (result.status === 500) {
      throw new Error(result.message)
    }

    else return result
}