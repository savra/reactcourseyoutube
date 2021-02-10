import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavigationBar/>
            <Profile/>
        </div>
    );
}
export default App;