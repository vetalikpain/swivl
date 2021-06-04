import React from 'react';
import './PostsCard.scss'
import {Switch} from 'antd';
import {CaretRightOutlined, HeartFilled} from '@ant-design/icons'


export default function PostsCard({data}) {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    const button = <button className='post__share-btn'>Share</button>;
    const like = <div className='post__likes-btn'>
        <CaretRightOutlined className='watch-btn'/> <p>22</p>
        <HeartFilled className='like-btn'/> <p>122</p>
    </div>
    const post = data.map(({title, author, avatar, buttonType }) => {
        return (
            <div className='post__item'>
                <h2 className="post__title">
                    {title}
                </h2>
                <div className="post__footer">
                    <div className='post__author-wrapper'>
                        <img src={avatar} alt="Author avatar"/>
                        <p className="post__author">
                            {author}
                        </p>
                    </div>
                    {buttonType === 'share' ? button : like}
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