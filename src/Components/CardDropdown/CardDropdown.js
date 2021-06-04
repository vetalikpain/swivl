import React from 'react';
import {Menu, Dropdown} from 'antd';
import moreOption from '../../img/cardDropdown/moreOption.svg'
import reportIcon from '../../img/cardDropdown/ReportIconDrop.svg'
import blockIcon from '../../img/cardDropdown/BlockIconDrop.svg'
import './CardDropdown.scss'

const menu = (
    <Menu className='card-dropdown'>
        <Menu.Item key="0" className='card__dropdown-item'>
            <a href="#">
                <img src={reportIcon} alt="Report user"/>
                Report User
            </a>
        </Menu.Item>
        <Menu.Item key="1" className='card__dropdown-item'>
            <a href="#">
                <img src={blockIcon} alt="Block user"/>
                Block User
            </a>
        </Menu.Item>
        <Menu.Divider/>
    </Menu>
);
export default function CardDropdown() {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="card__dropdown-button" href='#'>
                <img src={moreOption} alt=""/>
            </a>
        </Dropdown>
    );
}

