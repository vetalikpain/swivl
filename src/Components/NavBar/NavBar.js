import React, {Component} from "react";
import './NavBar.scss'

export default class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav-bar">
                    <a href="#" className="nav-item active">Feed</a>
                    <a href="#" className="nav-item">Explore</a>
                    <a href="#" className="nav-item">Discussions</a>
                </div>
            </div>
        )
    }
}