import videoCam from "../../assets/videoCam-icon.svg"
import phoneCall from "../../assets/phoneCall-icon.svg"
import moreOptions from "../../assets/moreOptions-icon.svg"
import {HeaderContainer} from "./Header.styled"


function Header(props) {
    const { senders, currSender, onChangeSender } = props
    return (
        <HeaderContainer>
            <div>
                <img src="https://picsum.photos/200/200" alt="Profile Photo" />
                <div>
                    <select value={currSender} onChange={onChangeSender}  >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))
                        }
                    </select>
                    <p>Online</p>
                </div>
            </div>

            <div>
                <button>
                    <img src={videoCam} alt="Video Cam Icon" />
                </button>
                <button>
                    <img src={phoneCall} alt="Phone Cam Icon" />
                </button>
                <button>
                    <img src={moreOptions} alt="More Option Icon" />
                </button>

            </div>


        </HeaderContainer>
    )
}

export default Header