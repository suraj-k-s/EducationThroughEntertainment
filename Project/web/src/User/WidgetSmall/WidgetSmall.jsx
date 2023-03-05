import "./widgetSmall.css"
import { Visibility } from '@material-ui/icons';


export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Joined Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Elon Musk</span>
                        <span className="widgetSmallUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Elon Musk</span>
                        <span className="widgetSmallUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Elon Musk</span>
                        <span className="widgetSmallUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Elon Musk</span>
                        <span className="widgetSmallUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Elon Musk</span>
                        <span className="widgetSmallUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
