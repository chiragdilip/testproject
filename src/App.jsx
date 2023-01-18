import { useContext ,useState } from "react";
import { GameView } from "./components/Game";
import { gameContext } from "./context/GameContext/GameProvider";
import { GameInput } from "./components/GameInput";
import { GameButtons } from "./components/GameButtons";
import "./App.css";


function App() {
  
  const {state,dispatch} = useContext(gameContext)
  const [noOfObjs, setNoOfObjs] = useState(0);

  const onSubmitHandler = (value) => {
    setNoOfObjs(value);
    dispatch('start');
  };
  return (
    <div className="outerContainer">
        <GameInput onSubmitHandler={onSubmitHandler}/>
        <GameView start={state.start} noOfObjs={noOfObjs}/>
        <GameButtons/>
       
    </div>
  );
}

export default App;
