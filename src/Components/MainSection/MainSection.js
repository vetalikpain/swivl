import {Component} from "react";
import UserCard from "../UserCard/UserCard";
import PostsCard from "../PostsCard/PostsCard";
import './MainSection.scss'

const posts = [{
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    buttonType: 'share',
    id: 1
}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    buttonType: 'share',
    id: 2

}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    buttonType: 'like',
    id: 3

}, {
    title: 'New air routes that promise cheap flights in',
    author: 'Gregory Watkins',
    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
    buttonType: 'like',
    id: 4
}]

export default class MainSection extends Component {
    render() {
        return (
            <div className="main-section">
                <div className="container">
                    <div className='main-section__container'>
                        <UserCard/>
                        <PostsCard data={posts}/>
                    </div>
                </div>
            </div>
        )
    }
}





