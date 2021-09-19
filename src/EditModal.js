import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  Input,
  Modal,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import db from "./firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateTodo = (event) => {
    event.preventDefault();
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <div>
      <EditIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form>
              <FormControl>
                <Input
                  placeholder={props.todo.todo}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                disabled={!input}
                onClick={updateTodo}
              >
                Update Todo
              </Button>
              <Button variant="contained" type="submit" onClick={handleClose}>
                Cancel
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
