import { useContext } from "react";
import { gameContext } from "../../context/GameContext/GameProvider";
import "./GameButtons.css";

export function GameButtons(){
    const {state,dispatch} = useContext(gameContext) 
    return(
        <div className="buttonContainer">
        { state.start &&
            <>
            <button onClick={() =>dispatch('toggleTraingle')}>Triangle</button>
            <button onClick={() =>dispatch('toggleCircle')}>Circle</button>
            <button onClick={() =>dispatch('toggleSquare')}>Square</button>
            <button className = {state.direction === 'reverse' ? 'buttonActive' : 'buttonInactive'} onClick={() =>dispatch('reverse')}>{'<'}</button>
            <button className = {state.direction === 'forward' ? 'buttonActive' : 'buttonInactive'} onClick={() =>dispatch('forward')}>{'>'}</button>
            <button onClick={() =>dispatch('reset')}>Reset Game</button>
          </>
        }
      </div>
    )
}