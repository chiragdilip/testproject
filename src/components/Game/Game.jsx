import React,{useContext, useState, useEffect} from "react";
import useCanvas from "../../hooks/useCanvas";
import { gameContext } from "../../context/GameContext/GameProvider";
import generateObjects from "../../utils/generateObjects";

//Main controller  of the game
export default function Game({objs}) {
  const {state:{direction,traingle,circle,square}} = useContext(gameContext)

  const [list,setList] = useState(()=> generateObjects(objs))

  //console log the generated list as per requirement
  useEffect(() =>{
    console.log(list)
  },[])
  const ref = useCanvas(draw,direction === 'stop')

  function draw(ctx){
    //clear screen

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const newList = list.map((v) => {

      //first change positions
      const newPosition = {
        x:v.position.x + (direction === "forward" ? v.velocity.x : (v.velocity.x * -1)),
        y:v.position.y + (direction === "forward" ? v.velocity.y : (v.velocity.y * -1))
      };

      //map x and y from range 0 to 800  to a screen of 600x600
    
      const mappedX = newPosition.x * (3/4)
      const mappedY = newPosition.y * (3/4)


      //create a random line from the object  in any direction     
      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.moveTo(mappedX,mappedY);

      const x = mappedX + (v.size + 10) * Math.cos(Math.random() * Math.PI * 2)
      const y = mappedY + (v.size +10 ) * Math.sin(Math.random() * Math.PI * 2)
      ctx.lineTo(x,y)
      ctx.stroke()

      //attach a name to the end of the line
      ctx.font = "13px serif";
      ctx.fillText(v.name,x,y)
      ctx.beginPath()

      //create different objects
      ctx.fillStyle = v.color
      if(v.type === 'square'){
        ctx.fillRect(mappedX,mappedY,v.size,v.size)
        ctx.filter = square ?  'opacity(50%)':'opacity(100%)'
      }
      else if(v.type === 'circle'){
        ctx.arc(mappedX,mappedY,v.size,0,2 * Math.PI)
        ctx.filter = circle ?  'opacity(50%)':'opacity(100%)'
      }
      else{
        //draw a equilateral triangle
        const height = v.size * (Math.sqrt(3)/2)
        const x = mappedX
        const y= mappedY
        ctx.moveTo(x,y - height/2)
        ctx.lineTo(x- v.size/2,y+height/2)
        ctx.lineTo(x+v.size/2,y+height/2)
        ctx.lineTo(x,y-height/2)

        ctx.filter = traingle ?  'opacity(50%)':'opacity(100%)'
      }
      ctx.closePath()
      ctx.fill()
      //return a new object with changed position
      return {
        ...v,
        position:newPosition
      }
    })
    setList(newList)
  
  }
  return (
    <canvas ref={ref} height={600} width={600}/>
  );
}