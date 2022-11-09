import { useState } from "react"
import { AppContainer } from "./GlobalStyle"
import { inicialMessages } from "./assets/inicialMessages"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"


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

  const deleteMessage = (idPessoa) => {
    if (window.confirm("Quer Deletar Menssagem")) {
      const newMessages = [...messages]
      const indexToDelete = newMessages.findIndex((message) => (message.id === idPessoa))


      if (indexToDelete > -1) {
        newMessages.splice(indexToDelete, 1)
        setMessages(newMessages)
      }
    }
  }

  const sendMassage = (e, text , clearText) => {
    
    if (e.key === "Enter") {
      const newMassage = {
        id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
        sender: currSender,
        content: text,
        currentDate: new Date()
          .toLocaleTimeString(
            "en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          }
          )
      }
      const newMessanges = [...messages, newMassage]
      setMessages(newMessanges)
      clearText()

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
      <Footer sendMassage={sendMassage} />




    </AppContainer>
  )
}

export default App
