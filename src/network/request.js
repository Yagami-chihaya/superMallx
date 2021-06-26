import axios from 'axios'

export default {
  createAxios(config){
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    instance.interceptors.request.use(config=>config,err=>{console.log(err);})
    return instance(config)
  }
}