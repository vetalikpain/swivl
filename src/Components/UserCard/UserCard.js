import React, {Component} from 'react';
import CardAvatar from '../../img/user/avatar.png'
import EditIcon from '../../img/user/editIcon.svg'
import CardDropdown from '../CardDropdown/CardDropdown'
import Followers from "../Followers/Followers";
import './UserCard.scss'

export default class UserCard extends Component {
    render() {
        return (
            <div className="profile-card">
                <div className="profile__user-info">
                    <img src={CardAvatar} alt="" className="profile__user-avatar"/>
                    <div className="profile__user-info-names">
                        <h2 className='profile__user-name'>
                            Benjamin Clementine
                        </h2>
                        <p className="profile__user-nickname">
                            @benclementine
                        </p>
                        <button className='profile__edit-btn'>
                            <img src={EditIcon} className='edit-icon' alt="Edit Icon"/>
                            Edit Profile
                        </button>
                    </div>
                    <CardDropdown/>
                </div>
                <Followers/>
                <div className="profile__about-user">
                    <p>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30
                        percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates
                        on XRP, bitcoin and Ethereum.</p>
                </div>
            </div>
        )
    }
}