import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"

const useStockCall = () => {
  
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  const {axiosWithToken}= useAxios()

  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`)
      dispatch(getStockSuccess({ data, url }))
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/stock/${url}/${id}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      toastSuccessNotify(`${url} succesfuly deleted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }

  return { getStockData , deleteStockData}
}

export default useStockCall
