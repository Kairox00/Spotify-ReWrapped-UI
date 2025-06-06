import { useCallback, useEffect, useState } from "react";
import AlertNotification from "../components/AlertNotification";
import ApiClient from "../lib/ApiClient";
import AlertContext from "./AlertContext";

const AlertProvider = ({ children }: any) => {
  const [alertProps, setAlertProps] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showError = useCallback(
    (message: any) => {
      setAlertProps({
        open: true,
        message: message || "An unexpected error occurred.",
        severity: "error",
      });
    },
    [setAlertProps]
  );

  useEffect(() => {
    ApiClient.setupInterceptors(showError);
  }, [showError]);

  return (
    <AlertContext.Provider
      value={{
        setAlertProps,
        alertProps,
      }}
    >
      <AlertNotification />
      {children}
    </AlertContext.Provider>
  );
};
export default AlertProvider;
