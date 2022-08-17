import React from 'react';
import { Container, TextField, Button} from '@mui/material';
import { useState } from 'react';

const TodoForm = (onSubmit) => {


  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // onSubmit({
    //   id:Math.floor(Math.random() * 1000),
    //   Text:input
    // });

     setInput('')
  }

  return (
    <Container
       sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space=between",
        marginTop: "1.5vh",
        width: "38vw",
       }}
    >
      <form
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name='text'
          id="outlined-basic"
          type={"text"}
          size='medium'
          value={input}
          onChange = {handleChange}
          width = "30vw"
          placeholder="Enter your Task"
          variant="outlined"
        />
      </form>
      <Button
        sx={{
          height: '5.5vh',
          margin:'1vh'
        }}
        variant='contained'
      >
        Add todo
      </Button>
    </Container>
  )
}

export default TodoForm