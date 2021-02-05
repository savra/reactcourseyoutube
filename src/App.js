import './App.css';
import React from "react";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="logo192.png"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Message</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="\images\backgroundImageContent.jpg"/></div>
                <div>
                    ava + desc
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
