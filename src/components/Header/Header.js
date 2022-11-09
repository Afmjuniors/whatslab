import videoCam from "../../assets/videoCam-icon.svg"
import phoneCall from "../../assets/phoneCall-icon.svg"
import moreOptions from "../../assets/moreOptions-icon.svg"
import {HeaderContainer , Select, Status} from "./Header.styled"


function Header(props) {
    const { senders, currSender, onChangeSender } = props
    return (
        <HeaderContainer>
            <div className="sender-profile">
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="Profile Photo" />
                <div>
                    <Select value={currSender} onChange={onChangeSender}  >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))
                        }
                    </Select>
                    <Status>Online</Status>
                </div>
            </div>

            <div className="action-menu">
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