import {Component} from "react";
import UserCard from "../UserCard/UserCard";
import './MainSection.scss'
import PostsCard from "../PostsCard/PostsCard";

export default class MainSection extends Component {
    render() {
        return (
            <div className="main-section">
                <div className="container">
                    <div className='main-section__container'>
                        <UserCard></UserCard>
                        <PostsCard></PostsCard>
                    </div>
                </div>
            </div>
        )
    }
}





