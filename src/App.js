import React,{useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import {Animated} from "react-animated-css";

export default function App() {
  const [showbtn, setShowbtn] = useState(false)
  return (
   <>
   
   <Button variant="primary" onClick={()=>setShowbtn(true)}>SHow me the magic !</Button>

   <Card style={{width: 800}}>
    





  {showbtn && <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
    <Button variant="success" size="lg" className="p-5 ml-2 mr-2"> Hello there!</Button>
    </div>
</Animated> } 
</Card>
   </>
  )
}
