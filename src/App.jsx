import { createContext, useReducer } from "react";
import UseContextApp from './UseContextApp';
import UseCallbackApp from './UseCallbackApp';
let initialState2 = {
    name:"Buku",
    class:2
  }
let myReducer2 = ((state, action) => {
    switch(action.type){
      case "actionOne":
        return { ...initialState2, name:"useReducer works"}
      default:
        return state;
    }
})
export const UserContext = createContext();

export default function App() {
  let [currentState, dispatch] = useReducer(myReducer2, initialState2);
  let changeName =()=>{
    dispatch({
      type:'actionOne',
    })
  }
  return (
    <UseCallbackApp />
    // <UserContext.Provider value={{currentState, changeName}}>
    //   <UseContextApp />
    //   {/* <button onClick={changeName}>Check useReducer</button> */}
    // </UserContext.Provider>
  );
}
