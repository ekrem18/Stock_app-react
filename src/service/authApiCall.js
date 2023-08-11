import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"


export const login = async (userData)=> {
    const navigate = useNavigate()
    const BASE_URL = "http://13121.fullstack.clarusway.com"
    try {
        const { data } = await axios.post(
          `${BASE_URL}/account/auth/login/`,
          userData

        )
        
        toastSuccessNotify("login islemi basarili")
        navigate("/stock")
    } catch (error) {
        console.log(error);
    }

}