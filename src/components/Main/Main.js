import { MainContainer, Chatballon } from "./Main.styled"
import tickIcon from "../../assets/tick-double-blue.svg"
import tickIconWhite from "../../assets/tick-double-white.svg"

function Main(props) {
    const { messages , deleteMessage } = props


    return (
        <MainContainer>
            {
                messages.map((message) => {
                    return (
                        <div>

                            <Chatballon 
                            sender={message.sender}
                            onDoubleClick={()=>deleteMessage(message.id)} >
                                {message.sender === "Me" || <h1>{message.sender}</h1>}
                                <p>{message.content}</p>

                                <span>
                                    <span>{message.currentDate} </span>
                                    {message.sender == "Me" ? <img src={tickIconWhite} alt="tick View status Icon" /> :
                                        <img src={tickIcon} alt="tick View status Icon" />

                                    }
                                </span>

                            </Chatballon>
                        </div>

                    )})}


        </MainContainer>
    )

}
export default Main