import React from 'react';
import './PostsCard.scss'
import {Switch} from 'antd';
import {CaretRightOutlined, HeartFilled} from '@ant-design/icons'

const posts = [{
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    type: true
}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    type: true

}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    type: false

}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    type: false
}]

export default function PostsCard() {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    const post = posts.map(({title, author, avatar, type}) => {
        const typeBtn = type
        const button = <button className='post__share-btn'>Share</button>;
        const like = <div className='post__likes-btn'>
            <CaretRightOutlined className='watch-btn'/> <p>22</p>
            <HeartFilled className='like-btn'/> <p>122</p>
        </div>

        return (
            <div className='post__item'>
                <h2 className="post__title">
                    {title}
                </h2>
                <div className="post__footer">
                    <div className='post__author-wrapper'>
                        <img src={avatar} alt=""/>
                        <p className="post__author">
                            {author}
                        </p>
                    </div>
                    {typeBtn ? button : like}
                </div>
            </div>
        )
    })
    return (
        <div className="post__card">
            <div className="post__switch-block">
                <p className='switcher-value'>Public</p>
                <Switch defaultChecked onChange={onChange}/>
                <p className='switcher-value'> Private</p>
            </div>
            <div className="posts__card-block">
                {post}
            </div>
        </div>
    )
}