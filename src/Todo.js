import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import EditModal from "./EditModal";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} />
      </ListItem>
      <DeleteIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      />
      <EditModal todo={props.todo} />
    </List>
  );
}

export default Todo;
