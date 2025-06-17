import { useAppContext, type AppContextTypes } from "../context/app.context";
import { appConfigs } from "../configs/appConfigs";
import { HttpService } from "../services/api";

interface PostRequest {
  path: string;
  body: unknown;
}

interface GetRequest {
  path: string;
}

interface DeleteRequest {
  path: string;
  body?: unknown;
}

interface UpdateRequest {
  path: string;
  body: unknown;
}

interface GetTableDataRequest {
  path: string;
  page?: number;
  size?: number;
  filter?: Record<string, unknown>;
}

interface ErrorResponse {
  message: string;
}

export interface HttpRequestMethods {
  handleGetRequest: (value: GetRequest) => Promise<unknown>;
  handlePostRequest: (value: PostRequest) => Promise<unknown>;
  handleDeleteRequest: (value: DeleteRequest) => Promise<unknown>;
  handleUpdateRequest: (value: UpdateRequest) => Promise<unknown>;
  handleGetTableDataRequest: (value: GetTableDataRequest) => Promise<unknown>;
}

export const useHttp = (): HttpRequestMethods => {
  const { setAppAlert }: AppContextTypes = useAppContext();
  const httpService = new HttpService();

  const handleError = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      return (error as ErrorResponse).message;
    }
    return "An unknown error occurred";
  };

  const showSuccessAlert = (message: string) => {
    setAppAlert({
      isDisplayAlert: true,
      message,
      alertType: "success",
    });
  };

  const showErrorAlert = (message: string) => {
    setAppAlert({
      isDisplayAlert: true,
      message,
      alertType: "error",
    });
  };

  const handleGetRequest = async ({ path }: GetRequest): Promise<unknown> => {
    try {
      return await httpService.get({ path });
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      showErrorAlert(errorMessage);
    }
  };

  const handlePostRequest = async ({
    path,
    body,
  }: PostRequest): Promise<unknown> => {
    try {
      const result = await httpService.post({ path, body });
      showSuccessAlert("Berhasil dibuat");
      return result;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      showErrorAlert(errorMessage);
    }
  };

  const handleDeleteRequest = async ({
    path,
  }: DeleteRequest): Promise<unknown> => {
    try {
      const result = await httpService.remove({ path });
      setAppAlert({
        isDisplayAlert: true,
        message: "Berhasil dihapus",
        alertType: "info",
      });
      return result;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      showErrorAlert(errorMessage);
    }
  };

  const handleUpdateRequest = async ({
    path,
    body,
  }: UpdateRequest): Promise<unknown> => {
    try {
      const result = await httpService.patch({ path, body });
      showSuccessAlert("Berhasil diperbarui");
      return result;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      showErrorAlert(errorMessage);
    }
  };

  const handleGetTableDataRequest = async ({
    path,
    page = 0,
    size = 10,
    filter,
  }: GetTableDataRequest): Promise<unknown> => {
    try {
      return await httpService.getTableData({
        url: `${appConfigs.apiUrl}${path}`,
        pagination: true,
        page,
        size,
        filters: filter,
      });
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      showErrorAlert(errorMessage);
    }
  };

  return {
    handleGetRequest,
    handlePostRequest,
    handleDeleteRequest,
    handleUpdateRequest,
    handleGetTableDataRequest,
  };
};
