import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig
} from 'axios'
import type { ServiceParams } from '@/types/api/axios'
import { HttpMethod } from '@/enums/axios'

export class HttpService {
  private http: AxiosInstance
  private baseURL = import.meta.env.VITE_APIURL

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false
    })
  }

  public service() {
    this.injectInterceptors()
    return this
  }

  // Handle HTTP requests
  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options
      })

      return response.data
    } catch (error) {
      return this.normalizeError(error)
    }
  }

  // GET request
  public async get<T>(url: string, params?: ServiceParams): Promise<T> {
    return this.request<T>(HttpMethod.GET, url, {
      params
    })
  }

  // POST request
  public async push<T, P>(
    url: string,
    payload: P,
    params?: ServiceParams
  ): Promise<T> {
    return this.request<T>(HttpMethod.POST, url, {
      params,
      data: payload
    })
  }

  private injectInterceptors() {
    this.http.interceptors.request.use((request) => request)

    this.http.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    )
  }

  private normalizeError(error: any) {
    return Promise.reject(error)
  }
}
