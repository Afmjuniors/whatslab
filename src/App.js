import { useState } from "react"
import Header from "./components/Header/Header"

 
function App() {

  const [currSender , setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclana",
    "Astrodev"
    ]
  )
const onChangeSender = (e)=>{
  setCurrSender(e.target.value) 
}

  return (


    <div>
     <Header 
     senders = {senders}
     currSender = {currSender}
      onChangeSender = {onChangeSender}/>
      <h1>{currSender}</h1>

    </div>
  )
}

export default App
