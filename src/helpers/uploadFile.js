import axios from 'axios'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/auto/upload'

export const saveImage = async file => {
  const body = {
    file,
    api_key: 357824561481388,
    upload_preset: 't4dskobq'
  }
  const headers = {
    "Content-Type": "multipart/form-data",
  }
  const response = await axios.post(CLOUDINARY_URL, body, { headers })
  return response.data.url
}