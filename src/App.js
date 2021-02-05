import './App.css';
import React from "react";

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="">Home</a>
            <a href="">News Feed</a>
            <a href="">Messages</a>
        </div>
    );
}

export default App;
