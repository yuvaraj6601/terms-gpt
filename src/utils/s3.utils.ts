import { getBaseURL } from "./functions.utils";
import axios from 'axios';

export const uploadFile = async (file: any) => {
  let token = await localStorage.getItem("token")
  const promise = new Promise((resolve, reject) => {
    // console.log("s33333", file);
    // let uri = file.uri
    // let files = { "name": file.name, uri, type:file.type, }
    const formData = new FormData();
    formData.append("image", file);

    const config:any = {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8;",
        "authorization": token,
      }
    };
    axios.post(getBaseURL+"media/upload_media_app",formData,config)
    .then((response:any) => {
      console.log(response)
      resolve({ ...file,...{url:response.data.data[0]}})
    }).catch((error) => {
      console.log(error)
      reject(error);
    })
  })
  return promise;
}