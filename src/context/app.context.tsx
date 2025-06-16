/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer } from "react";

type IAppAlertTypes = {
  isDisplayAlert: boolean;
  alertType: "error" | "info" | "warning" | "success" | undefined;
  message: string;
};

export interface AppContextTypes {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  appAlert: IAppAlertTypes;
  setAppAlert: (value: IAppAlertTypes) => void;
}

export enum AppAction {
  IS_LOADING = "IS_LOADING",
  APP_ALERT = "APP_ALERT",
}

type State = {
  isLoading: boolean | unknown;
  appAlert: IAppAlertTypes | unknown;
};

type Action = { type: AppAction; payload?: Partial<State> };
type Dispatch = (action: Action) => void;

type AppContextType = {
  state: State;
  dispatch: Dispatch;
};

export const AppContext = createContext<AppContextType | any>(undefined);

function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case AppAction.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload?.isLoading ?? state.isLoading,
      };
    }
    case AppAction.APP_ALERT: {
      return { ...state, appAlert: action.payload?.appAlert ?? state.appAlert };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, {
    appAlert: { isDisplayAlert: false, message: "", alertType: undefined },
    isLoading: false,
  });

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextTypes {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  const { state, dispatch } = context;

  return {
    isLoading: state.isLoading,
    setIsLoading: (value: boolean) => {
      dispatch({
        type: AppAction.IS_LOADING,
        payload: { isLoading: value },
      });
    },
    appAlert: state.appAlert,
    setAppAlert: (value: IAppAlertTypes) => {
      dispatch({
        type: AppAction.APP_ALERT,
        payload: { appAlert: value },
      });
    },
  };
}
