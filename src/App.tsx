import React, { createContext, useContext } from "react";
import { ToastContainer } from "react-toastify";
import useAppContext, { AppContextType } from "./hooks/useAppContext";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes/theme";
import RTL from "./themes/RTL";
import Router from "./Router";
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useApp = () => {
  return useContext(AppContext);
};

function App() {
  const value = useAppContext();
  return (
    <RTL>
      <ThemeProvider theme={lightTheme}>
        <AppContext.Provider value={value}>
          <Router />
          <ToastContainer />
        </AppContext.Provider>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
