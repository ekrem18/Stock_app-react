import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

export const login = async (userData)=> {
    const BASE_URL = "http://13121.fullstack.clarusway.com"
    try {
        const { data } = await axios.post(
          `${BASE_URL}/account/auth/login/`,
          userData
        )
        console.log(data);
        toastSuccessNotify("login islemi basarili")
    } catch (error) {
        console.log(error);
    }

}