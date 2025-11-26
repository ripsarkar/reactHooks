import { useCallback, useEffect } from "react";
import { useState } from "react";
import { memo } from "react";
import Button from '@mui/material/Button';
const Mycompu = memo(({mystsate}) => {
  const [count, setcount] = useState(0);
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

export default function UseCallbackApp() {
  const [mystsate, setmystsate] = useState(0)
    const [count, setcount] = useState(0);

  const MyApp = useCallback(() => {
    return (<><Mycompu mystsate={mystsate}/></>)
  },[mystsate])
  const calculateme = () => {
    setcount(count+2)
  }
  const increseme = () => {
    setmystsate(mystsate+1)
  }
  return (
    <>
      <MyApp />{count}
      <Button variant="outlined" onClick={calculateme}>Outlined</Button><br></br>
      <Button variant="contained" onClick={increseme}>increseme</Button>
    </>
  );
};