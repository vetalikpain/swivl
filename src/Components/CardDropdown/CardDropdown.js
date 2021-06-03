import React from 'react';
import './CardDropdown.scss'
import {Menu, Dropdown} from 'antd';

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
            <a className="card__dropdown-button" onClick={e => e.preventDefault()}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="a/icon_3_dots_menu">
                        <rect id="16x16" opacity="0.01" width="16" height="16" fill="#ECF1F8"/>
                        <g id="Combined Shape">
                            <mask id="path-2-inside-1" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"/>
                            </mask>
                            <path
                                d="M8 6C10.2091 6 12 4.20914 12 2H8V6ZM4 2C4 4.20914 5.79086 6 8 6V2H4ZM8 -2C5.79086 -2 4 -0.209139 4 2H8V-2ZM12 2C12 -0.209139 10.2091 -2 8 -2V2H12ZM8 12C10.2091 12 12 10.2091 12 8H8V12ZM4 8C4 10.2091 5.79086 12 8 12V8H4ZM8 4C5.79086 4 4 5.79086 4 8H8V4ZM12 8C12 5.79086 10.2091 4 8 4V8H12ZM8 14V18C10.2091 18 12 16.2091 12 14H8ZM8 14H12C12 11.7909 10.2091 10 8 10V14ZM8 14V10C5.79086 10 4 11.7909 4 14H8ZM8 14H4C4 16.2091 5.79086 18 8 18V14Z"
                                fill="#3E4056" mask="url(#path-2-inside-1)"/>
                        </g>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="0" width="4" height="16">
                            <g id="Combined Shape_2">
                                <mask id="path-4-inside-2" mask-type="luminance" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"
                                      fill="white"/>
                                <path
                                    d="M8 6C10.2091 6 12 4.20914 12 2H8V6ZM4 2C4 4.20914 5.79086 6 8 6V2H4ZM8 -2C5.79086 -2 4 -0.209139 4 2H8V-2ZM12 2C12 -0.209139 10.2091 -2 8 -2V2H12ZM8 12C10.2091 12 12 10.2091 12 8H8V12ZM4 8C4 10.2091 5.79086 12 8 12V8H4ZM8 4C5.79086 4 4 5.79086 4 8H8V4ZM12 8C12 5.79086 10.2091 4 8 4V8H12ZM8 14V18C10.2091 18 12 16.2091 12 14H8ZM8 14H12C12 11.7909 10.2091 10 8 10V14ZM8 14V10C5.79086 10 4 11.7909 4 14H8ZM8 14H4C4 16.2091 5.79086 18 8 18V14Z"
                                    fill="white" mask="url(#path-4-inside-2)"/>
                            </g>
                        </mask>
                        <g mask="url(#mask0)">
                            <g id="_/color_dark_gray">
                                <rect id="Color" x="-4" y="-4" width="24" height="24" fill="#3E4056"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </Dropdown>
    );
}

