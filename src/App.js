import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TodoForm from "./component/TodoForm";
import DataTables from "./component/DataTable";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 0,
};
export const TodoContext = React.createContext();
export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true)
    setData(0)};
  const handleClose = () => setOpen(false);
  const [todo, setTodo] = React.useState([]);
  const [data, setData] = React.useState(0);
  return (
    <TodoContext.Provider value={setTodo}>
      <Button
        variant="contained"
        color="success"
        onClick={handleOpen}
        sx={{ m: 5,display:'flex',marginRight:'auto',marginLeft:'auto' }}
      >
        Add Todo{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TodoForm todo={todo} handleClose={handleClose} data={data} />
        </Box>
      </Modal>
      <DataTables todo={todo} setTodo={setTodo} setOpen={setOpen} setData={setData}  />
    </TodoContext.Provider>
  );
}
