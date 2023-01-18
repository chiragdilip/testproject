import Game from './Game'
export function GameView({start,noOfObjs}){
  return(
    <div className="borderContainer">
      {start && <Game objs={noOfObjs} />}
    </div>
  )
}
