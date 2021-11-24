import Axios, { AxiosInstance } from 'axios';
import { relativePath } from 'constants/apiRelativePaths';

export interface ApiAxios {
  (key?: string): AxiosInstance;
}
const headers = { 'Content-Type': 'application/json', Authorization: '' };

export const ApiService: ApiAxios = (key = 'supplierUrl') =>
  Axios.create({
    baseURL: relativePath[key],
    headers: headers,
    // headers: headers.Authorization ? headers : { ...headers, Authorization: `Bearer ${localStorage.token}` },
  });
