import React from 'react';
import s from './nav.module.css';
import {NavLink} from "react-router-dom";


export const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={ ({ isActive }) => isActive ? s.active : s.item} to="/Profile">Profile</NavLink></div>
            <div><NavLink className={ ({ isActive }) => isActive ? s.active : s.item}  to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a href="#">Music</a></div>
            <div className={s.item}><a href="#">Settings</a></div>
        </nav>
)
}