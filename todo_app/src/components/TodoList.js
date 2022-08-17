import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
            width={"100vw"}
        >
            <Paper
                sx={{
                    height: "70vh",
                    width: "42vw",
                }}
            >
                <Box
                    sx={{
                        height: "33%",
                        width: "40vw",
                    }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Typography color={"1F2232"} fontFamily={"Popins"} fontSize={"30px"}>
                        What's the Plan for Today
                    </Typography>
                    <TodoForm onSubmit = {addTodo}/>
                </Box>
            </Paper>
        </Box>
    );
};

export default TodoList;
