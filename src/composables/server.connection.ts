import axios from 'axios'

export function useAPIEndpoint() {
  async function postRegistreeDetails(data) {
    return await axios.post("/register", data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  }
  return { postRegistreeDetails }
}