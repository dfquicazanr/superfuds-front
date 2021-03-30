import axios from "axios";

const apiUrl = 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json';

export const listProducts = (): Promise<any> => {
  return axios.get(apiUrl);
}