import axios from "axios";
import { store } from "ducks/store";

class Api {
  baseUrl = "http://127.0.0.1:8000";
  request = async (
    url: string,
    method: string,
    data?: { [key: string]: any }
  ) => {
    const { token } = store.getState();
    return await axios({
      method,
      url: this.baseUrl + url,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  };
  post = async (url: string, data: { [key: string]: any }) => {
    return await this.request(url, "post", data);
  };
  get = async (url: string, data?: { [key: string]: any }) => {
    return await this.request(url, "get", data);
  };
}

export default new Api();
