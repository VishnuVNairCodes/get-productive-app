import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <h1>Get Productive</h1>
      <form>
        <FormControl>
          <InputLabel>📑 Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          disabled={!input}
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
