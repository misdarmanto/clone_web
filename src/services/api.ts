import axios from "axios";
import { appConfigs } from "../configs/appConfigs";

export interface IPaginateParams {
  path: string;
  page?: number | 0;
  size?: number | 10;
  filters?: any;
}

export const getHeaders = () => {
  const token = localStorage.getItem(appConfigs.localStorageKey) || "";
  return {
    Authorization: `Bearer ${token}`,
  };
};

export class HttpService {
  private baseUrl = appConfigs.apiUrl;

  public async get({ path }: { path: string }) {
    try {
      const result = await axios.get(this.baseUrl + path, {
        headers: {
          ...getHeaders(),
        },
      });

      return result.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage || error.message);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem(appConfigs.localStorageKey);
        window.location.pathname = "/";
      }

      throw Error(error.response.data.errorMessage || error.message);
    }
  }

  public async post({ path, body }: { path: string; body: any }) {
    try {
      const result = await axios.post(this.baseUrl + path, body, {
        headers: {
          ...getHeaders(),
        },
      });
      return result.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage || error.message);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem(appConfigs.localStorageKey);
        window.location.pathname = "/";
      }

      throw Error(error.response.data.errorMessage || error.message);
    }
  }

  public async patch({ path, body }: { path: string; body: any }) {
    try {
      const result = await axios.patch(this.baseUrl + path, body, {
        headers: {
          ...getHeaders(),
        },
      });
      return result.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage || error.message);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem(appConfigs.localStorageKey);
        window.location.pathname = "/";
      }

      throw Error(error.response.data.errorMessage || error.message);
    }
  }

  public async remove({ path }: { path: string }) {
    try {
      const result = await axios.delete(this.baseUrl + path, {
        headers: {
          ...getHeaders(),
        },
      });
      return result.data;
    } catch (error: any) {
      console.log(error.response.data.errorMessage || error.message);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem(appConfigs.localStorageKey);
        window.location.pathname = "/";
      }

      throw Error(error.response.data.errorMessage || error.message);
    }
  }

  public async getPaginatedData(params: IPaginateParams) {
    const { path, page, size, filters } = params;
    try {
      const queryFilter = new URLSearchParams(filters).toString();
      const result = await axios.get(
        `${path}?page=${page}&per_page=${size}&${queryFilter}`,
        {
          headers: {
            ...getHeaders(),
          },
        }
      );

      return {
        items: result.data,
        currentPage: result?.headers["x-pagination-current-page"] ?? 0,
        nextPage: result?.headers["x-pagination-next-page"] ?? 0,
        totalPage: result?.headers["x-pagination-page-count"] ?? 0,
        pageSize: result?.headers["x-pagination-page-size"] ?? 0,
        totalItem: result?.headers["x-pagination-total-count"] ?? 0,
      };
    } catch (error: any) {
      console.log(error.response.data.errorMessage || error.message);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem(appConfigs.localStorageKey);
        window.location.pathname = "/";
      }

      throw Error(error.response.data.errorMessage || error.message);
    }
  }
}
