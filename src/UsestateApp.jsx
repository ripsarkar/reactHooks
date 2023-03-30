import {useState} from 'react';
import './App.css';

function UsestateApp() {
  const [candidatelist] = useState([{name:"Ripunjoy"},{name:"Rocky"}]);
  let mylist = candidatelist.map((item, index)=>{
      return (<li key={index+item.name}>{item.name}</li>)
  })
  return (
    <div>{mylist}</div>
  );
}

export default UsestateApp;
