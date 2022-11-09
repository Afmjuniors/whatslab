import { useState } from "react"
import Header from "./components/Header/Header"
import { AppContainer } from "./GlobalStyle"
import Main from "./components/Main/Main"
import {inicialMessages} from "./assets/inicialMessages"


function App() {

  const [currSender, setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclana",
    "Astrodev"
  ]
  )
  const [messages, setMessages] = useState(inicialMessages)





  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }
  
  const deleteMessage = (idPessoa)=> {
    if( window.confirm("Quer Deletar Menssagem")){
      const newMessages = [...messages]
       const indexToDelete = newMessages.findIndex((message)=> (message.id===idPessoa))
       

    if(indexToDelete > -1){
      newMessages.splice(indexToDelete,1)
      setMessages(newMessages)
    }
  }
}

  return (


    <AppContainer>
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender} />
      <Main 
      deleteMessage={deleteMessage}
      messages={messages} />



    </AppContainer>
  )
}

export default App
