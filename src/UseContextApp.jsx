import { useContext } from "react";
import {UserContext} from './App';
import UsestateApp from './UsestateApp';
import UseeffectApp from './UseeffectApp';
import UserefApp from './UserefApp';
import UseReducerApp from './UseReducerApp';
import UseCallbackApp from './UseCallbackApp';
import UseMemoApp from './UseMemoApp';
export default function UseContextApp() {
    // const currentState  = useContext(UserContext);
    const { changeName, currentState } = useContext(UserContext);
    return (
      <>
        <UsestateApp/>
        <UseeffectApp/>
        <UserefApp />
        <UseReducerApp/>
        <h2>{`Hello ${currentState.name} again!`}</h2>
        <button onClick={changeName}>Check useReducer</button>
        <UseCallbackApp/>
        <UseMemoApp/>

      </>
    );
}