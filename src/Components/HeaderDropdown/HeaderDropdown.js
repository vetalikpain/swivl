import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import './HeaderDropdown.scss'

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Vibrat'
            </a>
        </Menu.Item>
    </Menu>
);
export default function HeaderDropdown() {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <DownOutlined/>
            </a>
        </Dropdown>
    )
}
