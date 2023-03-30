import {useEffect, useState} from 'react';
import './App.css';

function UseeffectApp() {
  const [candidatelist, setcandidatelist] = useState([{name:"Ripunjoy"},{name:"Rocky"}]);
  const [faculty, setfaculty] = useState([{name:"All"},{name:"Day long"}]);
  let myArr = [{name:"Ripunjoy"},{name:"Rajanyaa"}];

  useEffect(()=>{
    setcandidatelist([...myArr]);
    console.log(2)
  },[]);
  let mylist = candidatelist.map((item,index)=>{
    return (<li key={index+"candidate"}>{item.name}</li>)
  })
  let facultylist = faculty.map((item,index)=>{
    return (<li key={index+"faculty"}>{item.name}</li>)
  })
  let resetname = ()=>{
    let facList = [{name:"All"},{name:"Night long"}];
    setfaculty([...facList]);
  }
  return (
    <div>
      <div>{mylist}</div>
      <div>{facultylist}</div>
      <button onClick={resetname}>click me</button>
    </div>
  );
}

export default UseeffectApp;
