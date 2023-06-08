import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";


function Transition(props) {
  return <Slide {...props} direction="left" />;
}

export let message;

function SnackAlert() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("success");
  const [content, setContent] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const helper = (title, content, severity ) => {
    setOpen(true);
    setTitle(title);
    setContent(content);
    setSeverity(severity);
  };
  message = {
    success: (title, content) => {
      helper(title, content, "success");
    },
    error: (title, content ) => {
      helper(title, content, "error");
    },
  };
  return (
    <Snackbar
      sx={{ mt: 2 }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Alert onClose={() => setOpen(false)} severity={severity}>
        <AlertTitle sx={{ fontSize: "0.895rem" }}>{title}</AlertTitle>
        <Typography sx={{ fontSize: "12px", fontStyle: "italic" }}>
          {content}
        </Typography>
      </Alert>
    </Snackbar>
  );
}
export default SnackAlert;
