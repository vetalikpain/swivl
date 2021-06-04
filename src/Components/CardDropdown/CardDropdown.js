import React from 'react';
import {Menu, Dropdown} from 'antd';
import moreOption from '../../img/moreOption.svg'
import './CardDropdown.scss'

const menu = (
    <Menu className='card-dropdown'>
        <Menu.Item key="0" className='card__dropdown-item'>
            <a href="#">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.01" width="20" height="20" fill="#C3CADF"/>
                    <path d="M4 17C2.89543 17 2 16.1046 2 15V3C2 1.89543 2.89543 1 4 1H14C15.1046 1 16 1.89543 16 3V4"
                          stroke="#3E4056" stroke-width="2"/>
                    <rect x="5" y="4" width="8" height="2" rx="1" fill="#3E4056"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5 9C5 8.44772 5.44772 8 6 8H10L8 10H6C5.44772 10 5 9.55228 5 9Z" fill="#3E4056"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M13.8933 6.92764C14.6743 6.14659 15.9407 6.14659 16.7217 6.92764L19.5501 9.75607C20.3312 10.5371 20.3312 11.8034 19.5501 12.5845L12.6064 19.5282C12.5241 19.6105 12.4156 19.6615 12.2997 19.6724L8.58474 20.0219C7.32474 20.1405 6.27281 19.0737 6.40902 17.8155L6.80325 14.1739C6.81552 14.0605 6.86617 13.9548 6.94679 13.8741L13.8933 6.92764ZM14.6004 9.04896C14.9909 8.65844 15.6241 8.65844 16.0146 9.04896L17.4288 10.4632C17.8193 10.8537 17.8193 11.4869 17.4288 11.8774L16.7217 12.5845L13.8933 9.75607L14.6004 9.04896ZM12.4791 11.1703L8.94404 14.7053L8.53083 16.7702C8.39079 17.47 9.00782 18.087 9.70762 17.9469L11.7725 17.5337L15.3075 13.9987L12.4791 11.1703Z"
                          fill="#3E4056"/>
                </svg>
                Report User
            </a>
        </Menu.Item>
        <Menu.Item key="1" className='card__dropdown-item'>
            <a href="#">
                <svg width="20" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="a/icon_delete">
                        <path id="Oval 382 Copy"
                              d="M12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316583 10.2161 0.316583 5.78392 3.05025 3.05025C5.78392 0.316583 10.2161 0.316583 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497Z"
                              stroke="#3E4056" stroke-width="2"/>
                        <path id="Path 2" d="M5 11L11 5" stroke="#3E4056" stroke-width="2"/>
                        <path id="Path 2 Copy" d="M11 11L5 5" stroke="#3E4056" stroke-width="2"/>
                    </g>
                </svg>
                Block User
            </a>
        </Menu.Item>
        <Menu.Divider/>
    </Menu>
);
export default function CardDropdown() {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="card__dropdown-button">
                <img src={moreOption} alt=""/>
            </a>
        </Dropdown>
    );
}

