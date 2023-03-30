import {useReducer} from 'react';
import './App.css';
let initialState = {
  name:"",
  class:2
}
let myReducer = ((state, action) => {
  switch(action.type){
    case "actionOne":
      return { ...initialState, name:"useReducer works"}
    default:
      return state;
  }
})
function UseReducerApp() {
  let [currentState, dispatch] = useReducer(myReducer, initialState);
  let changeName =()=>{
    dispatch({
      type:'actionOne',
    })
  }
  return (
    <div>
      <div>{currentState.name}</div>
      <button onClick={changeName}>Check useReducer</button>
    </div>
  );
}

export default UseReducerApp;
