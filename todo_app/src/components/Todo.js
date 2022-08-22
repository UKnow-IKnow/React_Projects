import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Typography, useTheme } from "@mui/material";
import { FiEdit2 } from "react-icons/fi";



const Todo = (todos, removeTodo, updateTodo) => {
  const theme = useTheme();
  return todos.map((todo, index) => (
    <Container
      sx={{
        height: "5.5vh",
        width: "28vw",
      }}
      style={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1.5vh",
        backgroundColor:
          todo.id % 3 === 0
            ? theme.palette.primary.main
            : todo.id % 3 === 1
            ? theme.palette.secondary.main
            : theme.palette.info.main,
      }}
    >
      <Typography> {todo.text}</Typography>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "3vw",
          alignItems: "center",
          height: "5.5vh",
          padding: "0px",
          margin: "0px",
        }}
      >
        <DeleteIcon
          color={theme.palette.background.default}
          onClick={() => {
            removeTodo(index);
          }}
        />
        <FiEdit2 onClick={() => updateTodo(index)} />
      </Container>
    </Container>
  ));
}

export default Todo