import { axiosCall } from "../../api"


// Get all Data
export const getAll = async (newTask) => {

  const response = await axiosCall.get()

  return response.data
}
