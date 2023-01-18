import { useContext } from "react";
import { gameContext } from "../../context/GameContext/GameProvider";
import { Input } from "./Input";
import "./GameInput.css";
export function GameInput({ onSubmitHandler }) {
  const {
    state: { start },
  } = useContext(gameContext);
  return (
    <div className="inputContainer">
      {!start && (
        <Input
          lableText={"Enter a number to create objects: "}
          onSubmitHandler={onSubmitHandler}
        />
      )}
    </div>
  );
}
