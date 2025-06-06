import { createContext, Dispatch, SetStateAction, useContext } from "react";

type AlertProps = {
  open: boolean;
  message: string;
  severity: string;
};

const AlertContext = createContext<{
  alertProps: AlertProps;
  setAlertProps: Dispatch<SetStateAction<AlertProps>>;
}>({
  alertProps: {
    open: false,
    message: "",
    severity: "info",
  },
  setAlertProps: () => {},
});

export default AlertContext;
export const useAlert = () => useContext(AlertContext);
