import {Component} from "react";
import AddIcon from '@material-ui/icons/Add';

import HeaderDropdown from "../HeaderDropdown/HeaderDropdown"
import MainLogo from "../../img/header/mainLogo.svg"
import UserAvatar from "../../img/header/profile_picture.png"
import Notification from '../../img/header/notifications.svg'
import ShareRecap from '../../img/header/share_recap.svg';
import Medium from '../../img/header/medium.svg'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <img src={MainLogo} alt=""/>
                    </div>
                    <div className="header__profile">
                        <div className="header__user">
                            <h4 className={"header__user-name"}>Arthur Wood</h4>
                            <img src={UserAvatar} alt="" className="header__user-avatar"/>
                            <HeaderDropdown/>
                        </div>
                        <div className="header__profile-icons">
                            <img src={Notification} alt=""/>
                            <img src={ShareRecap} alt=""/>
                            <img src={Medium} alt=""/>
                        </div>
                    </div>
                    <button className="header__add-btn">
                        <AddIcon/>
                    </button>
                </div>
            </div>
        )
    }
}