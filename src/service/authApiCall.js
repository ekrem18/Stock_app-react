import axios from "axios"

export const login = async (userData)=> {
    const BASE_URL = "http://13121.fullstack.clarusway.com"
    try {
        const { data } = await axios.post(
          `${BASE_URL}/account/auth/login/`,
          userData
        )
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}