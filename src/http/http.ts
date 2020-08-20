import AxiosInstance , { AxiosPromise,AxiosStatic} from 'axios'
import { message,notification} from 'antd'
import {setRetryTip} from '../redux/actions/common'
import store from '../redux'
import LocalStore from '../utils/LocalStore'

type requestFn = (url: string,params?:Object,data?:Object | null) => AxiosPromise

class Http {
  private axios: AxiosStatic = AxiosInstance

  private retryDelay : number = 1000

  private retry : number = Number(process.env.REACT_APP_RETRY ) || 4

  constructor () {
    const { axios } = this
    axios.defaults.timeout = 10000;
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
    axios.defaults.headers = {
      "Content-Type": 'application/json;charset=UTF-8'
    }
    this.userInterceptResponse();
    this.userInterceptRequest();

  }
  //响应拦截器
  userInterceptResponse () {
      
  }

  //请求拦截器
  userInterceptRequest() {

  }


  //封装一个底层的公用方法
  private fetchData (type: string,url: string,options?: Object,isComplex?:boolean) {
    if(isComplex) {
      return this.axios[type](url,null,options)
    }
    return this.axios[type](url,options)
  }

  public get:requestFn = (url:string,params: Object | undefined) => {
    //get请求不传参数的时候,浏览器是不会进行缓存的
    if(!params ) return this.fetchData('get',url)
    //get请求可能会被缓存,所以需要给他加一个随机参数

    const newParams = Object.assign(params, {
      [`dmx${new Date().getTime()}`]:1
    })

    return this.fetchData('get',url,{
      params: newParams
    })
  }

  public post:requestFn = (url:string,params: Object | undefined,data: Object|null|undefined) => {
    let options:Object = {
      params,
      data
    }

    if(params && data === undefined) {
      options = {
        data: params
      }
    }
    if( data === null) {
      options = {
        params
      }
    }

    return this.fetchData('post',url,options,true)
  }
}