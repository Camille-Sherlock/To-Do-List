import axios from "axios";

export class HttpClient {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleResponse = (res) => res.data.data || res.data;

  _handleError = (error) => Promise.reject(error);
}
