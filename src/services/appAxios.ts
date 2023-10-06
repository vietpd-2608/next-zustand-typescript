// gkc_hash_code : 01GX7QK9NT7GQ5QK1V3005HE7K
import axios from 'axios';
import { stringify } from 'qs';

const mapEmptyArray = (a: any): any | null[] =>
  Array.isArray(a) && !a.length ? [null] : a;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false,
  timeout: 60000,
  paramsSerializer: {
    serialize: (params: Record<string, unknown>) =>
      stringify(params, {
        arrayFormat: 'comma',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        filter: (_prefix, v) => mapEmptyArray(v),
      }),
  },
});

export default instance;
