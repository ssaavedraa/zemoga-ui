interface VoteData {
  id: number
  vote: string
}

export const postVote = async (data: VoteData): Promise<any> => {
  const { NEXT_PUBLIC_BACKEND_URL } = process.env

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/vote`, {
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