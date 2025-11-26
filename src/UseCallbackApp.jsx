import { useCallback, useEffect } from "react";
import { useState } from "react";
import { memo } from "react";
import Button from '@mui/material/Button';
const Mycompu = memo(({mystsate}) => {
  useEffect(() => {
    for (let i = 0; i < 20000; i++) {
      console.log("Calculating...");
    }
  }, []);

  return (<div>
    {mystsate}
    <p>
      This is callbak funku
    </p>
  </div>)
})
const Todos = memo(({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});
export default function UseCallbackApp() {
  const [mystsate, setmystsate] = useState(0)
  const MyApp = useCallback(() => {
    return (<><Mycompu mystsate={mystsate}/></>)
  }, [mystsate])
  const calculateme = () => {
    console.log(2)
  }
  const increseme = () => {
    setmystsate(mystsate+1)
  }
  return (
    <>
      <MyApp />
      <Button variant="outlined" onClick={calculateme}>Outlined</Button><br></br>
      <Button variant="contained" onClick={increseme}>increseme</Button>
    </>
  );
};