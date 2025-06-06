import CloseIcon from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useContext } from "react";
import AlertContext from "../stores/AlertContext";

const AlertNotification = () => {
  const { alertProps, setAlertProps } = useContext(AlertContext);
  return (
    <Collapse
      in={alertProps.open}
      sx={{
        zIndex: 100,
        position: "absolute",
        width: "50%",
        opacity: 0.9,
        fontWeight: "bold",
        top: "10px",
        left: "25%",
      }}
    >
      <Alert
        severity={
          alertProps.severity as "error" | "warning" | "info" | "success"
        }
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlertProps({ ...alertProps, open: false });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {alertProps.message}
      </Alert>
    </Collapse>
  );
};

export default AlertNotification;
