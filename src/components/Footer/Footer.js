import { FooterContainer } from "./Footer.styled"
import smilley from '../../assets/smiley.svg'
import paperClip from '../../assets/paperclip.svg'
import microphone from '../../assets/microphone.svg'

import { useState } from "react"

function Footer(props) {
    const { sendMassage } = props

    const [text, setText] = useState("")

    const hanfleChangeText = (e) => {

        setText(e.target.value)

    }
    const clearText = () =>{
        setText('')
    }




    return (
        <FooterContainer>
            <div>
                <button className="emoji">
                    <img src={smilley} alt="Emoji Icon" />

                </button>
                <input
                    value={text}
                    onChange={hanfleChangeText}
                    placeholder="Type a message"
                    onKeyDown={(e) => sendMassage(e, text,clearText)} />
                <button className="paperClip">
                    <img src={paperClip} alt="Clip Icon" />

                </button>

            </div>
            <button className="microphone">

                <img src={microphone} alt="Microfone Icon" />
            </button>

        </FooterContainer>


    )
}
export default Footer