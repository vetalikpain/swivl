import React, {Component} from 'react';
import CardAvatar from '../img/user/avatar.png'

import CardDropdown from '../CardDropdown/CardDropdown'
import './UserCard.scss'
import Followers from "../Followers/Followers";

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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="edit icon">
                                    <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd"
                                          d="M10.8963 3.41421C11.6774 2.63316 12.9437 2.63316 13.7248 3.41421L16.5532 6.24264C17.3342 7.02369 17.3342 8.29002 16.5532 9.07107L9.60476 16.0195C9.52246 16.1018 9.41404 16.1528 9.29817 16.1637L5.58247 16.5143C4.32207 16.6332 3.26968 15.566 3.40628 14.3074L3.80158 10.665C3.81388 10.5517 3.86452 10.446 3.94511 10.3654L10.8963 3.41421ZM11.6027 5.53631C11.9932 5.14579 12.6263 5.14579 13.0169 5.53631L14.4311 6.95053C14.8216 7.34105 14.8216 7.97422 14.4311 8.36474L13.7232 9.07263L10.8948 6.2442L11.6027 5.53631ZM9.47978 7.6592L5.9428 11.1962L5.52896 13.2615C5.3887 13.9614 6.00596 14.5787 6.70594 14.4384L8.77123 14.0246L12.3082 10.4876L9.47978 7.6592Z"
                                          fill="#F05D63"/>
                                </g>
                            </svg>
                            Edit Profile
                        </button>
                    </div>
                    <CardDropdown></CardDropdown>
                </div>
                <Followers></Followers>
                <div className="profile__about-user">
                    <p>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30
                        percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates
                        on XRP, bitcoin and Ethereum.</p>
                </div>
            </div>
        )
    }
}